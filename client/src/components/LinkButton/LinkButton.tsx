import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

interface LinkButtonProps {
  to: string;
  text: string;
  variant?: "primary" | "text";
  fullWidth?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  text,
  variant = "text",
  fullWidth = false,
  ...rest
}) => {
  return (
    <div
      className={`link-button-container 
    ${fullWidth ? "link-button-container--full-width" : ""}
    ${variant === "primary" ? "link-button-container--primary" : ""}
    `}
    >
      <Link
        to={to}
        className={`link-button ${
          variant === "primary" ? "link-button--primary" : ""
        }`}
        {...rest}
      >
        {text}
      </Link>
    </div>
  );
};

export default LinkButton;
