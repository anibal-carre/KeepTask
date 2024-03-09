import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo = "/auth/login" }) => {
  const userToken = localStorage.getItem("token");

  const userAuthenticated = userToken;

  console.log(userAuthenticated);
  if (!userAuthenticated) return <Navigate to={redirectTo} />;

  return <Outlet />;
};

export default ProtectedRoute;
