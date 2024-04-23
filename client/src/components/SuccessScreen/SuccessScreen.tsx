import React from "react";
import horizonLogo from "../../assets/images/Horizon Logo_Purple.png";
import LinkButton from "../LinkButton/LinkButton";
import "./SuccessScreen.scss";

interface SuccessScreenProps {
  title: string;
  message: string;
  buttonText: string;
  redirectTo: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  title,
  message,
  buttonText,
  redirectTo,
}) => {
  return (
    <div className="success-screen">
      <div className="success-screen__container">
        <div className="success-screen__logo">
          <img src={horizonLogo} alt="Horizon Logo" />
        </div>
        <div className="success-screen__text">
          <h2 className="success-screen__title">{title}</h2>{" "}
        </div>
        <div className="success-screen__content-container">
          <div className="success-screen__content">
            <div className="success-screen__message">
              <p>Hello,</p>
              <p>{message}</p>
            </div>
            <LinkButton text={buttonText} to={redirectTo} variant="primary" />{" "}
            <div className="success-screen__footer">
              <p>
                If you did not request this change, you do not need to do
                anything. Thanks,
              </p>
              <p>Horizon team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
