
import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/POCO.png";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, House, MapPin, Ellipsis , Mail,Phone } from "lucide-react";
import Login from "../Pages/Login";
import Cart from "./Cart";


const Contact = () => {
  return (
    <div className="absolute w-[100vw]  inset-0  flex items-end bottom-20 -left-[222px] z-50">
      <div className="bg-white p-6  shadow-2xl w-[100vw] ">
        <div className="flex flex-col  gap-3">
          <a 
            href="mailto:info@poco.pk" 
            className="flex items-center justify-center gap-3 text-black bg-yellow-300 px-6 py-4 rounded-full hover:bg-yellow-400 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            <span>info@poco.pk</span>
          </a>
          <a 
            href="tel:03-111-111-050"  
            className="flex items-center justify-center gap-3 text-black bg-yellow-300 px-6 py-4 rounded-full hover:bg-yellow-400 transition-colors font-medium"
          >
            <Phone className="w-5 h-5" />
            <span>Call: 03-111-111-050</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const loginTimeoutRef = useRef(null);
  const contactTimeoutRef = useRef(null);

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

  const handleContactMouseEnter = () => {
    if (contactTimeoutRef.current) {
      clearTimeout(contactTimeoutRef.current);
    }
    setShowContact(true);
  };

  const handleContactMouseLeave = () => {
    contactTimeoutRef.current = setTimeout(() => {
      setShowContact(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (loginTimeoutRef.current) {
        clearTimeout(loginTimeoutRef.current);
      }
      if (contactTimeoutRef.current) {
        clearTimeout(contactTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full select-none">
      {/* Top Nav */}
      <div className="bg-[#161718] flex py-3 md:py-0 justify-between items-center border-t-0 md:border-t-2 md:border-amber-300 px-4 xl:px-[230px]">
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
              <span className="hover:text-amber-300 duration-400 text-sm cursor-pointer">
                SIGN IN
              </span>
              {showLogin && <Login />}
            </div>
            |
            <Link
              to="/register"
              className="hover:text-amber-300 duration-400 text-sm cursor-pointer"
            >
              REGISTER
            </Link>
          </div>

          {/* Cart Icon */}
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors" />
            <span
              className={`absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full transition-colors ${
                cartCount > 0
                  ? "bg-amber-500 group-hover:bg-amber-300 group-hover:text-amber-300"
                  : "bg-gray-500"
              }`}
            >
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Nav */}
      <section className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className="flex items-center justify-evenly bg-black text-yellow-300 py-3">
          <Link to="/" className="flex flex-col items-center font-bold">
            <House className="w-7 h-7" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/login" className="flex flex-col items-center font-bold">
            <User className="w-7 h-7" />
            <span className="text-xs">Account</span>
          </Link>
          <div 
          className="flex flex-col items-center font-bold relative"
          onMouseEnter={handleContactMouseEnter}
          onMouseLeave={handleContactMouseLeave}
          >
            <MapPin className="w-7 h-7" />
            <span className="text-xs">Contact</span>
            {showContact && <Contact />}
          </div>
          <Link to="/more" className="flex flex-col items-center font-bold">
            <Ellipsis className="w-7 h-7" />
            <span className="text-xs">More</span>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Nav