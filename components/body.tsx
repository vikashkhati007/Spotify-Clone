import Header from "./header";
import Image from "next/image";

const HomeBody = () => {
  return (
    <div className="w-[100%] bg-[#1C1C1C]">
      <Header />
      <div className="p-10 text-white ">
        <h1 className="hover:underline cursor-pointer font-bold text-2xl">
          Focus
        </h1>
        <div className="carditems w-[231px] h-[318px] rounded-md bg-black bg-gradient-to-t from-[#1C1C1C] to-[#0E0E0E] shadow-lg cursor-pointer ">
          <div className="flex flex-col justify-start w-full items-center pt-5 gap-1 ">
            <img
              src={
                "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
              }
              width={189}
              height={189}
              alt="render"
            />
            <p className="text-sm text-left w-full font-extrabold px-5">Peacefull Piano</p>
            <span className="text-xs px-5 opacity-75">
              Peaceful piano to help you slow down, breathe, and..
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
