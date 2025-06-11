import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/POCO.png";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu } from "lucide-react";
import Cart from "./Cart";
import Login from "../Pages/Login"; // Import the Login component

const Nav = () => {
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 2;
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  // Add new state for login modal
  const [showLogin, setShowLogin] = useState(false);
  const loginTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (loginTimeoutRef.current) {
      clearTimeout(loginTimeoutRef.current);
    }
    setShowLogin(true);
  };

  const handleMouseLeave = () => {
    loginTimeoutRef.current = setTimeout(() => {
      setShowLogin(false);
    }, 300); // 300ms delay before hiding
  };

  // For now, we're just using localStorage.
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cartCount") {
        setCartCount(parseInt(e.newValue, 10) || 0);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      if (loginTimeoutRef.current) {
        clearTimeout(loginTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full select-none">
      {/* Top Nav */}
      <div className="bg-[#161718] flex py-3 md:py-0 justify-between items-center border-t-0 md:border-t-2 md:border-amber-300 px-4 md:px-[230px]">
        <div className="md:hidden">
          <Search className="w-5 h-5 text-white hover:text-amber-300 cursor-pointer" />
        </div>
        <Link to="/" className="flex-1 md:flex-none flex justify-center md:justify-start">
          <img src={Logo} alt="POCO" className="h-9 md:h-auto" />
        </Link>

        <div className="flex items-center gap-16">
          <div className="hidden md:flex text-white text-sm items-center gap-4">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="hover:text-amber-300 duration-400 text-sm cursor-pointer">
                SIGN IN
              </Link>
              {showLogin && <Login />}
            </div>
            |
            <Link to="/register" className="hover:text-amber-300 duration-400 text-sm cursor-pointer">
              REGISTER
            </Link>
          </div>

          <div
            className="relative inline-block"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <div className="relative group cursor-pointer">
              <ShoppingBag className="w-8 h-8 text-white group-hover:text-amber-300" />
              {cartCount > -1 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full group-hover:bg-amber-300 group-hover:text-black ">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Cart Modal (rendered if isCartOpen is true) – slides in from the right */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="bg-white p-4 rounded shadow w-80 h-full transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Cart />
          </div>
        </div>
      )}
    </section>
  );
};

export default Nav;
