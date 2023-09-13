import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ticket from "../component/Ticket";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { useState } from "react";
import Swal from 'sweetalert2'


export default function Payment() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const nav = useNavigate();
  // block no logged in users
  if(localStorage.getItem("isLogin") === "true"){
    nav("/payment")
} else {
  nav("/login")
}

// prevent logging oout during payment process
const handleLogout = () => {
  nav("/payment")
  Swal.fire({
    icon: "error",
    title: "Sorry...",
    text: "You can't log out, you have uncompleted payment",
  });
  
  }
  const showAlert = () => {
    axios
      .post("https://64fc603b605a026163ae6c99.mockapi.io/tickets", {
        from: localStorage.getItem("from"),
        to: localStorage.getItem("to"),
        date: localStorage.getItem("date"),
        price: localStorage.getItem("price"),
      })
      .then((res) =>
        console.log(res)
      );
  };
  //only used for the state for tha nav component
  const handleLogin = () => {
    setIsLoggedIn(true);
    
  };
  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-[#EEEEEE] h-[120vh] w-screen flex flex-col items-center justify-between">
      <NavBar isLoggedIn={!isLoggedIn} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} ></NavBar>
    <div className="lg:rounded-xl md:rounded-xl bg-white p-1 lg:w-3/4 md:w-11/12 w-full flex flex-col lg:p-5 md:p-5">
      <Ticket from={localStorage.getItem("from")} to={localStorage.getItem("to")} date={localStorage.getItem("date")} price={localStorage.getItem("price")}></Ticket>
    {/* {localStorage.getItem("from")} */}
    <div>
      
      <a href="https://buy.stripe.com/test_bIYaHObp12fjeaI144"><button onClick={showAlert} className="lg:text-2xl md:text-xl text-sm text-[#EEEEEE] font-bold bg-[#176B87] lg:w-40 lg:h-10 md:w-40 md:h-10 w-20 h-6 mb-2 rounded-full">Pay</button></a>

    </div>
    </div>
    {/* footer */}
    <Footer isLoggedIn={!isLoggedIn}></Footer>
    </div>
  );
}
