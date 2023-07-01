import React, { useState } from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const recommendationNote =
    profile_name &&
    `${profile_name} recommending ${receiver_name} based on ${
      relation_name ? `being his/ her ${relation_name} ` : `having a role`
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
    <Link to={`/recommendations/${id}`}>
      <Card.Text>
        <p className={appStyles.Content}>{content}</p>

        <span className="mt-2">
          <Link to={`/profiles/${receiver}`}>
            <Avatar
              src={receiver_image}
              text={receiver_name}
              title={receiver_title}
              height={40}
            />
          </Link>
        </span>

        <p className={`text-muted mt-2 ${styles.RecommendationNote}`}>
          {recommendationNote}
        </p>
      </Card.Text>
    </Link>
  );

  return (
    <Card className="rounded-0 mt-2">
      <div className={appStyles.CardHeader}>
        <span>
          <Link to={`/profiles/${profile}`}>
            <Avatar
              src={profile_image}
              text={profile_name}
              title={profile_title}
              height={60}
              time={date}
            />
          </Link>
        </span>
        <span>
          {is_owner &&
            (!editMode ? (
              <span>
                <Button
                  variant="secondary"
                  onClick={handleEdit}
                  className={`fa-solid fa-pen-to-square ${btnStyles.Button} ${btnStyles.Option}`}
                ></Button>
                <Button
                  variant="secondary"
                  onClick={handleDelete}
                  className={`fa-solid fa-trash ${btnStyles.Button} ${btnStyles.Option}`}
                ></Button>
              </span>
            ) : (
              <>
                <Button
                  variant="secondary"
                  form="recommendationCreateEditForm"
                  type="submit"
                  className={`fa-solid fa-floppy-disk ${btnStyles.Button} ${btnStyles.Option}`}
                ></Button>
                <Button
                  variant="secondary"
                  onClick={handleDelete}
                  className={`fa-solid fa-trash ${btnStyles.Button} ${btnStyles.Option}`}
                ></Button>
              </>
            ))}
        </span>
      </div>
      <hr />
      <Card.Body>
        {!editMode ? (
          recommendationReadonly
        ) : (
          <RecommendationCreateEditForm
            {...props}
            edit={editMode}
            setEditMode={setEditMode}
            updateRecommendation={updateRecommendation}
          />
        )}
      </Card.Body>
      <span className={`text-muted ${appStyles.Info}`}>
        {boosts_count === 1 ? (
          <>
            <i className={`fa-solid fa-rocket`}></i>1 Boost
          </>
        ) : (
          <>
            <i className={`fa-solid fa-rocket`}></i>
            {boosts_count} Boosts
          </>
        )}
        {is_featured && (
          <>
            <i className={`fa-solid fa-star`}></i> Featured
          </>
        )}
      </span>
      <hr />
      <div className={appStyles.CardFooter}>
        {boost_id ? (
          <Button
            variant="secondary"
            onClick={handleUnBoost}
            className={`fa-solid fa-rocket ${btnStyles.Button} ${btnStyles.Option}`}
          ></Button>
        ) : currentUser ? (
          boosts_count === 0 ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>Be the first one to boost this recommendation</Tooltip>
              }
            >
              <Button
                variant="secondary"
                onClick={handleBoost}
                className={`fa-solid fa-rocket ${btnStyles.Button} ${btnStyles.Option}`}
              ></Button>
            </OverlayTrigger>
          ) : (
            <Button
              onClick={handleBoost}
              className={`fa-solid fa-rocket ${btnStyles.Button} ${btnStyles.Option}`}
            ></Button>
          )
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>Login to be able to boost recommendation</Tooltip>
            }
          >
            <Button
              variant="secondary"
              disabled
              style={{ pointerEvents: "none" }}
              className={`fa-solid fa-rocket ${btnStyles.Button} ${btnStyles.Option}`}
            ></Button>
          </OverlayTrigger>
        )}
        {isReceiver && is_featured ? (
          <Button
            onClick={handleUnFeature}
            className={`fa-solid fa-star ${btnStyles.Button} ${btnStyles.Option}`}
          ></Button>
        ) : isReceiver && !is_featured ? (
          <Button
            variant="secondary"
            onClick={handleFeature}
            className={`fa-solid fa-star ${btnStyles.Button} ${btnStyles.Option}`}
          ></Button>
        ) : (
          <></>
        )}
      </div>
    </Card>
  );
};

export default Recommendation;
