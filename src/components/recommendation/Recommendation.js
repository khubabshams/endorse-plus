import { RecommendationHeader } from "./RecommendationHeader";
import { RecommendationContent } from "./RecommendationContent";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import RecommendationCreateEditForm from "./RecommendationCreateEditForm";
import RecommendationFooter from "./RecommendationFooter";

const Recommendation = (props) => {
  const currentUser = useCurrentUser();
  const history = useHistory();
  const [editMode, setEditMode] = useState(false);

  const {
    created_at,
    updated_at,
    boost_id,
    boosts,
    boosts_count,
    content,
    id,
    is_featured,
    is_owner,
    profile,
    profile_name,
    receiver_name,
    receiver_image,
    profile_image,
    profile_title,
    receiver_title,
    receiver,
    related_experience,
    relation,
    relation_name,
    company_name,
    setRecommendations,
  } = props;

  const isReceiver = currentUser?.profile_id === receiver;

  const date =
    created_at !== updated_at
      ? `${created_at} edited: ${updated_at}`
      : created_at;
  const recommendationNote =
    profile_name &&
    `Recommended based on ${
      relation_name ? `being his/ her ${relation_name} ` : ` role`
    } at ${company_name}`;

  const updateRecommendation = (updatedData) => {
    setRecommendations((prevRecommendations) => ({
      ...prevRecommendations,
      results: prevRecommendations.results.map((recommendation) => {
        return recommendation.id === id
          ? {
              ...recommendation,
              ...updatedData,
            }
          : recommendation;
      }),
    }));
  };

  const handleEdit = (event) => {
    event.preventDefault();

    if (is_owner) {
      setEditMode(true);
    }
  };

  const handleDelete = async () => {
    if (is_owner) {
      if (
        window.confirm("Are you sure you want to remove this recommendation?")
      ) {
        try {
          await axiosRes.delete(`/recommendations/${id}`);
          history.goBack();
        } catch (err) {
          // console.log(err);
        }
      }
    }
  };

  const handleBoost = async () => {
    try {
      const { data } = await axiosRes.post("/boosts/", {
        recommendation: id,
        profile: currentUser?.profile_id,
      });
      updateRecommendation({
        boosts_count: boosts_count + 1,
        boost_id: data.id,
      });
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnBoost = async () => {
    try {
      await axiosRes.delete(`/boosts/${boost_id}`);
      updateRecommendation({ boosts_count: boosts_count - 1, boost_id: null });
    } catch (err) {
      // console.log(err);
    }
  };

  const changeFeature = async (featured) => {
    if (currentUser?.profile_id === receiver) {
      try {
        await axiosRes.put(`/recommendations/feature/${id}/`, {
          is_featured: featured,
        });
        updateRecommendation({ is_featured: featured });
      } catch (err) {
        // console.log(err);
      }
    }
  };

  const handleFeature = () => {
    changeFeature(true);
  };

  const handleUnFeature = () => {
    changeFeature(false);
  };

  return (
    <Card className="rounded-0 mt-2">
      <RecommendationHeader
        profile={profile}
        profile_image={profile_image}
        profile_name={profile_name}
        profile_title={profile_title}
        date={date}
        is_owner={is_owner}
        editMode={editMode}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <hr />
      <Card.Body>
        {editMode ? (
          <RecommendationCreateEditForm
            {...props}
            edit={editMode}
            setEditMode={setEditMode}
            updateRecommendation={updateRecommendation}
          />
        ) : (
          <RecommendationContent
            id={id}
            content={content}
            recommendationNote={recommendationNote}
            receiver={receiver}
            receiver_image={receiver_image}
            receiver_name={receiver_name}
            receiver_title={receiver_title}
          />
        )}
      </Card.Body>
      <hr />
      <RecommendationFooter
        boost_id={boost_id}
        handleUnBoost={handleUnBoost}
        currentUser={currentUser}
        boosts_count={boosts_count}
        handleBoost={handleBoost}
        isReceiver={isReceiver}
        is_featured={is_featured}
        handleUnFeature={handleUnFeature}
        handleFeature={handleFeature}
      />
    </Card>
  );
};

export default Recommendation;
