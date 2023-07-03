import React from "react";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function RequestFooter({ isReceiver, seen, handleSeen, handleUnSeen }) {
  
  return (
    <div className={appStyles.CardFooter}>
      {isReceiver && seen ? (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Mark as unread</Tooltip>}
        >
          <span
            onClick={handleUnSeen}
            className={`fa-solid fa-envelope ${btnStyles.Option} ${btnStyles.Filled}`}
          ></span>
        </OverlayTrigger>
      ) : isReceiver && !seen ? (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Mark as read</Tooltip>}
        >
          <span
            variant="secondary"
            onClick={handleSeen}
            className={`fa-solid fa-envelope-open-text ${btnStyles.Option}`}
          ></span>
        </OverlayTrigger>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RequestFooter;
