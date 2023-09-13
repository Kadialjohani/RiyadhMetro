import img from "../assets/signupImg.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    if (signup.email.includes("@") && signup.password.length > 9) {
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
  };
  // nav

  return (
    <>
      <a href="/">
        <img className="w-24 md:w-36 lg:w-36 absolute pl-2" src={Logo}></img>
      </a>
      <div className="flex flex-row justify-center lg:justify-end items-center xl:justify-end w-full h-screen  ">
        <div className="flex flex-col items-center shadow-2xl shadow-[#176B87] border-2  border-[#176B87] m-6 md:m-14 h-[88%] w-[100%] md:h-[75%] lg:w-[40%] lg:h-[74%] rounded-3xl">
          <h1 className="font-bold p-3 lg:p-10 text-4xl md:text-5xl lg:text-6xl my-8 text-[#176B87]">
            Sign Up
          </h1>
          <div className="flex flex-col items-center lg:flex-row w-[91%] lg:w-4/5 lg:justify-between">
            <div className="flex flex-col m-3 w-[80%] md:w-[84%] ">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] p-3 ">
                First Name:
              </label>
              <input
                className="rounded-md h-10 md:h-14 lg:h-14  border-2 border-[#176B87]"
                type="text"
                value={signup.firstName}
                onChange={(e) =>
                  setSignup({ ...signup, firstName: e.target.value })
                }
              ></input>
            </div>
            <div className="flex flex-col m-3 md:w-[84%]">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] p-3 ">
                Last Name:
              </label>
              <input
                className="rounded-md h-10 md:h-14 lg:h-14 w-4/4 border-2 border-[#176B87]"
                type="text"
                value={signup.lastName}
                onChange={(e) =>
                  setSignup({ ...signup, lastName: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="flex flex-col w-4/5">
            <div className="flex flex-col m-3 ">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] p-3 ">
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

            <div className="flex flex-col m-3 ">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] p-3 ">
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
            className="rounded-xl w-[40%] h-[10%] bg-[#176B87] p-3 mt-[50px] md:mt-20 lg:mt-20 text-[#EEEEEE] font-bold text-xl md:text-3xl lg:text-3xl "
          >
            Sign Up
          </button>
        </div>
        <img className="hidden lg:block h-screen w-1/2" src={img}></img>
      </div>
    </>
  );
}
