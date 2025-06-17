import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/POCO.png";
import { Link } from "react-router-dom";
import { Search, Menu, ShoppingBag ,User , House } from "lucide-react";
import Login from "../Pages/Login";
import Cart from "./Cart";

const Nav = () => {
  // Add new state for login modal
  const [showLogin, setShowLogin] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
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
    }, 300); 
  };

  useEffect(() => {
    if (loginTimeoutRef.current) {
      clearTimeout(loginTimeoutRef.current);
    }
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

          {/* Cart Icon */}
          <div className="relative group cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors" />
            <span className={`absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full transition-colors ${
              cartCount > 0 ? 'bg-amber-500 group-hover:bg-amber-300 group-hover:text-amber-300' : 'bg-gray-500'
            }`}>
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </section>
  );
};

export default Nav;
