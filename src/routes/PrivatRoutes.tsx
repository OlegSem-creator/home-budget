import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "../constants/routes";
import UserPage from "../pages/user/UserPage";
import ErrorPage from "../pages/ErrorPage";

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      <Route path={routes.USER} element={<UserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
