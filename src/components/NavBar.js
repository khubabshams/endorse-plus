import React from "react";

import styles from "../styles/NavBar.module.css";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInLinks = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/boosted"
      >
        <i className="fa-solid fa-rocket"></i>
        <br />
        Boosted
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/requests"
      >
        <i className="fa-solid fa-envelope"></i>
        <br />
        Requests
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fa-solid fa-user-minus"></i>
        <br />
        Logout
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar
          src={currentUser?.profile_image}
          text="Profile"
          height={35}
          navbar={true}
        />
      </NavLink>
    </>
  );
  const loggedOutLinks = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-user"></i>
        <br />
        Sign In
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>
        <br />
        Sign Up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <Image src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <div ref={ref}>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="navbarScroll"
          />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto text-center" navbarScroll>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house-chimney"></i>
              <br />
              Home
            </NavLink>
            {currentUser ? loggedInLinks : loggedOutLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
