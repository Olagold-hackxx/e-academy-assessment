import Image from "next/image";

interface OauthProps {
  oauthImage: string;
  oauth: string;
}

const Oauth = ({ oauthImage, oauth }: OauthProps) => {
  return (
    <button className="border border-[#D0D5DD] shadow-md shadow-[#F7F9FC] h-[55px] flex w-full gap-x-4 justify-center items-center rounded-md">
      <Image
        src={oauthImage}
        width="24"
        height="24"
        alt="open authentication"
      />
      <p>
        Continue with <span className="capitalize">{oauth}</span>
      </p>
    </button>
  );
};
export default Oauth;
