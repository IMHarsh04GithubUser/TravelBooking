import React, { useContext } from "react";
import { MdTravelExplore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { TravelContext } from "../../context/authcontext";
const Navbar: React.FC = () => {
  const context = useContext(TravelContext);
  if (!context) return null;
  const { isDark, toggleTheme, toggleDisplay, toggleLogin, toggleSideBar } =
    context;
  return (
    <>
      <nav
        className="navbar md:flex md:justify-between md:items-center md:p-2 md:shadow-xl flex justify-between md:m-0 m-0 p-2"
        style={{
          backgroundColor: isDark ? "white" : "white",
          boxShadow: isDark ? "black" : "white",
        }}
      >
        <div className="travel_app_logo md:items-center md:flex md:gap-2 md:p-3  text-blue-500 flex gap-2 items-center">
          <NavLink to="/">
            <MdTravelExplore className="md:h-15 md:w-15 h-9 w-9" />
          </NavLink>
          <p className="font-bold">YoVoyage</p>
        </div>
        <div className="travel_list">
          <ul className="md:flex md:justify-between md:items-center md:gap-6 md:p-3 text-gray-700 font-semibold hidden ">
            <li>
              <NavLink to="/bookflight">Flights</NavLink>
            </li>
            <li>
              <a href="/about">Hotels</a>
            </li>
            <li>
              <a href="/contact">Car Rentals</a>
            </li>
            <li>
              <a href="/login">Packages</a>
            </li>
            <li>
              <a href="">Deals</a>
            </li>
          </ul>
        </div>
        <div className="travel_auth_button items-center md:flex md:gap-4 md:p-3 md:mx-3 hidden">
          <button
            type="button"
            className="rounded-lg md:p-2 cursor-pointer hover:bg-amber-100"
            style={{ color: isDark ? "black" : "black" }}
            onClick={toggleDisplay}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="border rounded-lg md:p-2 cursor-pointer bg-black text-white hover:text-black hover:bg-white"
            onClick={toggleLogin}
          >
            Login
          </button>
          <div>
            {isDark ? (
              <BsMoonStarsFill
                className="h-6 w-6 text-black"
                onClick={toggleTheme}
              />
            ) : (
              <IoSunnyOutline
                className="h-6 w-6 text-black"
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>
        {isDark ? (
          <RxHamburgerMenu
            className="h-8 w-8 md:hidden text-black"
            onClick={toggleSideBar}
          />
        ) : (
          <RxHamburgerMenu
            className="h-8 w-8 md:hidden text-black"
            onClick={toggleSideBar}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
