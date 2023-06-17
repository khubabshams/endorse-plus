import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import styles from '../../styles/SignInUpForm.module.css'
import btnStyles from '../../styles/Button.module.css'

export class SignUpForm extends Component {
    render() {
        return <Container>
            <Form className={styles.Form}>
                <Form.Group controlId="username">
                    <Form.Label className='d-none'>Username</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="text"
                        placeholder="Username"
                        name="username" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label className='d-none'>Password</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Password"
                        name="password" />
                </Form.Group>
                <Form.Group controlId="passwordConfirm">
                    <Form.Label className='d-none'>Confirm Password</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm" />
                </Form.Group>
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Lg}`}
                    type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    }
}

export default SignUpForm