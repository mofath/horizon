import React from "react";
import "./Button.scss";

const CircularProgress = ({ size, color, style }: any) => <>loading</>;

interface ButtonProps {
  text: string;
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  loading?: boolean;
  direction?: "left" | "right";
  variant?: "text-button" | "success" | "primary";
  type?: "button" | "reset" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
  loading = false,
  direction = "right",
  variant,
  type = "button",
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${className} ${variant} ${
        fullWidth ? "full-width" : ""
      }`}
    >
      {loading && (
        <CircularProgress
          type={type}
          size={16}
          color="inherit"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        />
      )}
      <span
        className="button__content"
        style={{ opacity: loading ? 0 : 1, zIndex: 2 }}
      >
        {direction === "left" && icon && <i>{icon}</i>}
        <span>{text}</span>
        {direction !== "left" && icon && <i>{icon}</i>}
      </span>
    </button>
  );
};

export default Button;
