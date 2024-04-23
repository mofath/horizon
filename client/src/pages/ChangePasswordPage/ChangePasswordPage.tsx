import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/form/Input/Input";
import Button from "../../components/Button/Button";
import FormPageContainer from "../../components/FormPageContainer/FormPageContainer";
import "./ChangePasswordPage.scss";

interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  const onSubmit = (data: ChangePasswordFormData) => {
    console.log("Submitting change password form...");
    console.log("Current Password:", data.currentPassword);
    console.log("New Password:", data.newPassword);
    console.log("Confirm Password:", data.confirmPassword);
    // Add logic to handle password change
  };

  return (
    <FormPageContainer
      title="Change Password"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    >
      <div className="change-password-page__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              id="currentPassword"
              type="password"
              label="Current Password"
              placeholder="Enter your current password"
              {...register("currentPassword", {
                required: "Current password is required",
              })}
              // error={errors.currentPassword ? errors.currentPassword.message : undefined}
            />
            <Input
              id="newPassword"
              type="password"
              label="New Password"
              placeholder="Enter your new password"
              {...register("newPassword", {
                required: "New password is required",
              })}
              // error={errors.newPassword ? errors.newPassword.message : undefined}
            />
            <Input
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="Confirm your new password"
              {...register("confirmPassword", {
                required: "Please confirm your new password",
              })}
              // error={errors.confirmPassword ? errors.confirmPassword.message : undefined}
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="change-password-page__button"
            text="Change Password"
            variant="primary"
            fullWidth
          />
        </form>
      </div>
    </FormPageContainer>
  );
};

export default ChangePasswordPage;
