import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = localStorage.getItem("accessToken");

  // ✅ true only if both tokens exist and are not empty strings
  const isAuthenticated =
    accessToken !== null &&
    accessToken.trim() !== "" &&
    accessToken !== "undefined" 

  return isAuthenticated ? children : <Navigate to="/logout" />;
};

export default ProtectedRoute;
