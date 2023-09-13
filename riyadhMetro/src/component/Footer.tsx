import React from "react";
import Logo2 from "../assets/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  isLoggedIn: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLoggedIn }) => {
  return (
    <div className="bg-[#053B50] w-full lg:h-40  md:h-[60px] h-[60px] flex justify-center">
      <ul className="flex flex-row lg:justify-between justify-center lg:items-center items-center w-full lg:mx-24 font-bold lg:text-lg text-[#EEEEEE]">
        {!isLoggedIn && (
          <>
            <div className="flex flex-row lg:items-center lg:justify-between items-center justify-center lg:text-6xl lg:w-1/6">
              <li>
                <a href="https://www.instagram.com/riyadhtransport/">
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RiyadhTransport">
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ministry-of-transport-saudi-arabia/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </div>
            <div className="flex flex-row lg:justify-between lg:items-center it lg:w-3/5">
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#stations">Stations</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="/">
                  <img className="lg:w-36 w-32" src={Logo2}></img>
                </a>
              </li>
            </div>
          </>
        )}
        {isLoggedIn && (
          <>
            <div className="flex flex-row lg:items-center gap-2 lg:justify-between items-center justify-center lg:text-6xl lg:w-1/6 ">
              <li>
                <a href="https://www.instagram.com/riyadhtransport/">
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RiyadhTransport">
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ministry-of-transport-saudi-arabia/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </div>
            <div className="flex flex-row gap-2 mt-2 ml-5 lg:justify-between lg:items-center lg:w-3/5">
              <li>
                <a href="/bookings">Manage Bookings</a>
              </li>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home">
                  <img className="lg:w-36 w-20" src={Logo2}></img>
                </a>
              </li>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default Footer;
