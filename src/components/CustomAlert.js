import React from "react";
import { Alert } from "react-bootstrap";
import appStyles from "../App.module.css";

const CustomAlert = ({ error, detail = false }) => {
  return (
    <>
      {error &&
        (!detail ? (
          error.map((message, idx) => (
            <Alert className={appStyles.Alert} variant="warning" key={idx}>
              {message}
            </Alert>
          ))
        ) : (
          <Alert className={`${appStyles.Alert} mt-3`} variant="warning">
            {error}
          </Alert>
        ))}
    </>
  );
};

export default CustomAlert;
