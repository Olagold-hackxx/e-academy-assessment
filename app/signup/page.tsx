"use client";

import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import Oauth from "@/components/Oauth";
import { useState } from "react";
import Image from "next/image";
import Feedback from "@/components/Feedback";

const Signup = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [feedBack, setFeedback] = useState("");

  return (
    <div className="bg-[#F7F9FC] h-screen w-screen grid place-content-center md:content-center content-start">
      <h1 className="font-semibold text-[#101828] text-center text-[24px] md:py-2 py-4">
        E-Academy
      </h1>
      <div className="md:border-2 md:bg-white rounded-md text-black flex flex-col md:w-[35vw] w-[94vw] md:min-h-[76vh] md:max-h-[95vh] md:h-fit  max-sm items-center gap-y-2 shadow-md shadow-[#F7F9FC]">
        <div className="md:pt-[8%] pt-[4%] pb-4">
          <h1 className="font-semibold text-[28px] py-2 text-center leading-8 ">
            {" "}
            Create an account
          </h1>
          <p className=" md:text-base text-sm text-[#667185] font-normal leading-6">
            Enter your credentials to create your account
          </p>
        </div>
        <form className="w-[80%] flex flex-col font-medium">
          <div className="flex flex-col">
            <label className="text-[14px] text-[#101928] leading-5">
              Email Address
              <Input placeholder={"Enter Email"} type="email" />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] text-[#101928]  leading-5">
              Password
              <PasswordInput />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] text-[#101928]  leading-5">
              Confirm Password
              <PasswordInput />
            </label>
          </div>
          <button
            className={
              "flex justify-center items-center rounded-lg border bg-[#0D5EBA] h-[55px] text-white text-md font-semibold"
            }
            onClick={() => setIsDisabled(!isDisabled)}
          >
            {isDisabled ? (
              <Image src="/loading.png" alt="loading" width="24" height="23" />
            ) : (
              "Create an account"
            )}
          </button>
        </form>
        <div className="w-[80%]">
        {feedBack && <Feedback message={feedBack} />}
        </div>
        <div className="flex flex-col w-[80%] py-2 gap-y-[15px]">
          <Oauth oauthImage={"/google.png"} oauth={"google"} />
          <Oauth oauthImage={"/twitter.png"} oauth={"twitter"} />
        </div>
        <div className="flex items-center w-[80%] justify-between">
          <p className="border-b border-[#F0F2F5] w-[45%]"></p>
          <p>Or</p>
          <p className="border-b border-[#F0F2F5] w-[45%]"></p>
        </div>
        <div className="justify-center pt-2 pb-8 text-[#667185]">
          {" "}
          Already here?{" "}
          <a href="/login" className="text-[#0D5EBA]">
            {" "}
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
