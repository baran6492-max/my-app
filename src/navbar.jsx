import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuItems = [
    { name: "home", to: "home" },
    { name: "about", to: "about" },
    { name: "skill", to: "skill" },
    { name: "work", to: "work" },
    { name: "contact", to: "contact" },
  ];

  return (
    <nav className="w-full h-20 flex justify-between items-center bg-[#040c16] fixed top-0 left-0 px-4 z-50 shadow-md">
      <div className="text-2xl font-bold text-white cursor-pointer">
        MyPortfolio
      </div>

      <div
        onClick={handleClick}
        className="block md:hidden cursor-pointer text-white text-2xl"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`${
          nav
            ? "fixed md:static left-0 top-20 w-full h-screen bg-[#040c16] flex flex-col items-center justify-start gap-8 transition-all duration-500"
            : "hidden"
        } md:flex md:flex-row md:w-auto md:h-auto md:gap-8 text-white`}
      >
        {menuItems.map((item) => (
          <li key={item.name} className="text-xl font-medium">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              onClick={closeNav}
              className="hover:text-pink-500 cursor-pointer transition-colors duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
