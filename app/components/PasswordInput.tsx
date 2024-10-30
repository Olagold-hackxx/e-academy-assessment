"use client";

import Image from "next/image";
import { useState } from "react";

interface PasswordInputProps {
  onPasswordChange?: (password: string) => void;
}

const PasswordInput = ({onPasswordChange = () => {}}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);
  };

  return (
    <div className="relative flex">
      <input
        type={isPasswordVisible ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        className="w-full font-normal p-2 pl-4 pr-8 h-[56px] p-[8px] mb-[18px] mt-[5px] mb-3 border rounded-md border-[#D0D5DD] shadow-sm shadow-[#0000000F]  placeholder:text-sm focus:outline-[#0D5EBA]"
      />
      <Image
        src={isPasswordVisible ? "/visible.png" : "/hidden.png"}
        alt={isPasswordVisible ? "Hide password" : "Show password"}
        onClick={togglePasswordVisibility}
        className="absolute right-0 top-[22px] mx-2"
        height="15"
        width="18"
      />
    </div>
  );
};
export default PasswordInput;
