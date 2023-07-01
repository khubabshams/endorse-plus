import React from "react";
import styles from "../styles/Loader.module.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className={styles.Outer}>
      <Spinner animation="grow" />
    </div>
  );
};

export default Loader;
