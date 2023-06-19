// React
import { FC } from "react";
// React Router
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import NotFound from "../pages/notFound";

// Routes
import ValidateRoute from "./validate";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ValidateRoute />}>
        <Route index path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
