import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import Avatar from "../Avatar";

export function RequestContent({
  id,
  message,
  receiver,
  receiver_image,
  receiver_name,
  receiver_title,
}) {
  return (
    <>
      <Card.Text>
        <Link to={`/requests/${id}`}>
          <span className={appStyles.Content}>{message}</span>
        </Link>
      </Card.Text>
      <div className="w-50">
        <hr />
        <Link to={`/profiles/${receiver}`} className="mt-2">
          <Avatar
            src={receiver_image}
            text={receiver_name}
            title={receiver_title}
            height={40}
          />
        </Link>
        <hr />
      </div>
    </>
  );
}
