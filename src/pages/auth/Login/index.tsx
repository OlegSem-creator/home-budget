import { FC } from "react";
import { useNavigate } from "react-router-dom";

import PagesWrapper from "../../../components/pagesCommonContent/PagesWrapper";
import Header from "../../../components/pagesCommonContent/Header";
import LinkToLoginForm from "../../../components/pagesCommonContent/LinkToLoginForm";
import LinkToRegistrationForm from "../../../components/pagesCommonContent/LinkToRegistrationForm";
import FormWrapper from "../../../components/formItems/FormWrapper";
import AuthForm from "../../../components/formItems/AuthForm";
import FormButton from "../../../components/formItems/FormButton";

import routes from "../../../constants/routes";

const Login: FC = () => {
  const navigate = useNavigate();

  const handleNavigeteToResetPassword = () => {
    navigate(routes.RESET);
  };

  const handleNavigeteToSignUp = () => {
    navigate(routes.REGISTRATION);
  };

  const handleFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <PagesWrapper>
      <Header>
        <LinkToLoginForm />
        <LinkToRegistrationForm />
      </Header>

      <FormWrapper>
        <AuthForm buttonName="Log In" onFinish={handleFinish} />

        <FormButton
          buttonName="Reset password"
          onPress={handleNavigeteToResetPassword}
        />
        <FormButton buttonName="Sign Up" onPress={handleNavigeteToSignUp} />
      </FormWrapper>
    </PagesWrapper>
  );
};

export default Login;
