import { FC } from "react";
import { NavLink } from "react-router-dom";

import routes from "../../../constants/routes";

const LoginFormLink: FC = () => {
  return (
    <NavLink to={routes.RESET} className="header-page__link registration">
      Reset Password
    </NavLink>
  );
};

export default LoginFormLink;
