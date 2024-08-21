import React, { useState } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-scroll";

const styles = {
  nav: "mx-4 cursor-pointer hover:text-[#a6a4f8]",
  mobileNav: "p-4 border-b border-gray-600",
};
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed bg-neutral-900 mx-auto w-full">
      <div className="text-xl flex justify-between items-center h-20 max-w-[1240px] p-4 mx-auto text-white">
        <h1 className="w-full text-3xl font-bold text-[#a6a4f8] m-4">
          Clustrix
        </h1>
        <ul className="hidden md:flex">
          <li className={styles.nav}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={styles.nav}>
            <Link
              to="analytics"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={styles.nav}>
            <Link
              to="cards"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className={styles.nav}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNavbar} className="block md:hidden">
          {navbar ? (
            <VscChromeClose size={50} className="cursor-pointer" />
          ) : (
            <HiOutlineBars3CenterLeft size={50} className="cursor-pointer" />
          )}
        </div>
        <div
          className={
            navbar
              ? "text-xl fixed left-0 top-0 w-[70%] h-full border-r-gray-900 bg-[#151515] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#a6a4f8] m-6">
            Clustrix
          </h1>
          <ul className="uppercase p-4">
            <li className={styles.mobileNav}>
              <Link
                onClick={handleNavbar}
                className={styles.nav}
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className={styles.mobileNav}>
              <Link
                onClick={handleNavbar}
                className={styles.nav}
                to="analytics"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className={styles.mobileNav}>
              <Link
                onClick={handleNavbar}
                className={styles.nav}
                to="cards"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="p-4">
              <Link
                onClick={handleNavbar}
                className={styles.nav}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
