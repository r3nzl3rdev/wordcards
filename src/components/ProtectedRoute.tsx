import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  // ✅ true only if both tokens exist and are not empty strings
  const isAuthenticated =
    accessToken !== null &&
    accessToken.trim() !== "" &&
    refreshToken !== null &&
    refreshToken.trim() !== "" &&
    accessToken !== "undefined" &&
    refreshToken !== "undefined";

  return isAuthenticated ? children : <Navigate to="/logout" />;
};

export default ProtectedRoute;
