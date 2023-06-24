import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

const Recommendation = (props) => {
  const currentUser = useCurrentUser();

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
  const recommendationNote = `${profile_name} recommending ${receiver_name} based on ${
    relation_name ? `being his/ her ${relation_name} ` : `having a role`
  } at ${company_name}.`;

  const handleBoost = () => {
    console.log("handleBoost");
  };
  const handleUnBoost = () => {
    console.log("handleUnBoost");
  };

  const handleFeature = () => {
    console.log("handleFeature");
  };
  const handleUnFeature = () => {
    console.log("handleUnFeature");
  };
  return (
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
          {is_owner && (
            <>
              <span
                onClick={() => {}}
                className={`fa-solid fa-pen-to-square ${btnStyles.Option}`}
              ></span>
              <span
                onClick={() => {}}
                className={`fa-solid fa-trash ${btnStyles.Option}`}
              ></span>
            </>
          )}
        </span>
      </Card.Header>
      <Card.Body>
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

        <span className={appStyles.RecommendationNote}>
          {recommendationNote}
        </span>

        {boosts_count && (
          <span className="fa-solid fa-rocket">{boosts_count}</span>
        )}
        {is_featured && <span className="fa-solid fa-star">Featured</span>}
      </Card.Body>
      <Card.Footer>
        <div className={appStyles.ActionArea}>
          {boost_id ? (
            <span
              onClick={handleUnBoost}
              className={`fa-solid fa-rocket ${btnStyles.Clicked}`}
            >
              Un Boost
            </span>
          ) : currentUser ? (
            <span
              onClick={handleBoost}
              className={`fa-solid fa-rocket ${btnStyles.NotClicked}`}
            >
              Boost
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>Login to be able to boost recommendation</Tooltip>
              }
            >
              <i className={`fa-solid fa-rocket ${btnStyles.NotClicked}`}>
                Boost
              </i>
            </OverlayTrigger>
          )}
          {isReceiver && is_featured ? (
            <span
              onClick={handleUnFeature}
              className={`fa-solid fa-star ${btnStyles.Clicked}`}
            >
              Un Feature
            </span>
          ) : isReceiver && !is_featured ? (
            <span
              onClick={handleFeature}
              className={`fa-solid fa-star ${btnStyles.NotClicked}`}
            >
              Feature
            </span>
          ) : (
            <></>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Recommendation;
