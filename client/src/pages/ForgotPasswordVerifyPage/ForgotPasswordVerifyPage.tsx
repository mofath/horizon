import React, { useState } from "react";
import Button from "../../components/Button/Button";
import FormPageContainer from "../../components/FormPageContainer/FormPageContainer";
import OTPInput from "../../components/form/OTPInput/OTPInput";
import SuccessScreen from "../../components/SuccessScreen/SuccessScreen";
import "./ForgotPasswordVerifyPage.scss";

const ForgotPasswordVerifyPage: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false); // State to track verification status

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(otp);
    // Check if OTP is correct (You might have your own logic here)
    if (otp === "1234") {
      setIsVerified(true);
    }
  };

  return (
    <>
      {isVerified ? (
        <SuccessScreen
          title="Forgot your password?"
          message="Brand Name recently received a request for a forgotten password. To
        change your Brand Name password, please click on below link"
          buttonText="Verify"
          redirectTo="/"
        />
      ) : (
        <FormPageContainer
          title="OTP"
          subtitle="OTP Sent to ahmedsaeed@gmail.com"
        >
          <div className="sign-in-page__form">
            <form>
              <div>
                <OTPInput
                  id="otp"
                  label="Confirm Password"
                  onChange={handleChange}
                />
              </div>
              <Button
                onClick={handleSubmit}
                className="sign-in-page__button"
                text="Change Password"
                variant="primary"
                fullWidth
                disabled={otp.length !== 4}
              />
            </form>
          </div>
        </FormPageContainer>
      )}
    </>
  );
};

export default ForgotPasswordVerifyPage;
