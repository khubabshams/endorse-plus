import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 40, navbar = false, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {navbar ? <br /> : null}
      {text}
    </span>
  );
};

export default Avatar;
