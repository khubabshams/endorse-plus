import React from "react";
import error from "../assets/error.png";
import { ErrorMessage } from "../components/ErrorMessage";

const ErrorPage = () => {
  return (
    <ErrorMessage
      image={error}
      message="Sorry, encountering a problem or an un-authorised access. "
    />
  );
};

export default ErrorPage;
