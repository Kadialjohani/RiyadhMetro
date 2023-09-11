import React from "react";
import Logo from "../assets/Logo.png";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
}


const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn,
  onLogin,
  onSignup,
  onLogout,
}) => {
  return (
    <nav className="h-80px absolute w-full z-20">
      <ul className="flex flex-row justify-between mx-24 font-bold text-lg text-[#EEEEEE]">
        {!isLoggedIn && (
          <>
            <div className="flex flex-row justify-between items-center w-3/5">
              <li>
                <a href="/">
                  <img className="w-36" src={Logo}></img>
                </a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Stations</a>
              </li>
              <li>
                <a href="/" className="text-[#176B87]">
                  Services
                </a>
              </li>
            </div>
            <div className="flex flex-row items-center justify-around w-1/5">

              <li>
                <a href="/login">
                  {" "}
                  <button
                    className="border-2 border-[#176B87] text-[#176B87] w-24 h-10 rounded-full"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </a>
              </li>
              <li>
                <a href="/signup">
                  <button
                    className="bg-[#176B87] w-24 h-10 rounded-full"
                    onClick={onSignup}
                  >
                    Signup
                  </button>
                </a>
              </li>


            </div>
          </>
        )}
        {isLoggedIn && (
          <>
            <div className="flex flex-row justify-between items-center w-3/6">
              <li>
                <a href="/home">
                  <img className="w-36" src={Logo}></img>
                </a>
              </li>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/bookings">Manage Bookings</a>
              </li>
            </div>


