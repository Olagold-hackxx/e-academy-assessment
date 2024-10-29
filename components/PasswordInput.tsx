'use client'

import Image from "next/image";
import { useState } from "react";

const PasswordInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className="relative flex">
      <input
         type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Enter password"
        className="w-full font-normal p-2 pl-4 pr-8 h-[56px] p-[8px] mb-[18px] mt-[5px] mb-3 border rounded-md border-[#D0D5DD] shadow-sm shadow-[#0000000F]  placeholder:text-sm focus:outline-[#0D5EBA]"
      />
      <Image
        src={
          isPasswordVisible
            ? "/visible.png"
            : "/hidden.png"
        }
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
