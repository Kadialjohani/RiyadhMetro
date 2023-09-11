import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ManageBookings from "./pages/ManageBookings";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/bookings" element={<ManageBookings />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </>
  );
}

export default App;
