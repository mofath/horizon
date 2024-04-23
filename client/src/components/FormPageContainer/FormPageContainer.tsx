import React, { ReactElement } from "react";
import horizonLogo from "../../assets/images/Horizon Logo_Purple.png";
import "./FormPageContainer.scss";

interface FormPageContainerProps {
  title: string;
  subtitle: string;
  children: ReactElement;
}

const FormPageContainer: React.FC<FormPageContainerProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="form-page">
      <div className="form-page__container">
        <div className="form-page__logo">
          <img src={horizonLogo} alt="Horizon Logo" />
        </div>
        <div className="form-page__text">
          <h2 className="form-page__title">{title}</h2>
          <p className="form-page__subtitle">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormPageContainer;
