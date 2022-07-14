import { FC } from "react";
import { NavLink } from "react-router-dom";

import routes from "../../../constants/routes";

import styles from "./styles.module.scss";

const RegistrationFormLink: FC = () => {
  return (
    <NavLink to={routes.REGISTRATION} className={styles.link}>
      Sign Up
    </NavLink>
  );
};

export default RegistrationFormLink;
