import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

import routes from "../constants/routes";

const PublicRoutes: FC = () => {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.REGISTRATION} element={<Registration />} />
      <Route path={routes.HOME} element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PublicRoutes;
