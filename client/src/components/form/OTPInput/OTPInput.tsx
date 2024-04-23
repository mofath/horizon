import React, { useState, useRef, KeyboardEvent } from "react";
import "./OTPInput.scss";

interface OTPInputProps {
  id: string;
  label?: string;
  onChange: (value: string) => void; // Optional callback for parent component
}

export interface OTPInputRef {
  getValue: () => string;
}

const OTPInput: React.FC<OTPInputProps> = ({ id, label, onChange }, ref) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(4).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>(Array(4).fill(null));

  const handleInputChange = (index: number, inputValue: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = inputValue;
    setInputValues(updatedValues);
    if (inputValue !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    // Call onChange callback with combined value
    onChange(updatedValues.join(""));
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && inputValues[index] === "" && index > 0) {
      // If backspace is pressed and the current input is empty, move caret to the previous input
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        {inputValues.map((val, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
            id={`${id}-${index}`}
            type="text"
            value={val} // Set value to the corresponding index of inputValues state
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            className="otp-input"
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
