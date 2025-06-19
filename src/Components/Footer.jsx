import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  Instagram,
  User,
  MapPin,
  Ellipsis,
  Phone,
  Mail,
  House,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

//Mobile Footer Component
const MobileFooter = () => {
  return (
    <footer className="w-full px-6 py-6 h-[270px] bg-black text-white">
      {/* Top: Follow Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-lg tracking-wide">FOLLOW POCO</h1>
          <p className="text-sm text-gray-400">We want to hear from you!</p>
        </div>

        <div className="flex gap-4">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-700" />

      {/* Bottom: Credits & Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-gray-400">
          © Cloned by <span className="text-yellow-400 font-medium">Khadim Ali</span>
        </span>

        <div className="flex gap-4">
          <a
            href="https://khadimali-devx1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <Globe className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/khadim-ali12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://github.com/developer-khadim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Hook to detect mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Check screen width (you can adjust the breakpoint as needed)
      const screenWidth = window.innerWidth <= 768;

      // Check user agent for mobile devices
      const userAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      setIsMobile(screenWidth || userAgent);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
};

const DesktopFooter = () => {
  return (
    <footer>
      {/* Upper Footer */}
      <section className="w-full py-6 md:py-8 lg:h-[100px] flex items-center justify-center bg-[#161718] text-white">
        <div className="container max-w-[1460px] mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          {/* Newsletter Section */}
          <div className="w-full lg:w-auto order-2 lg:order-1 md:block hidden">
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="text-center w-[500px] md:text-left">
                <h1 className="text-lg md:text-xl font-bold text-white mb-1">
                  LET'S STAY IN TOUCH
                </h1>
                <span className="text-xs md:text-sm text-gray-400">
                  Get updates on sales specials and more
                </span>
              </div>
              <div className="flex items-center w-full max-w-sm md:max-w-none">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="py-2 md:py-[10px] px-3 md:px-4 w-full md:w-[200px] lg:w-[12vw] bg-black border border-yellow-400 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="p-2 md:p-[11px] bg-yellow-400 hover:bg-yellow-500 transition-colors">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="w-full lg:w-auto order-1 lg:order-2 pr-10">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center lg:text-right">
                <h1 className="text-lg md:text-xl font-bold mb-1">
                  FOLLOW POCO
                </h1>
                <p className="text-gray-400 text-xs md:text-sm">
                  We want to hear from you!
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <Facebook className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
                <Instagram className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="w-full bg-black text-white ">
        {/* Main Footer Content */}
        <div className="container max-w-[1460px] mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6 lg:gap-8 xl:gap-12">
            {/* Latest Phones */}
            <div className="space-y-4 sm:col-span-1 lg:col-span-2 xl:col-span-2">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-3 md:mb-4 lg:mb-6">
                LATEST PHONES
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO X7 PRO 5G
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO PAD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO F6
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO F6 PRO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO X6 PRO 5G
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO M6 PRO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO C65
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO X5 PRO 5G
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-3 md:mb-4 lg:mb-6">
                SUPPORT
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    CONTACT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    WARRANTY
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-3 md:mb-4 lg:mb-6">
                ABOUT US
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    TERMS & CONDITIONS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    REFUND & RETURN POLICY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    POCO BLOG
                  </a>
                </li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div className="space-y-4">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-3 md:mb-4 lg:mb-6">
                LET US HELP YOU
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    PRODUCT AUTHENTICATION
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors text-xs md:text-sm block"
                  >
                    FAQS
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Poco */}
            <div className="space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-2">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-3 md:mb-4 lg:mb-6">
                FOLLOW POCO
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-xs md:text-sm text-gray-400">
                    <p className="font-medium text-white mb-1">
                      Head Office: Smartlink Technologies
                    </p>
                    <p>Address: 2-K, Commercial Area, Block K,</p>
                    <p>Model Town, Lahore</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a
                    href="tel:03-111-111-050"
                    className="text-xs md:text-sm text-gray-400 hover:text-amber-300 transition-colors"
                  >
                    03-111-111-050
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a
                    href="mailto:info@poco.pk"
                    className="text-xs md:text-sm text-gray-400 hover:text-amber-300 transition-colors break-all"
                  >
                    info@poco.pk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="border-gray-800" />
        <div className="container max-w-[1460px] mx-auto px-4 py-4 md:py-6 lg:py-8  ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-400">
              Copyright © 2010 - 2025 Xiaomi. All Rights Reserved
            </p>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-xs md:text-sm text-gray-400 mb-1">
                Cloned By Khadim Ali
              </span>
              <div className="flex gap-3 mt-1">
                <a
                  href="https://khadimali-devx1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio"
                >
                  <Globe className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khadim-ali12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
                </a>
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

const Footer = () => {
  const isMobile = useIsMobile();

  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
};

export default Footer;
