import React from "react";
import { useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";


import Card from "../component/Card";
import vidSrc from "../assets/vid2.mp4";

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
      <div className="relative h-[88vh] w-full">
        <NavBar
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
        />
        <video className="z-0 w-full absolute" autoPlay loop muted>
          <source src={vidSrc} type="video/mp4" />
        </video>
        <div className="z-10 w-full h-[88.5vh] bg-gradient-to-b from-[#64CCC5] to-[#053B50] opacity-75 absolute"></div>
        <div className="z-20 w-3/5 h-80 flex flex-col justify-center items-center border-2 border-[#EEEEEE] rounded-3xl top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
          <h1 className="font-mono font-bold text-6xl mb-14 text-[#EEEEEE]">
            We Transport Anywhere
          </h1>
          <a href="/login">
            <button className="rounded-3xl w-72 h-12 font-bold text-xl bg-[#64CCC5] text-[#053B50] ">
              Book Now
            </button>
          </a>
        </div>
      </div>
      <div id="services" className="h-60 w-full bg-gradient-to-b flex flex-row justify-around items-center from-[#053B50] to-[#36dacf]">
        <div className="relative">
          <img className="w-64" src={icon1}></img>
          <h1 className="absolute top-4 left-24 font-bold text-xl text-[#176B87] w-32 text-center">
            Book Tickets Online
          </h1>
        </div>
        <div className="relative">
          <img className="w-64" src={icon2}></img>
          <h1 className="absolute top-4 left-20 pl-2 font-bold text-xl text-[#176B87] w-40 text-center">
            Pick The Nearest Station
          </h1>
        </div>
        <div className="relative">
          <img  className="w-64"src={icon3}></img>
          <h1 className="absolute top-4 left-24 font-bold text-xl text-[#176B87] w-32 text-center">
            Schedule Your Trips
          </h1>
        </div>
      </div>
      <div id="stations" className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b to-[#053B50] from-[#36dacf]">
        <h1 className="font-bold text-4xl text-[#EEEEEE] mb-20 ">
          King Abdulaziz Project for Riyadh Public Transport Station
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-y- gap-x-56 w-9/12 h-4/5">
          <Card src={olaya} title="Olaya Station"></Card>
          <Card src={kafd} title="KAFD Metro Station"></Card>
          <Card src={western} title="Western Station"></Card>
          <Card src={hokm} title="Qasr Ak-Hokm Station"></Card>
        </div>
      </div>
      <div id="about" className="flex flex-col justify-center items-center bg-gradient-to-b from-[#053B50] to-[#36dacf] w-full h-80">
        <h1 className="font-bold text-4xl mb-5  text-[#EEEEEE]">About</h1>
        <h1 className="font-bold text-2xl text-[#EEEEEE] w-3/5 text-center">
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
