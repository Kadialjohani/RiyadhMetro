import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
          
        
        nav("/bookings")
        
    };
  

  return (
    <div className="payment-container">
      <h1>Payment Form</h1>
      <Elements stripe={stripePromise}>
        <form id="pay" className="payment-form">
          <label htmlFor="card-element">Card Details</label>
          <CardElement className="card-element"/>
          <button onClick={showAlert} type="submit" className="pay-button">
            Pay
          </button>
        </form>
      </Elements>
    </div>
  );
}
