import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/loginImg.png";

type Info = {
  email: string;
  password: string;
  name: string;
};

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleLogIn = async () => {
    const res = await fetch(
      "https://64ec51b1f9b2b70f2bfa175c.mockapi.io/Users"
    );

    const data = await res.json();
    const IsLogin = data.some((e: Info) => {
      return e.email === email && e.password === password;
    });
    localStorage.setItem("isLog", IsLogin);

    nav("/home");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-screen">
      <div className="flex flex-col items-center shadow-2xl bg-gradient-to-b from-[#64CCC5] to-[#053B50] w-full md:w-1/2 h-3/5 md:ml-40 sm:w-1/2 sm:ml-40 rounded-3xl">
        <h1 className="font-bold text-4xl my-8 text-[#EEEEEE]">Log In</h1>
        <div className="flex justify-start flex-col w-4/5 md:w-4/5 sm:w-4/5">
          <div className="flex flex-col mb-10 w-full">
            <label className="text-md text-[#EEEEEE]">Email</label>
            <input
              className="rounded-md h-8"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="text-md text-[#EEEEEE]">Password</label>
            <input
              className="rounded-md h-8"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>{" "}
          </div>
        </div>
        <button
          onClick={handleLogIn}
          className="rounded-xl w-72 h-12 bg-[#EEEEEE] mt-12 text-[#64CCC5] font-bold text-2xl"
        >
          Sign Up
        </button>
      </div>
      <img
        className="hidden md:inline h-screen w-full lg:inline"
        src={img}
      ></img>
    </div>
  );
}
