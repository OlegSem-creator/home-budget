import { FC } from "react";

import LinkToLoginForm from "../LinkToLoginForm";
import LinkToRegistrationForm from "../LinkToRegistrationForm";

import styles from "./styles.module.scss";

const Links: FC = () => {
  return (
    <div className={styles.links}>
      <LinkToLoginForm></LinkToLoginForm>
      <LinkToRegistrationForm></LinkToRegistrationForm>
    </div>
  );
};

export default Links;
