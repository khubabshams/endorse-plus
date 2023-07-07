import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import CustomAlert from "../../components/CustomAlert";

import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className="text-center bg-white p-5">
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Form.Group controlId="username">
          <Form.Label className="d-none">Username</Form.Label>
          <Form.Control
            className={styles.Input}
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors.username} />

        <Form.Group controlId="password">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            className={styles.Input}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors.password} />

        <Button
          variant="secondary"
          className={`${btnStyles.Button} ${btnStyles.Lg}`}
          type="submit"
        >
          Sign In
        </Button>
        <CustomAlert error={errors.non_field_errors} />

        <Link to="/signup">
          Don't have an account? <span>click here to sign up!</span>
        </Link>
      </Form>
    </Container>
  );
};

export default SignInForm;
