import { useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import vidSrc from "../assets/vid2.mp4";
import bgimg from "../assets/bgmdsm.jpg";
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
      <div className="relative lg:h-[88vh] md:h-[44vh] h-[37vh] w-full">
        <NavBar
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
        />
        <video
          className="z-0 w-full absolute  hidden lg:block"
          autoPlay
          loop
          muted
        >
          <source src={vidSrc} type="video/mp4" />
        </video>
        <img className="z-0 h-[38vh] md:h-[45vh] absolute lg:hidden" src={bgimg}></img>

        <div className="z-10 w-full lg:h-[89.5vh] h-[38vh] md:h-[45vh] bg-gradient-to-b from-[#64CCC5] to-[#053B50] opacity-75 absolute"></div>
        <div className="z-20  h-32 w-[70%] md:h-48 md:w-3/5 lg:h-80 lg:w-3/5 p-3 lg:top-96 top-40 flex flex-col justify-center items-center border-2 border-[#EEEEEE] rounded-3xl md:top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
          <h1 className="font-bold lg:text-6xl md:text-3xl text-md text-center lg:mb-14 md:mb-14 mb-6 text-[#EEEEEE]">
            We Transport Anywhere
          </h1>
          <a href="/login">
            <button className="rounded-3xl lg:w-80 lg:h-12 w-28 md:w-40 md:h-12 h-10 font-bold  md:text-xl lg:text-2xl text-sm bg-[#64CCC5] text-[#053B50] ">
              Book Now
            </button>
          </a>
        </div>
      </div>
      {/* end sec1 */}

      {/*  start sec2 */}
      <div
        id="services"
        className="lg:h-60 md:h-[60vh] h-[60vh] w-full bg-gradient-to-b flex lg:flex-row md:flex-col flex-col justify-around items-center from-[#053B50] to-[#36dacf]"
      >
        <div className="relative">
          <img className="lg:w-64 md:w-80 w-60" src={icon1}></img>
          <h1 className="absolute top-8 left-20 text-sm text-center md:left-28 md:w-40 md:top-8 font-bold md:text-xl lg:text-xl lg:top-4 lg:left-20 lg:text-center text-[#176B87] ">
            Book Tickets Online
          </h1>
        </div>
        <div className="relative">
          <img className="lg:w-64 md:w-80 w-60" src={icon2}></img>
          <h1 className="absolute top-6 left-16 text-sm md:left-24 md:w-38 md:top-8 font-bold md:text-xl lg:text-xl lg:top-4 lg:left-20 text-center text-[#176B87] ">
            Pick The Nearest Station
          </h1>
        </div>
        <div className="relative">
          <img className="lg:w-64 md:w-80 w-60" src={icon3}></img>
          <h1 className="absolute top-8 left-20 text-sm md:left-28 md:w-40 md:top-8 font-bold md:text-xl lg:text-xl lg:top-4 lg:left-20 text-center text-[#176B87] ">
            Schedule Your Trips
          </h1>
        </div>
      </div>
      {/* end sec2 */}
    {/* sec3 */}
      <div
        id="stations"
        className="lg:h-screen md:h-[180vh] h-[160vh] w-full flex flex-col justify-center items-center bg-gradient-to-b to-[#053B50] from-[#36dacf]"
      >
        <h1 className="font-bold text-lg lg:text-4xl md:text-2xl lg:mb-20 md:mb-10 lg:w-full m-6 md:mt-14 text-center text-[#EEEEEE] ">
          King Abdulaziz Project for Riyadh Public Transport Station
        </h1>
        <div className="flex m-6 lg:flex-row md:mb-5 md:flex-col flex-col lg:flex-wrap lg:justify-center md:justify-between justify-between lg:gap-x-56 md:gap-y-8 lg:w-9/12 md:w-3/4 w-4/5 lg:h-4/5 md:h-4/5 h-4/5">
          <Card src={olaya} title="Olaya Station"></Card>
          <Card src={kafd} title="KAFD Metro Station"></Card>
          <Card src={western} title="Western Station"></Card>
          <Card src={hokm} title="Qasr Ak-Hokm Station"></Card>
        </div>

        </div>
       
      {/* end sec3 */}
      {/* sec4 */}
      <div
        id="about"
        className="flex flex-col justify-center items-center bg-gradient-to-b from-[#053B50] to-[#36dacf] w-full h-80"
      >
        <h1 className="font-bold text-4xl mb-5  text-[#EEEEEE]">About</h1>
        <h1 className="lg:text-xl md:text-sm text-sm text-[#EEEEEE] lg:w-3/5 md:w-4/5 w-4/5 text-center">
          The Metro Project is the backbone of the public transport network in
          Riyadh, capable of transporting 1.2 million passengers a day in its
          first phase, and potentially 3.6 million passengers at a full-scale
          realization.
        </h1>
      </div>
      {/* end sec4 */}

      {/* footer */}
      <Footer isLoggedIn={isLoggedIn}></Footer>
    </div>
  );
}

{
  /* <Footer isLoggedIn={isLoggedIn}></Footer>
      </div> */
}
