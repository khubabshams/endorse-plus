import React from "react";
import { LoggedOutLinks } from "./LoggedOutLinks";
import { LoggedInLinks } from "./LoggedInLinks";
import styles from "../../styles/NavBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import NavLink from "react-router-dom/NavLink";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

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
            {currentUser ? (
              <LoggedInLinks
                handleSignOut={handleSignOut}
                currentUser={currentUser}
              />
            ) : (
              <LoggedOutLinks />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
