import React from 'react'
import { useState } from 'react';
import axios from "axios";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useRef } from 'react';
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
  // login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // for the pdf
  const pdfRef = useRef()

  // get
  const [list, setList] = React.useState<info[]>([]);

  React.useEffect(() => {
    axios
      .get("https://64fc603b605a026163ae6c99.mockapi.io/tickets")
      .then((res) => {
        setList(res.data);
      });
  }, [list]);
  // del
  const deleteTicket = (id: string) => {
    axios
      .delete(`https://64fc603b605a026163ae6c99.mockapi.io/tickets/${id}`)
      .then(() => {
        setList(
          list.filter((del) => {
            return del.id !== id;
          })
        );
      });
  };
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
  // download btn
  const download = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getWidth();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Metro-Ticket.pdf')
    })}

  return (
    <div>
      <div className='h-[250vh] h-max-[250vh] w-full flex flex-col bg-[#EEEEEE] relative'>
      <NavBar isLoggedIn={!isLoggedIn} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} ></NavBar>
      <div ref={pdfRef} className='flex-col w-4/5 h-fit flex p-5 rounded-xl bg-white justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      {list.map((item) => {
        return (
          <div  key={item.id}>
            <Ticket  from={item.from} to={item.to} date={item.date} price={item.price.toString()} deleteOnclick={() => deleteTicket(item.id)} pdfOnclick={download}></Ticket>
          </div>
        )
        })} 
      
      
      <button className='mb-2 text-xl text-[#EEEEEE] font-bold bg-[#176B87] w-36 h-14 rounded-full' onClick={download}>download</button>
      </div>
      
      </div>
      
      {/* footer */}
      <Footer isLoggedIn={!isLoggedIn}></Footer>
    </div>
  )
}
