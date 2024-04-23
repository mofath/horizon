import * as React from "react";
import "./CheckboxGroup.scss";

type CheckboxGroupProps = {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  register: any;
};

const CheckboxGroup = ({
  name,
  label,
  options,
  register,
}: CheckboxGroupProps) => {
  return (
    <div className="checkbox-group">
      {options.map(({ label, value }) => (
        <div className="checkbox__container" key={value}>
          <label className="checkbox__label">
            <input
              {...register(name)}
              type="checkbox"
              className="checkbox__input"
              name={name}
              value={value}
            />
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
