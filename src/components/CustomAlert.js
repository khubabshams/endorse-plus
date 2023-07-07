import React from "react";
import Alert from "react-bootstrap/Alert";
import appStyles from "../App.module.css";

const CustomAlert = ({ error, detail = false }) => {
  return (
    <div className="mt-1">
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
    </div>
  );
};

export default CustomAlert;
