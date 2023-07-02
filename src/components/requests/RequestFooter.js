import React from "react";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function RequestFooter({ isReceiver, seen, handleUnSeen, handleSeen }) {
  return (
    <div className={appStyles.CardFooter}>
      {isReceiver && seen ? (
        <span
          onClick={handleUnSeen}
          className={`fa-solid fa-envelope ${btnStyles.Option} ${btnStyles.Filled}`}
        ></span>
      ) : isReceiver && !seen ? (
        <span
          variant="secondary"
          onClick={handleSeen}
          className={`fa-solid fa-envelope-open-text ${btnStyles.Option}`}
        ></span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RequestFooter;
