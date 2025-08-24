import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const isAuthenticated = accessToken !== null && refreshToken !== null;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
