import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const linkStyle =
  "p-1 mx-2 cursor-pointer hover:bg-purple-800 hover:shadow-xl hover:rounded-lg h-[50px] flex justify-center items-center";
const NavItems = ({ isToogle }) => (
  <ul
    className={`absolute top-[50px] bg-purple-700 text-white w-full transition-transform duration-500 ease-in-out transform origin-top ${
      isToogle ? "scale-y-100" : "scale-y-0"
    } md:flex md:static md:bg-transparent md:shadow-none md:transform-none md:w-[90%] md:justify-end`}
  >
    <li className={linkStyle}>Home</li>
    <li className={linkStyle}>Contact</li>
    <li className={linkStyle}>Services</li>
    <li className={linkStyle}>Sign In/Sign Up</li>
  </ul>
);

function Navbar() {
  const [isToogle, setToogle] = useState(false);

  const toggler = () => {
    setToogle(!isToogle);
  };

  return (
    <nav className="relative w-full h-[50px] bg-purple-700 flex items-center justify-between text-white font-bold">
      <div className="mx-5">Navbar</div>
      <div
        className={`mx-5 md:hidden cursor-pointer ${isToogle ? "" : ""}`}
        onClick={toggler}
      >
        <GiHamburgerMenu />
      </div>
      <NavItems isToogle={isToogle} />
    </nav>
  );
}

export default Navbar;
