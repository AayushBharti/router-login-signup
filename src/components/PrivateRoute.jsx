import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) return children;
  else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
