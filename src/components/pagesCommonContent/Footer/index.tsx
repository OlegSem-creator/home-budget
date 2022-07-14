import { FC } from "react";

import styles from "./styles.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>Home budget ©2022 Created by Oleg</span>
    </footer>
  );
};

export default Footer;
