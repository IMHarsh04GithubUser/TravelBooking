import React, { useState, type FormEvent, type ChangeEvent } from "react";
import axios from "axios";
import { MdTravelExplore } from "react-icons/md";
import "./Signin.css";
import { toast } from "react-toastify";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registeruser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error("Email Does not Match");
        return;
      }
      if (!password) {
        toast.error("Password Does not match");
        return;
      }
      await axios.post("http://localhost:5000/auth/signup", [email, password]);
      toast.success("Account created");
    } catch (error) {
      if (error)
        return toast.error(
          "Something Wrong Happened at Our Side. Please Try Later"
        );
    }
  };
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
          <h1 className="text-2xl font-semibold text-white italic">Sign Up</h1>
        </div>

        {/* Form */}
        <form className="p-4 flex flex-col gap-4" onSubmit={registeruser}>
          <input
            type="email"
            className="rounded-md p-2 placeholder:text-cyan-700 outline-none bg-white/30 text-white"
            placeholder="username@gmail.com"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            className="rounded-md p-2 placeholder:text-cyan-700 outline-none bg-white/30 text-white"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <input
            type="submit"
            value="Sign Up"
            className="rounded-md p-2 font-semibold bg-orange-600 text-white cursor-pointer"
          />
        </form>

        {/* Other Options */}
        <p className="text-center text-sm p-2 text-white">Or Continue With</p>
        <p className="text-white text-center text-sm">
          Already have an Account?
          <span className="text-orange-500 cursor-pointer"> Login</span>
        </p>
      </div>
    </>
  );
};

export default SignIn;
