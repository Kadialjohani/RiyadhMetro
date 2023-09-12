import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ticket from "../component/Ticket";
import Swal from 'sweetalert2'

const stripePromise = loadStripe(
  "pk_test_51NpA9ABjKC9tyQ3OgsLeWsL158hTYR1HoUiictaRKpZ5pmUyX0dHgXjlyY7qNjhODmJALNjpZooX65ht341fgwH700oFp2426t"
);

export default function Payment() {
  const nav = useNavigate()
  // function showAlert() {
  //   alert();
  //   nav("/bookings")
    // post code
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
          console.log(res));
          
          
       
        
    };
  

  return (

    

    <div className="bg-[#176B87] h-screen flex flex-col justify-center items-center">
    <div className="rounded-xl bg-white w-3/4 flex flex-col p-5">
      <Ticket from={localStorage.getItem("from")} to={localStorage.getItem("to")} date={localStorage.getItem("date")} price={localStorage.getItem("price").toString()}></Ticket>
    {/* {localStorage.getItem("from")} */}
    <div>
      <a href="https://buy.stripe.com/test_bIYaHObp12fjeaI144"><button onClick={showAlert} className="mb-2 text-2xl text-[#EEEEEE] font-bold bg-[#176B87] w-40 h-10 rounded-full">Pay</button></a>
    </div>
    </div>
    </div>
  );
}



