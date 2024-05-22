import React from "react";

interface InputProps {
  type: "text" | "password" | "checkbox" | "number";
  placeholder?: string;
  checked?: boolean;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  checked,
}) => {
  return (
    <>
      <input
        className="bg-white p-2 rounded-sm"
        type={type}
        value={value}
        checked={checked}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default Input;
