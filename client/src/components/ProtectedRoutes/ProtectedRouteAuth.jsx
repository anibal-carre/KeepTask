import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAuth = ({ children, redirectTo = "/home" }) => {
  const userToken = localStorage.getItem("token");

  const userAuthenticated = userToken;

  console.log(userAuthenticated);
  if (userAuthenticated) return <Navigate to={redirectTo} />;

  return <Outlet />;
};

export default ProtectedRouteAuth;
