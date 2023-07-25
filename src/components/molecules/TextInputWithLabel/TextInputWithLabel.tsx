import React, { ChangeEvent } from "react";
import InputAtom from "../../atoms/Input/InputAtom";
import { TextInputWithLabelProps } from "./type";

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  label,
  type,
  value,
  onChange,
  name,
  placeholder
}) => {
  return (
    <div>
      <label>{label}</label>
      <InputAtom
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      ></InputAtom>
    </div>
  );
};
export default TextInputWithLabel;
