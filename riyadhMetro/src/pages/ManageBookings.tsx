import React from "react";
import { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Ticket from "../component/Ticket";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface info {
  id: string;
  from: string;
  to: string;
  date: string;
  price: string;
}

export default function ManageBookings() {
  // login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // for the pdf
  const pdfRef = useRef<HTMLDivElement>(null);

  // get
  const [list, setList] = React.useState<info[]>([]);

  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      nav("/bookings");
    } else {
      nav("/login");
    }
  },[]);

  React.useEffect(() => {
    axios
      .get("https://64fc603b605a026163ae6c99.mockapi.io/tickets")
      .then((res) => {
        setList(res.data);
      });
  }, [list]);
  // del
  const deleteTicket = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://64fc603b605a026163ae6c99.mockapi.io/tickets/${id}`)
          .then(() => {
            setList(
              list.filter((item) => {
                return item.id !== id;
              })
            );
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
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
    localStorage.setItem("isLogin", "false");
  };
  // download btn
  const download = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getWidth();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(
          imgData,
          "PNG",
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save("Metro-Ticket.pdf");
      });
    }
  };

  return (
    <div>
      <div className="lg:h-[250vh] md:h-screen h-screen w-full flex flex-col bg-[#EEEEEE] relative">
        <NavBar
          isLoggedIn={!isLoggedIn}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
        ></NavBar>
        <h1 className="text-[#176B87] flex w-fit lg:left-[40%] lg:top-[15%] lg:text-5xl md:left-[37%] md:top-[11%] md:text-3xl left-[33%] top-[20%] text-xl absolute">
          Your Ticket
        </h1>
        <div
          ref={pdfRef}
          className="flex-col lg:w-4/5 md:w-11/12 w-full h-fit flex lg:p-5 md:p-2 p-1 rounded-xl bg-white justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {list.map((item) => {
            return (
              <div key={item.id}>
                <Ticket
                  from={item.from}
                  to={item.to}
                  date={item.date}
                  price={item.price}
                  deleteOnclick={() => deleteTicket(item.id)}
                ></Ticket>
              </div>
            );
          })}

          <button
            className="mb-2 lg:text-xl md:text-lg text-sm text-[#EEEEEE] font-bold bg-[#176B87] lg:w-36 lg:h-14 w-28 h-10 rounded-full"
            onClick={download}
          >
            Download
          </button>
        </div>
      </div>

      {/* footer */}
      <Footer isLoggedIn={!isLoggedIn}></Footer>
    </div>
  );
}
