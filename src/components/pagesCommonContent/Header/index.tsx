import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const Header: FC<Props> = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <span className={styles.headerLogo}>Home Budget</span>
        <div className={styles.linkWrapper}>{children}</div>
      </div>
    </header>
  );
};

export default Header;
