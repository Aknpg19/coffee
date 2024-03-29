import React from "react";
import logo from "../../assets/log.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Nabar = () => {
  const [showNav, setShowNav] = useState(false);
  const { cartItems } = useContext(CartContext);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="w-full h-[60px] bg-[#191919] mx-auto z-10 text-white flex items-center justify-between px-8 min-[320px]:px-5 min-[320px]:pt-3 xl:px-[60px] fixed top-0 left-0 right-0">
      <div className="z-10">
        <Link to={"/"}>
          <img className="w-[100px]" src={logo} alt="" />
        </Link>
      </div>

      <div
        ref={menuRef}
        className="absolute xl:static z-10 top-[80px] left-0 right-0 text-black font-semibold xl:text-white text-center"
      >
        {showNav && (
          <ul className="flex flex-col xl:flex-row gap-5 bg-gray-400 py-5">
            <NavLink to={"/"}>Home</NavLink>

            <NavLink to={"/about"}>About</NavLink>

            <NavLink to={"/products"}>Products</NavLink>

            <NavLink to={"/features"}>Features</NavLink>

            <NavLink to={"/menu"}>Menu</NavLink>

            <NavLink to={"/chefs"}>Chefs</NavLink>

            <NavLink to={"/testimonials"}>Testimonials</NavLink>

            <NavLink to={"/contacts"}>Contact us</NavLink>
          </ul>
        )}
        <div className="hidden xl:block">
          <ul className="flex flex-col xl:flex-row gap-5">
            <NavLink to={"/"}>Home</NavLink>

            <NavLink to={"/about"}>About</NavLink>

            <NavLink to={"/products"}>Products</NavLink>

            <NavLink to={"/features"}>Features</NavLink>

            <NavLink to={"/menu"}>Menu</NavLink>

            <NavLink to={"/chefs"}>Chefs</NavLink>

            <NavLink to={"/testimonials"}>Testimonials</NavLink>

            <NavLink to={"/contacts"}>Contact us</NavLink>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 z-10 relative">
        <Link to={"/cart"}>
          <FaCartShopping className="text-xl" />
          <p className="absolute top-[-15px] xl:right-[-12px] right-[25px] text-xl">
            {cartItems.length}
          </p>
        </Link>
        <button onClick={() => setShowNav(!showNav)} className="xl:hidden">
          {showNav ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Nabar;
