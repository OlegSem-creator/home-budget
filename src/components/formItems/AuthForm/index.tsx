import { FC } from "react";
import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";

import styles from "./styles.module.scss";

interface Props {
  onFinish: (values: any) => void;
  buttonName: string;
  isReset?: boolean;
}

const AuthForm: FC<Props> = ({ onFinish, buttonName, isReset }) => {
  return (
    <Form className={styles.form} onFinish={onFinish}>
      <FormItem className={styles.formItem}>
        <span className={styles.formSpanText}>Log In</span>
      </FormItem>

      <FormItem
        className={styles.formItem}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className={styles.formInput} placeholder="Username" />
      </FormItem>

      {!isReset && (
        <FormItem
          className={styles.formItem}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className={styles.formInput} placeholder="Password" />
        </FormItem>
      )}

      <FormItem className={styles.formItem}>
        <Button className={styles.formButton} type="primary" htmlType="submit">
          {buttonName}
        </Button>
      </FormItem>
    </Form>
  );
};

export default AuthForm;
