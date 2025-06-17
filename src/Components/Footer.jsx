import React from "react";
import { Link } from "react-router-dom"; 
import { ArrowRight, Facebook, Instagram, User, MapPin, Ellipsis, Phone, Mail, House } from "lucide-react";

const Footer = () => {
  return (
   <footer>
    {/* Upper Footer */}
     <section className="w-full py-8 md:h-[100px] flex items-center justify-center bg-[#161718] text-white">
      <div className="container max-w-[1460px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 md:flex flex-col hidden md:flex-row items-center justify-center w-full md:w-auto">
            <span className="text-[12px] text-gray-400 pr-20 text-center" >
            <h1 className="text-xl md:text-xl font-bold text-white ">LET'S STAY IN TOUCH</h1>
            Get updates on sales specials and more
            </span>
          <div className="flex items-center ">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="py-[10px]  px-4 w-full md:w-[12vw] bg-black border border-yellow-400 text-white focus:outline-none"
            />
            <button className="p-[11px] bg-yellow-400">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="space-y-2 w-full md:w-auto flex gap-10 items-center justify-center md:gap-28">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-xl font-bold">FOLLOW POCO</h1>
            <p className="text-gray-400 text-[12px] ">We want to hear from you!</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </section>
    
    {/* Bottom Footer */}
    <section className="w-full bg-black hidden sm:block text-white">
      {/* Main Footer Content */}
      <div className="container max-w-[1460px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 lg:gap-12">
          
          {/* Latest Phones */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">LATEST PHONES</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO X7 PRO 5G</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO PAD</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO F6</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO F6 PRO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO X6 PRO 5G</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO M6 PRO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO C65</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO X5 PRO 5G</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">SUPPORT</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">CONTACT US</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">WARRANTY</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">ABOUT US</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">TERMS & CONDITIONS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">REFUND & RETURN POLICY</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">PRIVACY POLICY</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">POCO BLOG</a></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">LET US HELP YOU</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">PRODUCT AUTHENTICATION</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">FAQS</a></li>
            </ul>
          </div>

          {/* Follow Poco */}
          <div className="space-y-4 col-span-2 sm:col-span-3 md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">FOLLOW POCO</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-xs md:text-sm text-gray-400">
                  <p className="font-medium text-white">Head Office: Smartlink Technologies</p>
                  <p>Address: 2-K, Commercial Area, Block K,</p>
                  <p>Model Town, Lahore</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:03-111-111-050" className="text-xs md:text-sm text-gray-400 hover:text-amber-300 transition-colors">
                  03-111-111-050
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@poco.pk" className="text-xs md:text-sm text-gray-400 hover:text-amber-300 transition-colors">
                  info@poco.pk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <hr className="border-gray-800" />
      <div className="container max-w-[1460px] mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
            Copyright © 2010 - 2025 Xiaomi. All Rights Reserved
          </p>
          <span className="text-xs md:text-sm text-gray-400 text-center md:text-right">
            Cloned By Developer-Khadim
          </span>
        </div>
      </div>
    </section>
    
    {/* Mobile Nav */}
    <section className="md:hidden block fixed bottom-0 left-0 w-full z-50 ">
       <div className="flex items-center justify-evenly bg-black text-yellow-300 py-3">
  <Link to="/" className="flex flex-col items-center font-bold">
    <House className="w-7 h-7" />
    <span className="text-xs">Home</span>
  </Link>
  <Link to="/register" className="flex flex-col items-center font-bold">
    <User className="w-7 h-7" />
    <span className="text-xs">Account</span>
  </Link>
  <Link to="/location" className="flex flex-col items-center font-bold">
    <MapPin className="w-7 h-7" />
    <span className="text-xs">Location</span>
  </Link>
  <Link to="/more" className="flex flex-col items-center font-bold">
    <Ellipsis className="w-7 h-7" />
    <span className="text-xs">More</span>
  </Link>
</div>
    </section>
   </footer>
  );
};

export default Footer;