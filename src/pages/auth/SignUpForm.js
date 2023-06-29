import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import CustomAlert from "../../components/CustomAlert";

import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <>
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
        
        <Form.Group controlId="password1">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            className={styles.Input}
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors.password1} />

        <Form.Group controlId="password2">
          <Form.Label className="d-none">Confirm Password</Form.Label>
          <Form.Control
            className={styles.Input}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </Form.Group>
        <CustomAlert error={errors.password2} />

        <Button className={`${btnStyles.Button} ${btnStyles.Lg}`} type="submit">
          Sign Up
        </Button>
        <CustomAlert error={errors.non_field_errors} />
        
        <Link to="/signin">
          Already have an account? <span>click here to sign in!</span>
        </Link>
      </Form>
    </>
  );
};

export default SignUpForm;
