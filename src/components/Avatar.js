import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 40, navbar = false, text, title = false }) => {
  return (
    <span className={styles.Profile}>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {navbar ? <br /> : null}
      <span className={styles.Name}>{text}</span>
      {title ? (
        <span className={`text-muted ${styles.Title}`}>{title}</span>
      ) : null}
    </span>
  );
};

export default Avatar;
