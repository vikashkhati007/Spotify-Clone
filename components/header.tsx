import Link from "next/link";
import Image from "next/image";
const header = () => {
  return (
    <header className="w-[100%] h-16 flex justify-between bg-black bg-opacity-95 p-3 text-white items-center">
      <div className="flex gap-2">
      <Image className="bg-white rounded-full border border-gray-200 hover:cursor-pointer opacity-40 hover:opacity-100" src={"/navigation/previous.png"} width={30} height={30} alt="next"/>
      <Image className="bg-white rounded-full border border-gray-200 hover:cursor-pointer opacity-40 hover:opacity-100" src={"/navigation/next.png"} width={30} height={30} alt="next"/>
      </div>
      <div className="flex gap-10">
        <Link href={""}>
          <span className="font-bold opacity-60 hover:opacity-100 ">Premium</span>
        </Link>
        <Link href={""}>
          <span className="font-bold opacity-60 hover:opacity-100 ">Support</span>
        </Link>
        <Link href={""}>
          <span className="font-bold opacity-60 hover:opacity-100 ">Download</span>
        </Link>
        <div className="auth flex gap-5 border-l-2 px-10">
          <Link href={""}>
            <span className="font-bold opacity-60 hover:opacity-100 ">Sign up</span>
          </Link>
          <Link href={""}>
            <span className="font-bold text-black hover:opacity-100 bg-white px-5 py-3 rounded-full">Log in</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default header;
