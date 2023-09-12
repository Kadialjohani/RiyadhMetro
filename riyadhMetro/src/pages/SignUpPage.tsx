import img from "../assets/signupImg.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Swal from 'sweetalert2'

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
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email and password (minimum 10 characters).',
        
      })
      
    }
  };
  // nav
  
  
  return (
    <>
    
    <img className="w-36 absolute pl-2" src={Logo}></img>
    <div className="flex flex-row justify-between items-center w-full h-screen">
      <div className="flex flex-col items-center shadow-2xl shadow-[#176B87] border-2 border-[#176B87] w-1/2 h-3/4 ml-40 rounded-3xl">
        <h1 className="font-bold text-4xl my-8  text-[#176B87]">Sign Up</h1>
        <div className="flex flex-row my-10 w-4/5 justify-between">
          <div className="flex flex-col">
            <label className="text-md  text-[#176B87]">First Name</label>
            <input
              className="rounded-md h-8 border-2 border-[#176B87]"
              type="text"
              value={signup.firstName}
              onChange={(e) =>
                setSignup({ ...signup, firstName: e.target.value })
              }
            ></input>{" "}
          </div>
          <div className="flex flex-col">
            <label className="text-md  text-[#176B87]">Last Name</label>
            <input
              className="rounded-md h-8 border-2 border-[#176B87]"
              type="text"
              value={signup.lastName}
              onChange={(e) =>
                setSignup({ ...signup, lastName: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div className="flex justify-start flex-col w-4/5">
          <div className="flex flex-col mb-10 w-full">
            <label className="text-md  text-[#176B87]">Email</label>
            <input
              className="rounded-md h-8 border-2 border-[#176B87]"
              type="text"
              value={signup.email}
              onChange={(e) => setSignup({ ...signup, email: e.target.value })}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-md  text-[#176B87]">Password</label>
            <input
              className="rounded-md h-8 border-2 border-[#176B87]"
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
          className="rounded-xl w-72 h-12 bg-[#176B87] mt-12 text-[#EEEEEE] font-bold text-2xl"
        >
          Sign Up
        </button>
      </div>
      <img className="h-screen w-1/2" src={img}></img>
    </div>
   
  </>);
}
