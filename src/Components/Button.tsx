import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default Button;