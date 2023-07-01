import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
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
    <Link to={`/recommendations/${id}`}>
      <Card.Text>
        <p className={appStyles.Content}>{content}</p>

        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{recommendationNote}</Tooltip>}
        >
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
        </OverlayTrigger>
      </Card.Text>
    </Link>
  );
}
