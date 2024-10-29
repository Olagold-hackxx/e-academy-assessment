import Image from "next/image";

// interface FeedbackProps {
//     warning: string,
//     success: string,
//     error: string,
// }

const Feedback = ({ message }: { message: string }) => {
  const feedbackBgColor: any = {
    warning: "bg-[#FEF6E7]",
    success: "bg-[#E7F6EC]",
    error: "bg-[#FBEAE9]",
  };

  const feedbackTextColor: any = {
    error: "text-[#CB1A14]",
    warning: "text-[#AD6F07]",
    success: "text-[#099137]",
  };

  const feedbackIcon: any = {
    warning: "",
    success: "",
    error: "",
  };
  return (
    <div
      className={`${feedbackBgColor[message]} flex justify-start  items-center w-full border rounded-md h-[44px]`}
    >
      <Image
        src={feedbackIcon[message]}
        alt="alert icon"
        height="13.33"
        width="13.33"
      />
      <span className={`${feedbackTextColor[message]} `}>
        A placeholder for alerts
      </span>
    </div>
  );
};

export default Feedback;
