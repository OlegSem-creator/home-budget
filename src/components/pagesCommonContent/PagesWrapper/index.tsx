import { FC } from "react";

// import Header from "../Header";
// import Footer from "../Footer";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const PagesWrapper: FC<Props> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default PagesWrapper;
