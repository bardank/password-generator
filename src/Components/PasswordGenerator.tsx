import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { setLocalStorage } from "../customHooks/localStore";

interface PasswordGeneratorProps {
  setPasswords: React.Dispatch<React.SetStateAction<string[]>>;
  passwords: string[];
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({
  setPasswords,
  passwords,
}) => {
  const [password, setPassword] = useState<string>("");
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useLetters, setUseLetters] = useState<boolean>(true);
  const [useSpecialChars, setUseSpecialChars] = useState<boolean>(true);
  const [passwordLength, setPasswordLength] = useState<number>(12);

  const generatePassword = (): void => {
    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characterPool = "";

    if (useNumbers) characterPool += numbers;
    if (useLetters) characterPool += letters;
    if (useSpecialChars) characterPool += specialChars;

    if (!characterPool) {
      alert("Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
    const updatedPasswords = [generatedPassword, ...passwords.slice(0, 4)];
    setPasswords(updatedPasswords);
    setLocalStorage("passwords", JSON.stringify(updatedPasswords));
  };

  const copyToClipboard = (value: string): void => {
    navigator.clipboard.writeText(value).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className=" flex flex-col items-center p-4">
      <div className="w-1/2">
        <h1 className="text-center font-bold text-2xl  my-6">
          Password Generator
        </h1>
        <div className="grid grid-flow-col gap-2">
          <label>Numbers</label>
          <Input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
            name={"setNumber"}
          />
          <label>Letters</label>
          <Input
            type="checkbox"
            checked={useLetters}
            onChange={() => setUseLetters(!useLetters)}
            name={"useLetters"}
          />
          <label>Special Characters</label>
          <Input
            type="checkbox"
            checked={useSpecialChars}
            onChange={() => setUseSpecialChars(!useSpecialChars)}
            name={"useSpecialChars"}
          />
        </div>
        <div className="my-4">
          <label className="mr-4">Length</label>
          <Input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            placeholder={""}
            name={""}
          />
        </div>
        <Button text="Generate Password" onClick={generatePassword} />
        <div>
          <h2 className="font-bold">Generated Password</h2>
          <div className="flex">
            <p className="bg-white w-full px-6 py-4 border-2 border-gray-200">
              {password}
            </p>
            <Button
              text="Copy to Clipboard"
              onClick={() => copyToClipboard(password)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
