import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/loginImg.png";
import Logo from "../assets/Logo.png";
import Swal from 'sweetalert2'

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

    if (IsLogin){
      nav("/home")
    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or Password are incorrect',
        
      })
      
    }}
  

  return (
    <>
    <a href="/"><img className="w-36 absolute pl-2" src={Logo}></img></a>
    <div className="flex flex-row justify-between items-center w-full h-screen">
      <div className="flex flex-col items-center shadow-2xl shadow-[#176B87] border-2 border-[#176B87] w-1/2 h-3/5 ml-40 rounded-3xl">
        <h1 className="font-bold text-4xl my-8  text-[#176B87]">Log In</h1>
      
        <div className="flex justify-start flex-col w-4/5">
          <div className="flex flex-col mb-10 w-full">
            <label className="text-md  text-[#176B87]">Email</label>
            <input
              className="rounded-md h-8 border-2 border-[#176B87]"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-md  text-[#176B87]">Password</label>
            <input
              className="rounded-md h-8 border-2 border-[#176B87]"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            ></input>
          </div>
        </div>
        <button
          onClick={handleLogIn}
          className="rounded-xl w-72 h-12 bg-[#176B87] mt-12 text-[#EEEEEE] font-bold text-2xl"
        >
          Log In
        </button>
      </div>
      <img className="h-screen w-1/2" src={img}></img>
    </div>
    </>
  );
}
