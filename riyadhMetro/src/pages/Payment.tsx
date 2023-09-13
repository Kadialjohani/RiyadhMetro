import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ticket from "../component/Ticket";


export default function Payment() {
  const nav = useNavigate();
  if(localStorage.getItem("isLogin") === "true"){
    nav("/payment")
} else {
  nav("/login")

  
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
        // setList([...list, res.data]);
        // setDate(date)
        console.log(res)
      );
  };

  return (
    <div className="bg-[#176B87] h-screen w-screen flex flex-col justify-center items-center">

    <div className="lg:rounded-xl md:rounded-xl bg-white p-1 lg:w-3/4 md:w-11/12 w-full flex flex-col lg:p-5 md:p-5">
      <Ticket from={localStorage.getItem("from")} to={localStorage.getItem("to")} date={localStorage.getItem("date")} price={localStorage.getItem("price").toString()}></Ticket>
    {/* {localStorage.getItem("from")} */}
    <div>
      
      <a href="https://buy.stripe.com/test_bIYaHObp12fjeaI144"><button onClick={showAlert} className="lg:text-2xl md:text-xl text-sm text-[#EEEEEE] font-bold bg-[#176B87] lg:w-40 lg:h-10 md:w-40 md:h-10 w-20 h-6 mb-2 rounded-full">Pay</button></a>

    </div>
    </div>

    </div>
  );
}
