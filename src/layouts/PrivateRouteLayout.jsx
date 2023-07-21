import { Outlet, Navigate, useLocation } from "react-router-dom";
import { projectAuth } from "../firebase/firebase-config";

export const PrivateRouteLayout = () => {
  const location = useLocation();
  return projectAuth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
