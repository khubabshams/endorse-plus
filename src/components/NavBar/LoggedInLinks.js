import React from "react";
import styles from "../../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar";

export function LoggedInLinks({ handleSignOut, currentUser }) {
  return (
    <>
      <NavLink
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/requests/create/2"
      >
        {/* TODO: for test, should be moved to profile tile component */}
        <i className="fa-solid fa-plus"></i>
        <br />
        Create
      </NavLink>
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
        <i className="fa-solid fa-user-minus"></i>
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
