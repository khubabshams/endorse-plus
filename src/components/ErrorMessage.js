import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { Button, Container } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";

export function ErrorMessage({ image, message }) {
  const history = useHistory();
  
  return (
    <Container className="text-center bg-white p-5">
      <img src={image} height={40} width={40} alt="Error 404" />
      <br />
      <h1>{message}</h1>
      <p>
        You can try to go{" "}
        <Button
          variant="secondary"
          onClick={() => history.goBack()}
          className={`${btnStyles.Button}`}
        >
          <i className={`fa-solid fa-arrow-left`}></i> BACK
        </Button>{" "}
        or <Link to={`/`}>Home</Link>
      </p>
    </Container>
  );
}
