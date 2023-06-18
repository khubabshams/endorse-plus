import React, { Component, useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import styles from '../../styles/SignInUpForm.module.css'
import btnStyles from '../../styles/Button.module.css'
import appStyles from '../../App.module.css'

import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: ''
    });

    const { username, password1, password2 } = signUpData;
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            history.push('/signin');
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    }

    return (<Container>
        <Form
            onSubmit={handleSubmit}
            className={styles.Form}>
            <Form.Group controlId="username">
                <Form.Label className='d-none'>Username</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, idx) =>
                <Alert
                    className={appStyles.Alert}
                    variant='warning'
                    key={idx}>
                    {message}
                </Alert>
            )}
            <Form.Group controlId="password1">
                <Form.Label className='d-none'>Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={handleChange} />
            </Form.Group>
            {errors.password1?.map((message, idx) =>
                <Alert
                    className={appStyles.Alert}
                    variant='warning'
                    key={idx}>
                    {message}
                </Alert>
            )}
            <Form.Group controlId="password2">
                <Form.Label className='d-none'>Confirm Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleChange} />
            </Form.Group>
            {errors.password2?.map((message, idx) =>
                <Alert
                    className={appStyles.Alert}
                    variant='warning'
                    key={idx}>
                    {message}
                </Alert>
            )}
            <Button
                className={`${btnStyles.Button} ${btnStyles.Lg}`}
                type="submit">
                Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) =>
                <Alert
                    className={`${appStyles.Alert} mt-3`}
                    variant='warning'
                    key={idx}>
                    {message}
                </Alert>
            )}
            <Link to="/signin">
                Already have an account? <span>click here to sign in!</span>
            </Link>
        </Form>
    </Container>)

}

export default SignUpForm