import React from "react";
import styles from "../../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

export function LoggedOutLinks({}) {
  return (
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
}
