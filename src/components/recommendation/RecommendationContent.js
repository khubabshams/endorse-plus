import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";
import Avatar from "../Avatar";

export function RecommendationContent({
  id,
  content,
  recommendationNote,
  receiver,
  receiver_image,
  receiver_name,
  receiver_title,
}) {
  return (
    <>
      <Card.Text>
        <Link to={`/recommendations/${id}`}>
          <span className={appStyles.Content}>{content}</span>
        </Link>
        <br />
        <span className={`text-muted ${appStyles.Note}`}>
          {recommendationNote}
        </span>
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
