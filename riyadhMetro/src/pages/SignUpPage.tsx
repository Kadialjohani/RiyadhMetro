import img from "../assets/signupImg.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from 'email-validator';
import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";

type Info = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const [list, setList] = useState<Info[]>([]);
  const [signup, setSignup] = useState<Info>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const handleSignUp = () => {
    if (signup.firstName && signup.lastName && signup.email && signup.password){
    if (EmailValidator.validate(signup.email) && signup.password.length >= 8) {
      axios
        .post("https://64ec51b1f9b2b70f2bfa175c.mockapi.io/Users", {
          firstName: signup.firstName,
          lastName: signup.lastName,
          email: signup.email,
          password: signup.password,
        })
        .then((res) => {
          setList([...list, res.data]);
          setSignup({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        })
        .catch((error) => {
          console.error("Error making request:", error);
        });
      nav("/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email and password (minimum 10 characters).",
      });
    }
  }else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You left required fields empty",
    });
  }
}
  // nav

  return (
    <>
      <a href="/">
        <img className="w-36 md:w-36 lg:w-36 absolute pl-2" src={Logo}></img>
      </a>
      <div className="flex flex-row justify-center lg:justify-end items-center w-full h-screen  ">
        <div className="flex flex-col gap-y-5 items-center  shadow-2xl shadow-[#176B87] border-2 m-6 md:m-14 border-[#176B87] lg:w-[40%]  h-[75%] md:h-[55%] lg:h-[85vh] w-[100%] rounded-3xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mt-8 text-[#176B87]">
            Sign Up
          </h1>
          <div className="flex md:flex-row flex-col lg:flex-row lg:justify-between md:justify-between gap-y-5 lg:gap-y-0 md-y-0 w-11/12 lg:w-11/12">
            <div className="flex flex-col ">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] mb-2">
                First Name:
              </label>
              <input
                className="rounded-md w-full h-10 md:h-14 lg:h-14  border-2 border-[#176B87]"
                type="text"
                value={signup.firstName}
                onChange={(e) =>
                  setSignup({ ...signup, firstName: e.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] mb-2">
                Last Name:
              </label>
              <input
                className="rounded-md w-full h-10 md:h-14 lg:h-14 w-4/4 border-2 border-[#176B87]"
                type="text"
                value={signup.lastName}
                onChange={(e) =>
                  setSignup({ ...signup, lastName: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 w-11/12">
            <div className="flex flex-col ">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold text-[#176B87] mb-2">
                Email:
              </label>
              <input
                className="rounded-md h-10 md:h-14 lg:h-14 w-4/4 border-2 border-[#176B87]"
                type="text"
                value={signup.email}
                onChange={(e) =>
                  setSignup({ ...signup, email: e.target.value })
                }
              ></input>
            </div>

            <div className="flex flex-col">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] mb-2">
                Password:
              </label>
              <input
                className="rounded-md h-10 md:h-14 lg:h-14 w-4/4 border-2 border-[#176B87]"
                type="password"
                value={signup.password}
                onChange={(e) =>
                  setSignup({ ...signup, password: e.target.value })
                }
              ></input>
            </div>
          </div>
          <button
            onClick={handleSignUp}
            className="rounded-xl lg:w-[40%] lg:h-[12%] md:w-[40%] md:h-[12%] w-[32%] h-[8%] bg-[#176B87] p-3 text-[#EEEEEE] font-bold text-xl md:text-3xl lg:text-3xl "
          >
            Sign Up
          </button>
          <p className="lg:text-xl md:text-xl text-md my-5 font-light text-[#176B87] ">
            Already have an account?
            <a href="/login" className="text-[#36dacf] hover:underline ml-2">
              Log in
            </a>
          </p>
        </div>
        <img className="hidden lg:block h-screen w-1/2" src={img}></img>
      </div>
    </>
  );
}
