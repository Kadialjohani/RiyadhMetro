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
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successful Payment',
        showConfirmButton: false,
        timer: 1500
      })
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
          
          
        nav("/bookings")
        
    };
  

  return (
    <div className="bg-[#176B87] h-screen flex flex-col justify-center items-center">
    <div className="rounded-xl bg-white w-3/4 flex flex-col p-5">
      <Ticket from={localStorage.getItem("from")} to={localStorage.getItem("to")} date={localStorage.getItem("date")} price={localStorage.getItem("price").toString()}></Ticket>
    {/* {localStorage.getItem("from")} */}
    <div className="payment-container">
      <h1 className=" font-bold text-center text-2xl text-[#176B87]">Payment Form</h1>
      <Elements stripe={stripePromise}>
        <form id="pay" className="payment-form">
          <label className="text-[#176B87]" htmlFor="card-element">Card Details</label>
          <CardElement className="card-element"/>
          <button onClick={showAlert} type="submit" className="pay-button rounded-3xl w-72 h-12 font-bold text-xl bg-[#64CCC5] text-[#053B50] mt-5">
            Pay
          </button>
        </form>
      </Elements>
    </div>
    </div>
    </div>
  );
}
