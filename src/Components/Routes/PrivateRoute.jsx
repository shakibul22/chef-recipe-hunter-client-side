/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;