import React, { forwardRef } from "react";
import "./Input.scss";

interface InputProps {
  id: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: { message: string | undefined };
}

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  { id, name, type, label, placeholder, value, onChange, onBlur, error },
  ref
) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? "error" : ""}
      />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default forwardRef(Input);
