import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/Recommendation.module.css";
import { axiosRes } from "../api/axiosDefaults";

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

  const handleBoost = async () => {
    try {
      console.log("-----> ", id);
      const { data } = await axiosRes.post("/boosts/", { recommendation: id });
      setRecommendations((prevRecommendations) => ({
        ...prevRecommendations,
        results: prevRecommendations.results.map((recommendation) => {
          return recommendation.id === id
            ? {
                ...recommendation,
                boosts_count: recommendation.boosts_count + 1,
                boost_id: data.id,
              }
            : recommendation;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
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
            <i className={`fa-solid fa-star ${btnStyles.Clicked}`}></i>Featured
          </span>
        )}
      </Card.Body>
      <Card.Footer>
        <div className={appStyles.ActionArea}>
          {boost_id ? (
            <span onClick={handleUnBoost} className={btnStyles.Clicked}>
              <i className="fa-solid fa-rocket"></i>
              Un Boost
            </span>
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
                <span onClick={handleBoost} className={btnStyles.NotClicked}>
                  <i className="fa-solid fa-rocket"></i>
                  Boost
                </span>
              </OverlayTrigger>
            ) : (
              <span onClick={handleBoost} className={btnStyles.NotClicked}>
                <i className="fa-solid fa-rocket"></i>
                Boost
              </span>
            )
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>Login to be able to boost recommendation</Tooltip>
              }
            >
              <span className={btnStyles.NotClicked}>
                <i className="fa-solid fa-rocket"></i>
                Boost
              </span>
            </OverlayTrigger>
          )}
          {isReceiver && is_featured ? (
            <span onClick={handleUnFeature} className={btnStyles.Clicked}>
              <i className="fa-solid fa-star"></i>
              Un Feature
            </span>
          ) : isReceiver && !is_featured ? (
            <span onClick={handleFeature} className={btnStyles.NotClicked}>
              <i className="fa-solid fa-star"></i>
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
