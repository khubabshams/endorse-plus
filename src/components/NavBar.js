import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContext'

const NavBar = () => {
    const currentUser = useCurrentUser();

    const loggedInLinks = (<>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/boosted">
            <i className="fa-solid fa-rocket"></i>
            <br />
            Boosted
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/requests">
            <i className="fa-solid fa-envelope"></i>
            <br />
            Requests
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/logout">
            <i className="fa-solid fa-user-minus"></i>
            <br />
            Logout
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/profile">
            <i className="fa-solid fa-user"></i>
            <br />
            User Avatar
        </NavLink>
    </>)
    const loggedOutLinks = (<>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
            <i className="fa-solid fa-user"></i>
            <br />
            Sign In
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
            <i className="fa-solid fa-user-plus"></i>
            <br />
            Sign Up
        </NavLink>
    </>)


    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand><Image src={logo} alt="logo" height="45" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ml-auto text-center" navbarScroll>
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i className="fa-solid fa-house-chimney"></i>
                            <br />
                            Home
                        </NavLink>
                        {currentUser ? loggedInLinks : loggedOutLinks}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar