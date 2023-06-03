import Button from "./button/button";
import Input from "./input/Input";
import Link from "next/link";
const login = () => {
  return (
    <body className="w-full h-screen bg-[#161616]">
      <div className="logincontainer w-[60%] p-20 my-20 bg-black m-auto h-fit text-white flex flex-col justify-center items-center rounded-md">
        <div className="itemsccontainer w-[90%] flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl p-14">Log in to Spotify</h1>
          <div className="buttoncontainer flex flex-col gap-2 items-center">
            <Button
              title={"Continue With Google"}
              textcolor={"white"}
              bgcolor={"black"}
              border={"2px solid grey"}
              padding={"2rem"}
              svg={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0499H17.3818C17.15 15.2999 16.4455 16.359 15.3864 17.0681V19.5772H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21.9999C14.7 21.9999 16.9636 21.1044 18.6181 19.5772L15.3863 17.0681C14.4909 17.6681 13.3454 18.0226 12 18.0226C9.39542 18.0226 7.19087 16.2635 6.40451 13.8999H3.0636V16.4908C4.70905 19.759 8.09087 21.9999 12 21.9999Z"
                    fill="#34A853"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.40455 13.9001C6.20455 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20455 10.7001 6.40455 10.1001V7.50916H3.06364C2.38636 8.85916 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40455 13.9001Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5.97727C13.4681 5.97727 14.7863 6.48182 15.8227 7.47273L18.6909 4.60455C16.9591 2.99091 14.6954 2 12 2C8.09087 2 4.70905 4.24091 3.0636 7.50909L6.40451 10.1C7.19087 7.73636 9.39542 5.97727 12 5.97727Z"
                    fill="#EA4335"
                  ></path>
                </svg>
              }
            ></Button>
            <Button
              title={"Continue With Facebook"}
              textcolor={"white"}
              bgcolor={"black"}
              border={"2px solid grey"}
              padding={"2rem"}
              svg={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="url(#pattern0)"></rect>
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#image0_213_540"
                        transform="scale(0.00769231)"
                      ></use>
                    </pattern>
                    <image
                      id="image0_213_540"
                      width="130"
                      height="130"
                      href="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              }
            ></Button>
          </div>
          <hr className="my-10 opacity-30 w-[60%]"></hr>
        </div>
        <div className="userinputcontainer flex flex-col gap-5 justify-center items-center">
          <Input
            label={"Email or username"}
            placeholder={"Email or username"}
            labelcolor={"text-black"}
            width={"w-96"}
          />

          <Input
            label={"Password"}
            placeholder={"Password"}
            labelcolor={"text-black"}
            width={"w-96"}
          />
          <button className="w-[15rem] h-12 rounded-full font-bold bg-green-600 text-black">
            Log In
          </button>
          <p className="font-medium text-sm">
            <Link href={"/login"} className=" underline">
              Forget Your Password.
            </Link>
          </p>
        </div>
        <hr className="my-10 opacity-30 w-[60%]"></hr>
        <p className="font-medium text-md text-white flex gap-1">
          <span className="opacity-40">Dont have an account?</span> 
          <Link href={"/signup"} className="">
            Sign up for Spotify
          </Link>
        </p>
      </div>
    </body>
  );
};

export default login;
