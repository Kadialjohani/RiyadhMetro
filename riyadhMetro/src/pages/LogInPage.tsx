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
      <div className="flex flex-row  justify-center lg:justify-end items-center xl:justify-end w-full h-screen ">
        <div className="flex flex-col items-center shadow-2xl shadow-[#176B87] border-2 m-6 md:m-14 border-[#176B87] lg:w-[40%]  h-[66%] md:h-[60%] lg:h-[66%] w-[100%] rounded-3xl">
          <h1 className="font-bold p-3 lg:p-10 text-4xl md:text-5xl lg:text-6xl my-8 text-[#176B87]">
            Log In
          </h1>
          <div className="flex justify-start flex-col w-4/5 ">
            <div className="flex flex-col mb-10 w-full">
              <label className=" text-xl md:text-2xl lg:text-2xl font-bold text-[#176B87] p-3">
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
              <label className="text-xl md:text-2xl lg:text-2xl font-bold  text-[#176B87] p-3 ">
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
            className="rounded-xl w-[40%] h-[10%] bg-[#176B87] p-3 mt-[50px] md:mt-20 lg:mt-20 text-[#EEEEEE] font-bold text-xl md:text-3xl lg:text-3xl "
          >
            Log In
          </button>
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign in
          </button>
          <p className="lg:text-xl md:text-xl text-l font-light text-[#176B87]">
            Don’t have an account yet?
            <a href="signup" className="text-[#176B87] hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <img className="hidden lg:block h-screen w-1/2" src={img}></img>
      </div>
    </>
  );
}
