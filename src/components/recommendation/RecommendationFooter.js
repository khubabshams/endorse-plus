import React from "react";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function RecommendationFooter({
  boost_id,
  handleUnBoost,
  currentUser,
  boosts_count,
  handleBoost,
  isReceiver,
  is_featured,
  handleUnFeature,
  handleFeature,
}) {
  return (
    <div className={appStyles.CardFooter}>
      {boost_id ? (
        <span
          variant="secondary"
          onClick={handleUnBoost}
          className={`fa-solid fa-rocket ${btnStyles.Option} ${btnStyles.Filled}`}
        ></span>
      ) : currentUser ? (
        boosts_count === 0 ? (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>Be the first one to boost this recommendation</Tooltip>
            }
          >
            <span
              variant="secondary"
              onClick={handleBoost}
              className={`fa-solid fa-rocket  ${btnStyles.Option}`}
            ></span>
          </OverlayTrigger>
        ) : (
          <span
            onClick={handleBoost}
            className={`fa-solid fa-rocket ${btnStyles.Option}`}
          ></span>
        )
      ) : (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Login to be able to boost recommendation</Tooltip>}
        >
          <span
            variant="secondary"
            disabled
            style={{
              pointerEvents: "none",
            }}
            className={`fa-solid fa-rocket ${btnStyles.Option}`}
          ></span>
        </OverlayTrigger>
      )}
      <span className={`text-muted ${appStyles.Info}`}>
        {boosts_count === 1 ? <>x1</> : <>x{boosts_count}</>}
      </span>
      {isReceiver && is_featured ? (
        <span
          onClick={handleUnFeature}
          className={`fa-solid fa-star ${btnStyles.Option} ${btnStyles.Filled}`}
        ></span>
      ) : isReceiver && !is_featured ? (
        <span
          variant="secondary"
          onClick={handleFeature}
          className={`fa-solid fa-star ${btnStyles.Option}`}
        ></span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RecommendationFooter;
