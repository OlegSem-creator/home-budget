import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import routes from "../../../constants/routes";

import styles from "./styles.module.scss";

const LoginFormLink: FC = () => {
  const navigate = useNavigate();

  const handleNavigeteToLogIn = () => {
    navigate(routes.LOGIN);
  };

  return (
    <NavLink
      to={routes.LOGIN}
      onClick={handleNavigeteToLogIn}
      className={styles.link}
    >
      Log In
    </NavLink>
  );
};

export default LoginFormLink;
