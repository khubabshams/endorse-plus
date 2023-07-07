import React from "react";
import styles from "../../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar";

export function LoggedInLinks({ handleSignOut, currentUser }) {
  return (
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
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/requests"
      >
        <i className="fa-solid fa-envelope"></i>
        <br />
        Requests
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fa-solid fa-right-from-bracket"></i>
        <br />
        Logout
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser.profile_id}`}
      >
        <Avatar src={currentUser.profile_image} height={40} navbar={true} />
      </NavLink>
    </>
  );
}
