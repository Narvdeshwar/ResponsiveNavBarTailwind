import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavItems = ({ isToogle }) => (
  <ul
    className={`absolute top-[30px] bg-purple-800 ${
      isToogle ? "max-h-40" : "max-h-0"
    } text-white w-full text-center transition-max-height duration-1000 ease-in-out overflow-hidden md:flex md:static md:bg-transparent md:shadow-none md:max-h-none md:w-[90%] md:justify-end`}
  >
    <li className="p-2 mx-2">Home</li>
    <li className="p-2 mx-2">Contact</li>
    <li className="p-2 mx-2">Services</li>
    <li className="p-2 mx-2">signin/signup</li>
  </ul>
);
function App() {
  const [isToogle, setToogle] = useState(false);

  const toggler = () => {
    setToogle(!isToogle);
    console.log(isToogle);
  };

  return (
    <>
      <nav className="relative w-full h-[30px] bg-purple-800 flex items-center justify-between text-white font-bold">
        {/* navbar */}
        <div className="mx-5">Navbar</div>
        <div className="mx-5 md:hidden" onClick={toggler}>
          <GiHamburgerMenu />
        </div>
        <NavItems isToogle={isToogle} />
      </nav>
    </>
  );
}

export default App;
