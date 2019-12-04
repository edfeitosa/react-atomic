import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";
import ErrorBoundary from "../errorBoundary";

const MainTemplate = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default MainTemplate;
