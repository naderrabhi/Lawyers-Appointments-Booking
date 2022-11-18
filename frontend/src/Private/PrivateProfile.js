import React from "react";
import { Navigate } from "react-router-dom";

const PrivateProfile = ({ children, user }) => {
  return (
    <div>
      {localStorage.getItem("token") &&
      (user.role === "lawyer" || user.role === "client") ? (
        children
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default PrivateProfile;
