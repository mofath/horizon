import React, { forwardRef } from "react";
import "./Select.scss";

interface SelectProps {
  id: string;
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: { message: string | undefined };
  placeholder?: string; // Add placeholder prop
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { id, name, label, options, value, onChange, onBlur, error, placeholder },
  ref
) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? "error" : "" + ""}
      >
        {placeholder && <option value="" >{placeholder}</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default forwardRef(Select);
