/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
  
    if (loading) {
      return <>loading................. </>;
    }
    const location = useLocation();
  
    if (user) {
      return children;
    }
    return (
      <Navigate to={"/login"} state={{ form: location }} replace>
        {" "}
      </Navigate>
    );
  };

export default PrivateRoute;