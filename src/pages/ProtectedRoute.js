import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.signIn);
  if (!user.email || !user.password) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
