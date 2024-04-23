import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/form/Input/Input";
import Button from "../../components/Button/Button";
import LinkButton from "../../components/LinkButton/LinkButton";
import FormPageContainer from "../../components/FormPageContainer/FormPageContainer";
import "./SignInPage.scss";
import { ROUTES } from "../../constant/routes";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log("Submitting sign-in form...");
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };
  return (
    <FormPageContainer
      title="Sign in to your account"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    >
      <div className="sign-in-page__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              id="email"
              type="email"
              label="Mobile number Or Email address"
              placeholder="Mobile number Or Email address"
              {...register("email", { required: "Email is required" })}
              // error={errors.password ? errors.password.message : undefined}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
              // error={errors.password ? errors.password.message : undefined}
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="sign-in-page__button"
            text="Sign In"
            variant="primary"
            fullWidth
          />
        </form>
        <div className="sign-in-page__forgot-password-link">
          <LinkButton
            to={ROUTES.FORGOT_PASSWORD}
            text="Forgot your password?"
          />
        </div>
      </div>
    </FormPageContainer>
  );
};

export default SignInPage;
