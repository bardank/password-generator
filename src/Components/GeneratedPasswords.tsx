import React from "react";
import Button from "./Button";

interface GeneratedPasswordProps {
  passwords: string[];
}
const GeneratedPassword: React.FC<GeneratedPasswordProps> = ({ passwords }) => {
  const copyToClipboard = (value: string): void => {
    navigator.clipboard.writeText(value).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className=" flex flex-col items-center p-4">
      <div className="w-1/2">
        <div className="flex justify-center flex-col">
          <h2 className="font-bold ">Last 5 Passwords</h2>
          <ul>
            {passwords.map((pwd, index) => (
              <li
                key={index}
                className="bg-white w-full rounded m-2 p-2 flex justify-between"
              >
                <div className="bg-white">{pwd}</div>
                <div>
                  <Button
                    text="Copy to Clipboard"
                    onClick={() => copyToClipboard(pwd)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPassword;
