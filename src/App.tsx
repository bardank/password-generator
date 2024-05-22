import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import PasswordGenerator from "./Components/PasswordGenerator";
import GeneratedPassword from "./Components/GeneratedPasswords";
import { getLocalStorage } from "./customHooks/localStore";

function App() {
  const [passwords, setPasswords] = useState<string[]>([]);

  useEffect(() => {
    const storedPasswords = JSON.parse(getLocalStorage("passwords") || "[]");
    if (storedPasswords) {
      setPasswords(storedPasswords);
    }
  }, []);
  return (
    <div className="w-screen h-screen ">
      <PasswordGenerator setPasswords={setPasswords} passwords={passwords} />
      <GeneratedPassword passwords={passwords} />
    </div>
  );
}

export default App;
