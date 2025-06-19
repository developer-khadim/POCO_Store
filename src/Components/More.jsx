import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const NAV_HEIGHT = 120; 

const More = () => {
  return (
    <div className="fixed top-14 left-0 w-full h-[calc(100vh-120px)] z-30 flex flex-col items-center justify-center bg-white bg-opacity-50">
      <div className="flex flex-col items-center text-sm font-bold text-black w-full max-w-xs mx-auto">
        <Link 
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/product"
        >
          POCO F7 PRO ULTRA
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-f7-pro"
        >
          POCO F7 PRO
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-f7-pro-5g"
        >
          POCO F7 PRO 5G
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-c75"
        >
          POCO C75
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-m6-pro"
        >
          POCO M6 PRO
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-f6-pro"
        >
          POCO F6 PRO
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-f6"
        >
          POCO F6
        </Link>
        <Link
          className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
          to="/poco-x6-pro-5g"
        >
          POCO X6 PRO 5G
        </Link>
      </div>
      <hr className="my-6 w-11/12 border-gray-300" />
      <div className="flex gap-8 justify-center mb-8">
        <Facebook className="w-5 h-5 text-black hover:text-white cursor-pointer" />
        <Instagram className="w-5 h-5 text-black hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default More;