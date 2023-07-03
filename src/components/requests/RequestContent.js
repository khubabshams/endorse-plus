import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import appStyles from "../../App.module.css";

export function RequestContent({
  id,
  message,
}) {
  return (
    <>
      <Card.Text>
        <Link to={`/requests/${id}`}>
          <span className={appStyles.Content}>{message}</span>
        </Link>
      </Card.Text>
    </>
  );
}
