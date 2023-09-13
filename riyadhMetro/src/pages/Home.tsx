import axios from "axios";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import TicketForm from "../assets/TicketForm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import icon1 from "../assets/icons8-metro-48.png";
import icon2 from "../assets/icons8-user-30.png";

interface Location {
  lat: number;
  lng: number;
}
interface Station {
  id: number;
  name: string;
  location: Location;
}
interface info {
  from: string;
  to: string;
  date: string;
  price: number;
}
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // post Ticket
  const [list, setList] = React.useState<info[]>([]);

  const [date, setDate] = React.useState("");

  useEffect(() => {
    axios
      .get("https://64fc603b605a026163ae6c99.mockapi.io/tickets")
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const nav = useNavigate();

  // edited
  const Book = () => {
    localStorage.setItem("from", selectedStation1?.name || "");
    // from: selectedStation1?.name || "",
    // to: selectedStation2?.name || "",
    localStorage.setItem("to", selectedStation2?.name || "");
    // date: date,
    localStorage.setItem("date", date);
    // price: price,
    localStorage.setItem("price", price);

    nav("/payment");
  };

  // map

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 24.7136, // Latitude of Riyadh
    lng: 46.6753, // Longitude of Riyadh
  };

  const locations: Station[] = [
    {
      id: 1,
      name: "KAFD Station",
      location: {
        lat: 24.767534897475542,
        lng: 46.64309468219314,
      },
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
      name: "Qasr Al-Hokm Station",
      location: {
        lat: 24.62864875341536,
        lng: 46.71629091102469,
      },
    },
    {
      id: 4,
      name: "Western Station",
      location: {
        lat: 24.581902433263505,
        lng: 46.614655595681036,
      },
    },
  ];

  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [nearestStation, setNearestStation] = useState<Station | null>(null);
  const [directions, setDirections] = useState<any>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);

  const [selectedStation1, setSelectedStation1] = useState<Station | null>(
    null
  );
  const [selectedStation2, setSelectedStation2] = useState<Station | null>(
    null
  );

  const calculateDistance = (station1: Station, station2: Station): number => {
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers
    const lat1 = station1.location.lat;
    const lon1 = station1.location.lng;
    const lat2 = station2.location.lat;
    const lon2 = station2.location.lng;

    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadiusKm * c;
    return distance;
  };

  const degToRad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };
  const handleStationClick = (station: Station) => {
    if (!selectedStation1) {
      setSelectedStation1(station);
    } else if (!selectedStation2) {
      setSelectedStation2(station);
    } else {
      // Both stations are already selected, so reset the selection
      setSelectedStation1(station);
      setSelectedStation2(null);
    }
  };

  const distance =
    selectedStation1 && selectedStation2
      ? calculateDistance(selectedStation1, selectedStation2)
      : null;

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({
            lat: latitude,
            lng: longitude,
          });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    // Find nearest station
    if (userLocation) {
      let minDistance = Infinity;
      let nearest: Station | null = null;
      for (const station of locations) {
        const distance = Math.sqrt(
          Math.pow(userLocation.lat - station.location.lat, 2) +
            Math.pow(userLocation.lng - station.location.lng, 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          nearest = station;
        }
      }
      setNearestStation(nearest);
    }
  }, [userLocation]);

  useEffect(() => {
    setDirections(null);

    if (selectedStation1 && selectedStation2) {
      // Find directions between selected stations
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: selectedStation1.location as google.maps.LatLngLiteral,
          destination: selectedStation2.location as google.maps.LatLngLiteral,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(response);
          } else {
            console.error("Error calculating directions:", status, response);
          }
        }
      );
    }
  }, [selectedStation1, selectedStation2]);
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    if (distance !== null) {
      let calculatedPrice: number;
      if (distance <= 5) {
        calculatedPrice = 20;
      } else if (distance > 10) {
        calculatedPrice = 30;
      } else {
        calculatedPrice = 25;
      }
      setPrice(calculatedPrice);
    } else {
      setPrice(null);
    }
  }, [distance]);
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
      <div className="h-[180vh] w-full bg-[#EEEEEE] relative">
        <NavBar
          isLoggedIn={!isLoggedIn}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
        />
        {/* Rest of your app */}
        {/* map */}
        <div className="flex-col w-[99%] h-[60%] md:w-[99%] lg:w-4/5 lg:h-4/5 p-5 rounded-xl bg-white justify-center absolute lg:top-1/2 top-[40%] left-48 md:left-[50%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="border-2 border-[#176B87] flex justify-center items-center lg:h-2/4 h-[60%] md:w-11/12 lg:w-4/5 w-11/12  md:mt-32 mt-20 absolute top-1/4 lg:top-1/4 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <LoadScript googleMapsApiKey="AIzaSyCo06Lax0RuvqqmoCEGSn-GEZEhLD3E-pA ">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                onLoad={(map) => {
                  if (directionsRenderer !== null) {
                    directionsRenderer.setMap(map);
                  }
                }}
              >
                {locations.map((item) => (
                  <Marker
                    key={item.id}
                    position={item.location}
                    options={{ icon: icon1 }}
                    onClick={() => handleStationClick(item)}
                  />
                ))}
                {userLocation && (
                  <Marker position={userLocation} options={{ icon: icon2 }} />
                )}
                {nearestStation && (
                  <InfoWindow
                    position={nearestStation.location}
                    onCloseClick={() => setSelectedStation(null)}
                  >
                    <h1>Nearest Station: {nearestStation.name}</h1>
                  </InfoWindow>
                )}
                {directions && (
                  <DirectionsRenderer
                    options={{
                      directions: directions,
                    }}
                    onLoad={(directionsRenderer) => {
                      setDirectionsRenderer(directionsRenderer);
                    }}
                  />
                )}
                {nearestStation && selectedStation && !directions && (
                  <DirectionsService
                    options={{
                      destination: selectedStation.location,
                      origin: nearestStation.location,
                      travelMode: google.maps.TravelMode.DRIVING,
                    }}
                    callback={(response) => {
                      if (response !== null) {
                        setDirections(response);
                      }
                    }}
                  />
                )}
              </GoogleMap>
            </LoadScript>
          </div>

          {/* the ticket */}
          <div className="absolute h-fit lg:w-4/5 md:w-11/12 w-11/12 top-3/4 lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center items-center border-4 h-fit md:w-full w-full lg:mx-auto relative">
              <img
                className="lg:w-full md:w-full lg:h-full h-40 w-full"
                src={TicketForm}
              ></img>
              <div className="absolute lg:top-16 lg:left-12 md:left-10 left-2 top-6">
                <h1 className="lg:mb-2 lg:text-xl text-sm font-bold text-[#176B87]">
                  From:
                </h1>
                <input
                  name="origin"
                  className="p-1 rounded-md text-sm w-20 md:w-32 h-8 lg:w-48 lg:h-11 border-2"
                  type="text"
                  placeholder="origin"
                  value={selectedStation1?.name || ""}
                  readOnly
                ></input>
              </div>
              <div className="absolute top-6 left-28 lg:top-16 lg:left-80 md:top-6 md:left-72">
                <h1 className="lg:mb-2 lg:text-xl text-sm font-bold text-[#176B87]">
                  To:
                </h1>
                <input
                  name="destination"
                  className="p-1 rounded-md text-sm w-20 md:w-32 h-8 lg:w-48 lg:h-11 border-2"
                  type="text"
                  placeholder="destination"
                  value={selectedStation2?.name || ""}
                  readOnly
                ></input>
              </div>
              <div className="absolute lg:top-48 lg:left-52 md:left-40 left-16 top-[85px]">
                <h1 className="lg:mb-2 lg:text-xl  text-sm font-bold text-[#176B87]">
                  Date:
                </h1>
                <div className="flex flex-row">
                  <button className="bg-white h-8 p-1 border-2 border-r-0 rounded-l-md">
                    <FontAwesomeIcon
                      className="text-[#D9D9D9]"
                      icon={faCalendarDays}
                    />
                  </button>
                  <input
                    name="date"
                    className="p-1 rounded-r-md lg:w-40 md:w-40 w-20 h-8 border-2 border-l-0"
                    type="date"
                    placeholder=""
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="absolute justify-center items-center flex flex-col lg:h-48 md:h-32 h-16 w-20 lg:w-60 md:w-40 gap-y-2 md:gap-y-5 lg:gap-y-10 lg:top-10 lg:right-14 md:right-12 right-8">
                <button
                  onClick={Book}
                  className="lg:mb-2 lg:text-2xl md:text-lg text-sm text-[#EEEEEE] font-bold bg-[#176B87] w-16 h-6 md:w-24 md:h-8 lg:w-40 lg:h-10 rounded-full"
                >
                  Book
                </button>

                <div className="flex flex-row justify-center gap-x-2 lg:text-6xl font-bold md:text-2xl text-xl h-20 ">
                  <p className="text-[#64CCC5]">{price}</p>
                  <h1 className="text-[#176B87]">SAR</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of Map */}

      {/* footer */}
      <Footer isLoggedIn={!isLoggedIn}></Footer>
    </div>
  );
}
