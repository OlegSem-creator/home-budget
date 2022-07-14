import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import FormWrapper from "../../../components/formItems/FormWrapper";
import AuthForm from "../../../components/formItems/AuthForm";
import LinkButton from "../../../components/formItems/FormButton";

import routes from "../../../constants/routes";

const Registration: FC = () => {
  const navigate = useNavigate();

  const handleNavigeteToSignIn = () => {
    navigate(routes.LOGIN);
  };

  const handleFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <FormWrapper>
      <AuthForm buttonName="Registration" onFinish={handleFinish} />
      <LinkButton buttonName="Sign In" onPress={handleNavigeteToSignIn} />
    </FormWrapper>
  );
};

export default Registration;
