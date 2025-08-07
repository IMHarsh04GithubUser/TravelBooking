import React from "react";
import { MdTravelExplore } from "react-icons/md";
import "./Signin.css";


const Login: React.FC = () => {
  return (
    <>
      <div
        className="user_sign_container
           max-w-md
          bg-white/10 backdrop-blur-md border border-white/20
          rounded-2xl p-7 shadow-2xl 
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        "
      >
        {/* Header */}
        <div className="header_content px-4 py-4 flex gap-5 items-center justify-center">
          <MdTravelExplore className="h-10 w-10 text-blue-500" />
          <h1 className="text-2xl font-semibold text-white italic">LogIn</h1>
        </div>

        {/* Form */}
        <form className="p-4 flex flex-col gap-4">
          <input
            type="email"
            className="rounded-md p-2 placeholder:text-cyan-700 outline-none bg-white/30 text-white"
            placeholder="username@gmail.com"
          />
          <input
            type="password"
            className="rounded-md p-2 placeholder:text-cyan-700 outline-none bg-white/30 text-white"
            placeholder="Password"
          />
          <p className="text-orange-500 cursor-pointer text-right">
            Forgot Password?
          </p>
          <input
            type="submit"
            value="Log In"
            className="rounded-md p-2 font-semibold bg-orange-600 text-white cursor-pointer"
          />
        </form>

        {/* Other Options */}
        <p className="text-center text-sm p-2 text-white">Or Continue With</p>
        <p className="text-white text-center text-sm">
          Don't have an Account?
          <span className="text-orange-500 cursor-pointer"> Register Now</span>
        </p>
      </div>
    </>
  );
};

export default Login;
