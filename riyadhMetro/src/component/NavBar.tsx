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
            <ul className="flex flex-row md:gap-14 md:justify-start lg:justify-between font-bold text-sm md:text-xl lg:text-3xl text-[#EEEEEE]">
              <div className="flex flex-row justify-between lg:flex-row lg:justify-between items-center w-2/3">
                <li>
                  <a href="/">
                    <img className="lg:w-36 md:w-36 w-16" src={Logo2}></img>
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

              <div className="flex flex-row justify-between md:gap-5 lg:gap-4 md:justify-start items-center lg:flex-row lg:items-center w-1/5">

                <li>
                  <a href="/login">
                    <button
                      className="border-2 border-[#EEEEEE] text-[#EEEEEE]  text-[11px] text-sm md:text-xl lg:text-3xl w-12 h-7 md:w-24 md:h-10 lg:w-32 lg:h-12 rounded-full"
                      onClick={onLogin}
                    >
                      Login
                    </button>
                  </a>
                </li>
                <li>
                  <a href="/signup">
                    <button

                      className="bg-[#EEEEEE] text-[#176B87] w-14  h-8 md:w-24 md:h-10 lg:w-32 lg:h-12 rounded-full"

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
          <nav className="lg:h-[80px] md:h-[80px] h-[60px] bg-gradient-to-b from-[#64CCC5] to-[#053B50] w-full">
            <ul className="flex flex-row lg:justify-between justify-between md:justify-between gap-5 font-bold text-sm text-center md:text-xl lg:text-2xl text-[#EEEEEE]">
              <div className="flex flex-row lg:justify-between mt-3 md:mt-2 justify-end md:justify-between gap-3 items-center w-3/6">
                <li>
                  <a href="/home">
                    <img className="lg:w-36 md:w-36 w-16" src={Logo2}></img>
                  </a>
                </li>
                <li>
                  <a href="/home">Home</a>
                </li>

                <li>
                  <a href="/bookings">Bookings</a>
                </li>
              </div>
              <div className="flex flex-row items-center justify-end mt-3 md:justify-center lg:justify-around w-1/5">
                <li>
                  <a href="/login">
                    <button
                      className="bg-[#EEEEEE] text-[#176B87] w-20 h-9 lg:w-28 lg:h-11 md:w-28 md:h-11 rounded-full"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </a>
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
