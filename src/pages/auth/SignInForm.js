import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();

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
      history.push("/");
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
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
        {errors.username?.map((message, idx) => (
          <Alert className={appStyles.Alert} variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
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
        {errors.password?.map((message, idx) => (
          <Alert className={appStyles.Alert} variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Button className={`${btnStyles.Button} ${btnStyles.Lg}`} type="submit">
          Sign In
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert
            className={`${appStyles.Alert} mt-3`}
            variant="warning"
            key={idx}
          >
            {message}
          </Alert>
        ))}
        <Link to="/signup">
          Don't have an account? <span>click here to sign up!</span>
        </Link>
      </Form>
    </div>
  );
};

export default SignInForm;
