"use client";

import Image from "next/image";

export type FeedbackType = "warning" | "success" | "error";

interface FeedbackProps {
  feedback: FeedbackType;
}

export const Feedback = ({ feedback }: FeedbackProps) => {
  const feedbackBgColor: Record<FeedbackType, string> = {
    "warning": "bg-[#FEF6E7]",
    "success": "bg-[#E7F6EC]",
    "error": "bg-[#FBEAE9]",
  };

  const feedbackTextColor: Record<FeedbackType, string> = {
    error: "text-[#CB1A14]",
    warning: "text-[#AD6F07]",
    success: "text-[#099137]",
  };

  const feedbackIcon: Record<FeedbackType, string> = {
    warning: "/warning.png",
    success: "/success.png",
    error: "/error.png",
  };

  const getFeedbackMessage = () => {
    switch (feedback) {
      case "warning":
        return "Password must be at least 8 characters and include a special character.";
      case "success":
        return "Password meets all requirements!";
      case "error":
        return "Passwords do not match.";
      default:
        return "";
    }
  };

  return (
    <div
      className={`${feedbackBgColor[feedback]} flex justify-start items-center w-full border rounded-md min-h-[44px] h-fit p-2`}
    >
      <Image
        src={feedbackIcon[feedback]}
        alt={`${feedback} icon`}
        height={16}
        width={16}
        className="min-w-[7%]"
      />
      <span className={`ml-2 ${feedbackTextColor[feedback]} text-center leading-4`}>
        {getFeedbackMessage()}
      </span>
    </div>
  );
};
