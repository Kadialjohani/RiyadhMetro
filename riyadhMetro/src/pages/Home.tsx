import React from 'react'
import axios from "axios";
import { useState } from 'react';
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

import { GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import TicketForm from '../assets/TicketForm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

interface Types {
    id: number;
    name: string;
    location: {
      lat: number;
      lng: number;
    };
  }

interface info {
  from: string,
  to: string,
  date: string,
  price: number,
}  
export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // post Ticket
    const [list, setList] = React.useState<info[]>([]);
    const [tickets, setTickets] = React.useState({
    from: "",
    to: "",
    date: "",
    price: "15",
  });

  React.useEffect(() => {
    axios
      .get("https://64fc603b605a026163ae6c99.mockapi.io/tickets")
      .then((res) => {
        setList(res.data);
      });
  }, []);

  
  const Book = () => {
    axios
      .post("https://64fc603b605a026163ae6c99.mockapi.io/tickets", {
        from: tickets.from,
        to: tickets.to,
        date: tickets.date,
        price: tickets.price,
        

      })
      .then((res) => {
        setList([...list, res.data]);
        setTickets({ from: "", to: "", date: "", price: "",});
        // console.log(res));
      });
  };

    // map
    const [selectedStation, setSelectedStation] = React.useState(null);
    
    const containerStyle = {
        width: "100%",
        height: "100%",
      };
    
      const center = {
        lat: 24.7136, // Latitude of Riyadh
        lng: 46.6753, // Longitude of Riyadh
      };
    
      const locations: Types[] = [
        {
          id: 1,
          name: "KAFD Metro Station",
          location: { 
            lat: 24.767534897475542, lng: 46.64309468219314 },
        },
        {
          id: 2,
          name: "Olaya Station",
          location: {
            lat: 24.729247246750933,
            lng: 46.66640736815547,
          },
        },
        {
          id: 3,
          name: "3E2 Riyadh Metro Station - Qasr Al-Hokm",
          location: {
            lat: 24.62864875341536,
            lng: 46.71629091102469,
          },
        },
        {
          id: 4,
          name: "Riyadh Metro Station - Western Station",
          location: {
            lat: 24.581902433263505,
            lng: 46.614655595681036,
          },
        },
      ];

    const handleStationClick = (item:Types) => {
    setSelectedStation(item);
    };

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
        <div className='h-screen w-full bg-gradient-to-b from-[#64CCC5] to-[#053B50] relative'>
        <NavBar isLoggedIn={!isLoggedIn} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} />
        {/* Rest of your app */}
        {/* map */}
        <div className='border-2 border-red-700 flex justify-center items-center h-3/5 w-3/5 m-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <LoadScript googleMapsApiKey="AIzaSyBRVLfvPSuQ3AeuBOBJHkJjWFAb_NMSmIs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
        {locations.map((item) => (


              <Marker key={item.id} position={item.location} onClick={() => handleStationClick(item)} />

        ))}
        {selectedStation && (
            <InfoWindow
              position={selectedStation.location}
              onCloseClick={() => setSelectedStation(null)}
            >
              <div>
                <h2>{selectedStation.name}</h2>
              </div>
            </InfoWindow>
          )}
      </GoogleMap>
    </LoadScript>
        </div>
        </div>
        {/* the ticket */}
        <div className='h-96 w-full bg-gradient-to-b flex from-[#053B50] to-[#36dacf] '>
            <div className='flex justify-center items-center h-4/5 w-3/5 mx-auto  relative'>
                <img className='' src={TicketForm}></img>
                <div className='absolute top-16 left-12'>
                  <h1 className='mb-2 text-xl font-bold text-[#176B87]'>From</h1>
                  <input className='p-1 rounded-md w-40 border-2' type='text' placeholder='origin' value={tickets.from} onChange={(e) =>
                setTickets({ ...tickets, from: e.target.value })}></input>
                </div>
                <div className='absolute top-16 left-80'>
                  <h1 className='mb-2 text-xl font-bold text-[#176B87]'>To</h1>
                  <input className='p-1 rounded-md w-40 border-2' type='text' placeholder='destination' value={tickets.to} onChange={(e) =>
                setTickets({ ...tickets, to: e.target.value })}></input>
                </div>
                <div className='absolute top-48 left-52'>
                  <h1 className='mb-2 text-xl font-bold text-[#176B87]'>Date</h1>
                  <div className='flex flex-row'>
                  <button className='bg-white p-1 border-2 border-r-0 rounded-l-md'><FontAwesomeIcon className='text-[#D9D9D9]' icon={faCalendarDays} /></button>
                  <input className='p-1 rounded-r-md w-40 border-2 border-l-0' type='text' placeholder='' value={tickets.date} onChange={(e) =>
                setTickets({ ...tickets, date: e.target.value })}></input>
                  </div>
                </div>
                <div className='absolute flex flex-col h-36 justify-between top-8 right-20'>
                  <button onClick={Book} className='mb-2 text-2xl text-[#EEEEEE] font-bold bg-[#176B87] w-40 h-10 rounded-full'>Book</button>
                  <div className='flex flex-row justify-center text-6xl font-bold'>
                    <p className='text-[#64CCC5]'>00</p>
                    <h1 className='text-[#176B87]'>$</h1>
                  </div>
                </div>
            </div>
        </div>  
             
              {/* footer */}
              <Footer isLoggedIn={!isLoggedIn}></Footer>
      </div>
    );
}
