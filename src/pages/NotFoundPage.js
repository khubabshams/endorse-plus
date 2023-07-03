import React from "react";
import error_404 from "../assets/error_404.png";
import { ErrorMessage } from "../components/ErrorMessage";

const NotFoundPage = () => {
  return <ErrorMessage image={error_404} message="Sorry, page not found. " />;
};

export default NotFoundPage;
