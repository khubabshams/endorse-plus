import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import error_404 from "../assets/error_404.png";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import btnStyles from "../styles/Button.module.css";

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <Container className="text-center">
      <img src={error_404} height={40} width={40} alt="Error 404" />
      <br />
      <h1>Sorry, page not found.</h1>
      <p>
        You can try to go{" "}
        <Button
          variant="secondary"
          onClick={() => history.goBack()}
          className={`${btnStyles.Button} ${btnStyles.Option}`}
        >
          <i className={`fa-solid fa-arrow-left`}></i> BACK
        </Button>{" "}
        or <Link to={`/`}>Home</Link>
      </p>
    </Container>
  );
};

export default NotFoundPage;
