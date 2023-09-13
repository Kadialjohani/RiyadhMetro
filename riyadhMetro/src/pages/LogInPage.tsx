import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/loginImg.png";
import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";

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

    if (IsLogin) {
      nav("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or Password are incorrect",
      });
    }
  };

  return (
    <>
      <a href="/">
        <img className="w-36 absolute pl-2" src={Logo}></img>
      </a>
      <div className="flex flex-row justify-center lg:justify-end items-center w-full h-screen ">
        <div className="flex flex-col gap-y-10 items-center  shadow-2xl shadow-[#176B87] border-2 m-6 md:m-14 border-[#176B87] lg:w-[40%]  h-[60%] md:h-[50%] lg:h-[80vh] w-[100%] rounded-3xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mt-8 text-[#176B87]">
            Log In
          </h1>
          <div className="flex flex-col gap-y-10 w-4/5">
            <div className="flex flex-col w-full">
              <label className=" text-xl md:text-2xl lg:text-2xl font-bold text-[#176B87] mb-2">
                Email:
              </label>
              <input
                className="rounded-md h-10 md:h-14 lg:h-14 w-4/4 border-2 border-[#176B87]"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col w-full ">
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] mb-2">
                Password:
              </label>
              <input
                className="rounded-md h-10 md:h-14 lg:h-14 w-4/4 border-2 border-[#176B87]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            onClick={handleLogIn}
            className="rounded-xl w-[40%] h-[12%] bg-[#176B87] p-3 text-[#EEEEEE] font-bold text-xl md:text-3xl lg:text-3xl "
          >
            Log In
          </button>
          
          <p className="lg:text-xl md:text-xl text-md font-light text-[#176B87] ">
            Don’t have an account yet?
            <a href="/signup" className="text-[#36dacf] hover:underline ml-2">
              Sign up
            </a>
          </p>
        </div>
        <img className="hidden lg:block h-screen w-1/2" src={img}></img>
      </div>
    </>
  );
}
