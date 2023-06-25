import React, { useState } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/Recommendation.module.css";
import { axiosRes } from "../api/axiosDefaults";
import RecommendationCreateEditForm from "../pages/recommendations/RecommendationCreateEditForm";

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
  const recommendationNote = profile_name && `${profile_name} recommending ${receiver_name} based on ${
    relation_name ? `being his/ her ${relation_name} ` : `having a role`
  } at ${company_name}.`;

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
          console.log(err);
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
      console.log(err);
    }
  };

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
  const handleUnBoost = async () => {
    try {
      await axiosRes.delete(`/boosts/${boost_id}`);
      updateRecommendation({ boosts_count: boosts_count - 1, boost_id: null });
    } catch (err) {
      console.log(err);
    }
  };

  const changeFeature = async (featured) => {
    if (currentUser?.profile_id === receiver) {
      try {
        await axiosRes.put(`/recommendations/feature/${id}`, {
          is_featured: featured,
        });
        updateRecommendation({ is_featured: featured });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleFeature = () => {
    changeFeature(true);
  };

  const handleUnFeature = () => {
    changeFeature(false);
  };

  const recommendationReadonly = (
    <div>
      <Link to={`/recommendations/${id}`}>
        <div className={appStyles.Content}>{content}</div>
      </Link>
      <div>
        <Link to={`/profiles/${receiver}`}>
          <Avatar
            src={receiver_image}
            text={receiver_name}
            title={receiver_title}
            height={60}
          />
        </Link>
      </div>

      <span className={appStyles.RecommendationNote}>{recommendationNote}</span>

      {boosts_count === 1 ? (
        <span>
          <i className={`fa-solid fa-rocket ${btnStyles.Clicked}`}></i>1 Boost
        </span>
      ) : (
        boosts_count > 1 && (
          <span>
            <i className={`fa-solid fa-rocket ${btnStyles.Clicked}`}></i>
            {boosts_count} Boosts
          </span>
        )
      )}
      {is_featured && (
        <span>
          <i className={`fa-solid fa-star ${btnStyles.Clicked}`}></i>
        </span>
      )}
    </div>
  );

  const recommendationEditable = (
    <div>
      <RecommendationCreateEditForm
        {...props}
        edit={editMode}
        setEditMode={setEditMode}
        updateRecommendation={updateRecommendation}
      />
    </div>
  );

  return (
    <>
      <Card>
        <Card.Header>
          <span>
            <Link to={`/profiles/${profile}`}>
              <Avatar
                src={profile_image}
                text={profile_name}
                title={profile_title}
                height={60}
              />
            </Link>
          </span>
          <span className={appStyles.Right}>
            <span className={`text-muted ${appStyles.Date}`}>{date}</span>
            <br />
            {is_owner &&
              (!editMode ? (
                <>
                  <button
                    onClick={handleEdit}
                    className={`fa-solid fa-pen-to-square ${btnStyles.Option}`}
                  ></button>
                  <button
                    onClick={handleDelete}
                    className={`fa-solid fa-trash ${btnStyles.Option}`}
                  ></button>
                </>
              ) : (
                <>
                  <button
                    form="recommendationCreateEditForm"
                    type="submit"
                    className={`fa-solid fa-floppy-disk ${btnStyles.Option}`}
                  ></button>
                  <button
                    onClick={handleDelete}
                    className={`fa-solid fa-trash ${btnStyles.Option}`}
                  ></button>
                </>
              ))}
          </span>
        </Card.Header>
        <Card.Body>
          {!editMode ? recommendationReadonly : recommendationEditable}
        </Card.Body>
        <Card.Footer>
          <div className={appStyles.ActionArea}>
            {boost_id ? (
              <span
                onClick={handleUnBoost}
                className={`fa-solid fa-rocket ${btnStyles.Clicked}`}
              ></span>
            ) : currentUser ? (
              boosts_count === 0 ? (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      Be the first one to boost this recommendation
                    </Tooltip>
                  }
                >
                  <button
                    onClick={handleBoost}
                    className={`fa-solid fa-rocket ${btnStyles.NotClicked}`}
                  ></button>
                </OverlayTrigger>
              ) : (
                <button
                  onClick={handleBoost}
                  className={`fa-solid fa-rocket ${btnStyles.NotClicked}`}
                ></button>
              )
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>Login to be able to boost recommendation</Tooltip>
                }
              >
                <button
                  className={`fa-solid fa-rocket ${btnStyles.NotClicked}`}
                ></button>
              </OverlayTrigger>
            )}
            {isReceiver && is_featured ? (
              <button
                onClick={handleUnFeature}
                className={`fa-solid fa-star ${btnStyles.Clicked}`}
              ></button>
            ) : isReceiver && !is_featured ? (
              <button
                onClick={handleFeature}
                className={`fa-solid fa-star ${btnStyles.NotClicked}`}
              ></button>
            ) : (
              <></>
            )}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Recommendation;
