import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem("userRole"); // updated key

  if (role !== "admin") {
    return <Navigate to="/" replace />; // redirect to home if not admin
  }

  return children; // render children if admin
};

export default ProtectedRoute;
