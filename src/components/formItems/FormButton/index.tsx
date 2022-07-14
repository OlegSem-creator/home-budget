import { FC } from "react";
import { Button } from "antd";

import styles from "./styles.module.scss";

interface Props {
  buttonName: string;
  onPress: () => void;
}

const LinkButton: FC<Props> = ({ buttonName, onPress }) => {
  return (
    <Button className={styles.formButton} type="link" onClick={onPress}>
      {buttonName}
    </Button>
  );
};

export default LinkButton;
