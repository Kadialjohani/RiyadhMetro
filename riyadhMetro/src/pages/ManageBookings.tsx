import React from 'react'
import { useState } from 'react';
import axios from "axios";
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Ticket from '../component/Ticket'

interface info {
  id:number
  from: string,
  to: string,
  date: string,
  price: string,
}

export default function ManageBookings() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // get
  const [list, setList] = React.useState<info[]>([]);

  React.useEffect(() => {
    axios
      .get("https://64fc603b605a026163ae6c99.mockapi.io/tickets")
      .then((res) => {
        setList(res.data);
      });
  }, [list]);
// log in
  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Perform signup logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div>
      
      <NavBar isLoggedIn={!isLoggedIn} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} ></NavBar>
      
      <div className='flex-col border-2 border-red-400 w-full h-screen flex justify-center'>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <Ticket from={item.from} to={item.to} date={item.date} price={item.price.toString()}></Ticket>
          </div>
        )
        })} 
      
      

      </div>
     
     
      {/* footer */}
      <Footer isLoggedIn={!isLoggedIn}></Footer>
    </div>
  )
}
