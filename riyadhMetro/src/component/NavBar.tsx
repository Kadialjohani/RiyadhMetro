import Logo2 from "../assets/Logo2.png";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn,
  onLogin,
  onSignup,
  onLogout,
}) => {
  return (
    <>
      {!isLoggedIn && (
        <>
          <nav className="h-80px absolute w-full z-20 mt-4 ">
            <ul className="flex flex-row justify-evenly md:gap-14 md:justify-start lg:flex-row lg:justify-between mx-24 font-bold text-l  md:text-xl lg:text-xl text-[#EEEEEE]">
              <div className="flex flex-row justify-end gap-3 lg:flex-row lg:justify-between items-center w-3/5">
                <li>
                  <a href="/">
                    <img className="w-36" src={Logo2}></img>
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#stations">Stations</a>
                </li>
                <li>
                  <a href="#services" className="">
                    Services
                  </a>
                </li>
              </div>
              <div className="flex flex-row gap-[0.6px] md:gap-5 lg:gap-1 justify-start md:justify-start items-center lg:flex-row lg:items-center lg:justify-around w-1/5">
                <li>
                  <a href="/login">
                    <button
                      className="border-2 border-[#EEEEEE] text-[#EEEEEE] w-[4pc] h-8 md:w-24 md:h-10 lg:w-24 lg:h-10 rounded-full"
                      onClick={onLogin}
                    >
                      Login
                    </button>
                  </a>
                </li>
                <li>
                  <a href="/signup">
                    <button
                      className="bg-[#EEEEEE] text-[#176B87] w-[4pc] h-8  md:w-24 md:h-10 lg:w-24 lg:h-10 rounded-full"
                      onClick={onSignup}
                    >
                      Signup
                    </button>
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </>
      )}
      {isLoggedIn && (
        <>
          <nav className="h-80px bg-gradient-to-b from-[#64CCC5] to-[#053B50] w-full">
            <ul className="flex flex-row justify-between mx-24 font-bold text-xl text-[#EEEEEE]">
              <div className="flex flex-row justify-between items-center w-3/6">
                <li>
                  <a href="/home">
                    <img className="w-36" src={Logo2}></img>
                  </a>
                </li>
                <li>
                  <a href="/home">Home</a>
                </li>

                <li>
                  <a href="/bookings">Manage Bookings</a>
                </li>
              </div>
              <div className="flex flex-row items-center justify-around w-1/5">
                <li>
                  <button
                    className="bg-[#EEEEEE] text-[#176B87] w-24 h-10 rounded-full"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </li>
              </div>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
