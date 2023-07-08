import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({
  src,
  height = 40,
  navbar = false,
  text = "",
  time = false,
  title = false,
}) => {
  return (
    <div className={styles.Profile}>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {navbar ? <br /> : null}
      <span className={styles.Name}>
        {text}
        {title ? (
          <span className={`text-muted ${styles.Text}`}>{title}</span>
        ) : null}
        {time ? (
          <span className={`text-muted ${styles.Text}`}>{time}</span>
        ) : null}
      </span>
    </div>
  );
};

export default Avatar;
