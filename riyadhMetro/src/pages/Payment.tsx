import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NpA9ABjKC9tyQ3OgsLeWsL158hTYR1HoUiictaRKpZ5pmUyX0dHgXjlyY7qNjhODmJALNjpZooX65ht341fgwH700oFp2426t"
);

function showAlert() {
  alert("This is an alert message!");
}

export default function Payment() {
  return (
    <div className="payment-container">
      <h1>Payment Form</h1>
      <Elements stripe={stripePromise}>
        <form id="pay" className="payment-form">
          <label htmlFor="card-element">Card Details</label>
          <CardElement className="card-element" />
          <button onClick={showAlert} type="submit" className="pay-button">
            Pay
          </button>
        </form>
      </Elements>
    </div>
  );
}
