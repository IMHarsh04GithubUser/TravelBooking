import React from "react";
import { useContext } from "react";
import { MdTravelExplore } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { TravelContext } from "../../context/authcontext";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger: React.FC = () => {
  const context = useContext(TravelContext);
  if (!context) return null;
  const { isDark, toggleTheme, isSideBar,toggleSideBar,toggleLogin } = context;
  return (
  <>
    <div
      className={`md:hidden hamburger_container shadow-2xl shadow-cyan-600 h-screen w-44 p-6 text-center fixed top-0 right-0 z-50 text-white flex flex-col gap-10 transform transition-transform duration-500 ease-in-out
        ${isSideBar ? "translate-x-0" : "translate-x-full"}
      `}
      style={{ backgroundColor: "#031C30" }}
    >
      <div className="absolute right-2">
        <RxHamburgerMenu
          className="h-10 w-10 text-white"
          onClick={toggleSideBar}
        />
      </div>

      <div className="main_icon">
        <MdTravelExplore className="h-10 w-10" />
      </div>

      <div>
        <ul className="flex flex-col gap-10">
          {["Flights", "Hotels", "Car Rentals", "Packages", "Deals"].map((item) => (
            <li
              key={item}
              className="hover:bg-[#667A8A] hover:w-full hover:p-2 hover:rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="brightness">
        {isDark ? (
          <BsMoonStarsFill
            className="h-7 w-7 text-white mx-auto"
            onClick={toggleTheme}
          />
        ) : (
          <IoSunnyOutline
            className="h-7 w-7 text-white text-center mx-auto"
            onClick={toggleTheme}
          />
        )}
      </div>

      <button
        type="button"
        className="hover:bg-[#667A8A] hover:w-full hover:p-2 hover:rounded-lg"
        onClick={toggleLogin}
      >
        LogIn
      </button>
    </div>
  </>
);

};

export default Hamburger;
