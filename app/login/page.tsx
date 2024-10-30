"use client";

import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import Oauth from "@/components/Oauth";
import { useState } from "react";

const Login = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState<boolean>(false);

  const handleRememberMeChange = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };
  return (
    <div className="bg-[#F7F9FC] h-screen w-screen grid place-content-center md:content-center content-start font-inter">
      <div className="md:border-2 md:bg-white rounded-md text-black flex flex-col md:w-[35vw] w-[94vw] md:min-h-[76vh] md:max-h-[95vh] md:h-fit md:my-0 my-[10%] max-sm items-center md:gap-y-[2vh] gap-y-2 shadow-md shadow-[#F7F9FC]">
        <div className="md:pt-[8%] pt-[5%] md:pb-2 pb-4">
          <h1 className="font-semibold text-[28px] py-2 text-center leading-8 ">
            {" "}
            Log In
          </h1>
          <p className=" md:text-base text-sm text-[#667185] font-normal leading-6">
            Enter your credentials to access your account
          </p>
        </div>
        <form className="w-[80%] flex flex-col md:gap-y-[1vh] font-medium">
          <div className="flex flex-col">
            <label className="text-[14px] text-[#101928] leading-5">
              Email Address
              <Input placeholder={"Enter Email"} inputImage="/email.png" type="email"/>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] text-[#101928]  leading-5">
              Password
              <PasswordInput />
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <label className="flex gap-x-2 text-[14px]">
                <input
                  type="checkbox"
                  checked={isRememberMeChecked}
                  onChange={handleRememberMeChange}
                  className="appearance-none  h-[20px] w-[20px] border-2 rounded checked:appearance-auto border-[#D0D5DD]"
                />{" "}
                Remember Me
              </label>
            </div>
            <a href="/signup" className="text-[#CC400C] font-medium text-[14px]">
              Forget Password?
            </a>
          </div>
          <button className="rounded-lg border bg-[#0D5EBA] py-4 mt-4 text-white text-md font-semibold">
            Log into Account
          </button>
        </form>
        <div className="flex items-center w-[80%] justify-between">
          <p className="border-b border-[#F0F2F5] w-[45%]"></p>
          <p>Or</p>
          <p className="border-b border-[#F0F2F5] w-[45%]"></p>
        </div>
        <div className="flex flex-col w-[80%] gap-y-[15px]">
          <Oauth oauthImage={"/google.png"} oauth={"google"} />
          <Oauth oauthImage={"/twitter.png"} oauth={"twitter"} />
        </div>
        <div className="justify-center md:pt-0 pt-4 pb-8 text-[#667185]">
          {" "}
          Are you new here?{" "}
          <a href="/signup" className="text-[#0D5EBA]"> Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
