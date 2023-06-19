import { Navigate, Outlet } from "react-router-dom";

const ValidateRoute = () => {
  const t = JSON.stringify({ token: false });
  const isValidate = JSON.parse(localStorage.getItem("token") || t);
  if (isValidate.token) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};
export default ValidateRoute;
