import React from "react";
import { useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";


import Card from "../component/Card";
import vidSrc from "../assets/vid2.mp4";
import bgimg from "../assets/bgmdsm.jpg"
import icon1 from "../assets/ic1.png";
import icon2 from "../assets/ic2.png";
import icon3 from "../assets/ic3.png";
import olaya from "../assets/olaya.jpg";
import kafd from "../assets/kafd.jpg";
import western from "../assets/western.jpg";
import hokm from "../assets/hokm.png";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Perform signup logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="">
      <div className="relative lg:h-[88vh] sm:h-[44vh] w-full">
        <NavBar
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
        />
        <video className="z-0 w-full absolute md:hidden sm:hidden lg:inline" autoPlay loop muted>
          <source src={vidSrc} type="video/mp4" />
        </video>
        <img className="z-0 sm:h-96 h-[88.5vh] absolute lg:hidden" src={bgimg}></img>
        <div className="z-10 w-full lg:h-[89.5vh] sm:h-96 bg-gradient-to-b from-[#64CCC5] to-[#053B50] opacity-75 absolute"></div>
        <div className="z-20 lg:w-3/5 sm:w-80 lg:h-80 sm:h-40 flex flex-col justify-center items-center border-2 border-[#EEEEEE] rounded-3xl md:top-96 sm:top-56 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
          <h1 className="font-bold lg:text-6xl md:text-3xl sm:text-lg lg:mb-14 md:mb-14 sm:mb-6 text-[#EEEEEE]">
            We Transport Anywhere
          </h1>
          <a href="/login">
            <button className="rounded-3xl lg:w-72 sm:w-40 h-12 font-bold lg:text-xl sm:text-lg bg-[#64CCC5] text-[#053B50] ">
              Book Now
            </button>
          </a>
        </div>
      </div>
      <div id="services" className="lg:h-60 md:h-[60vh] sm:h-[60vh] w-full bg-gradient-to-b flex lg:flex-row md:flex-col sm:flex-col justify-around items-center from-[#053B50] to-[#36dacf]">
        <div className="relative">
          <img className="w-64 md:w-80" src={icon1}></img>
          <h1 className="absolute top-4 left-20 md:left-28 md:top-8 font-bold text-xl text-[#176B87] w-40 text-center">
            Book Tickets Online
          </h1>
        </div>
        <div className="relative">
          <img className="w-64 md:w-80" src={icon2}></img>
          <h1 className="absolute top-4 left-20 md:left-24 md:top-8 font-bold text-xl text-[#176B87] w-46 text-center">
            Pick The Nearest Station
          </h1>
        </div>
        <div className="relative">
          <img  className="w-64 md:w-80"src={icon3}></img>
          <h1 className="absolute top-4 left-24 md:left-32 md:top-8 font-bold text-xl text-[#176B87] w-32 text-center">
            Schedule Your Trips
          </h1>
        </div>
      </div>
      <div id="stations" className="h-screen md:h-[160vh] sm:h-[160vh] w-full flex flex-col justify-center items-center bg-gradient-to-b to-[#053B50] from-[#36dacf]">
        <h1 className="font-bold lg:text-4xl md:text-xl sm:text-lg sm:w-96 md:w-96 lg:w-full md:mt-14 text-center text-[#EEEEEE] lg:mb-20 md:mb-10 sm:mb-10">
          King Abdulaziz Project for Riyadh Public Transport Station
        </h1>
        <div className="flex lg:flex-row md:mb-5 md:flex-col sm:mb-5 sm:flex-col md:flex-nowrap lg:flex-wrap lg:justify-center md:justify-between sm:justify-between lg:gap-x-56 lg:w-9/12 md:w-6/12 sm:w-6/12 sm:h-4/5 lg:h-4/5 md:h-4/5">
          <Card src={olaya} title="Olaya Station"></Card>
          <Card src={kafd} title="KAFD Metro Station"></Card>
          <Card src={western} title="Western Station"></Card>
          <Card src={hokm} title="Qasr Ak-Hokm Station"></Card>
        </div>
      </div>
      <div id="about" className="flex flex-col justify-center items-center bg-gradient-to-b from-[#053B50] to-[#36dacf] w-full h-80">
        <h1 className="font-bold text-4xl mb-5  text-[#EEEEEE]">About</h1>
        <h1 className="font-bold lg:text-xl md:text-sm sm:text-sm text-[#EEEEEE] w-3/5 text-center">
          The Metro Project is the backbone of the public transport network in
          Riyadh, capable of transporting 1.2 million passengers a day in its
          first phase, and potentially 3.6 million passengers at a full-scale
          realization.
        </h1>
      </div>

      {/* footer */}
      <Footer isLoggedIn={isLoggedIn}></Footer>
    </div>
  );
}

{
  /* <Footer isLoggedIn={isLoggedIn}></Footer>
      </div> */
}
