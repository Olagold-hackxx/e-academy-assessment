import Image from "next/image";

interface InputProps {
  placeholder: string,
  inputImage?: string,
  type: string
}

const Input = ({ placeholder, inputImage, type }: InputProps) => {
  return (
    <div className="relative flex">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full font-normal p-2 pl-4 pr-8 h-[56px] p-[8px] mb-[18px] mt-[5px] mb-3 border rounded-md border-[#D0D5DD] shadow-md shadow-white  placeholder:text-sm focus:outline-[#0D5EBA]"
      />
      {inputImage && (
        <Image src={inputImage} alt="icon" className="absolute right-0 top-[22px] mx-2" height="15" width="18" />
      )}
    </div>
  );
};
export default Input;
