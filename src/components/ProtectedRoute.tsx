import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("accessToken") && localStorage.getItem("refreshToken");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

