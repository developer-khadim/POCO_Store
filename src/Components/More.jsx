// import React from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram } from "lucide-react";

// const NAV_HEIGHT = 120; 

// const More = () => {
//   return (
//     <div className="fixed top-14 left-0 w-full h-[calc(100vh-120px)] z-30 flex flex-col items-center justify-center bg-white bg-opacity-50">
//       <div className="flex flex-col items-center text-sm font-bold text-black w-full max-w-xs mx-auto">
//         <Link 
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/product"
//         >
//           POCO F7 PRO ULTRA
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-f7-pro"
//         >
//           POCO F7 PRO
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-f7-pro-5g"
//         >
//           POCO F7 PRO 5G
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-c75"
//         >
//           POCO C75
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-m6-pro"
//         >
//           POCO M6 PRO
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-f6-pro"
//         >
//           POCO F6 PRO
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-f6"
//         >
//           POCO F6
//         </Link>
//         <Link
//           className="font-bold hover:text-white transition duration-200 cursor-pointer py-3 text-center w-full"
//           to="/poco-x6-pro-5g"
//         >
//           POCO X6 PRO 5G
//         </Link>
//       </div>
//       <hr className="my-6 w-11/12 border-gray-300" />
//       <div className="flex gap-8 justify-center mb-8">
//         <Facebook className="w-5 h-5 text-black hover:text-white cursor-pointer" />
//         <Instagram className="w-5 h-5 text-black hover:text-white cursor-pointer" />
//       </div>

//        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
//         <span className="text-xs text-gray-400">
//           © Cloned by <span className="text-yellow-400 font-medium">Khadim Ali</span>
//         </span>

//         <div className="flex gap-4">
//           <a
//             href="https://khadimali-devx1.vercel.app/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Portfolio"
//           >
//             <Globe className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/khadim-ali12/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <Linkedin className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
//           </a>
//           <a
//             href="https://github.com/developer-khadim"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             <Github className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default More;

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Globe, Linkedin, Github } from "lucide-react";

const NAV_HEIGHT = 120;

const More = () => {
  return (
    <div className="fixed top-14 left-0 w-full h-[calc(100vh-120px)] z-30 flex flex-col items-center justify-center bg-white bg-opacity-50 px-4">
      {/* Navigation Links */}
      <div className="flex flex-col items-center text-sm font-semibold text-black w-full max-w-xs mx-auto">
        {[
          { label: "POCO F7 PRO ULTRA", path: "/product" },
          { label: "POCO F7 PRO", path: "/poco-f7-pro" },
          { label: "POCO F7 PRO 5G", path: "/poco-f7-pro-5g" },
          { label: "POCO C75", path: "/poco-c75" },
          { label: "POCO M6 PRO", path: "/poco-m6-pro" },
          { label: "POCO F6 PRO", path: "/poco-f6-pro" },
          { label: "POCO F6", path: "/poco-f6" },
          { label: "POCO X6 PRO 5G", path: "/poco-x6-pro-5g" },
        ].map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className="py-3 w-full text-center hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-6 w-11/12 border-gray-300" />

      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center mb-6">
        <a href="#" aria-label="Facebook">
          <Facebook className="w-5 h-5 text-black hover:text-white transition-colors cursor-pointer" />
        </a>
        <a href="#" aria-label="Instagram">
          <Instagram className="w-5 h-5 text-black hover:text-white transition-colors cursor-pointer" />
        </a>
      </div>

      {/* Footer Credits */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center w-full max-w-xl">
        <span className="text-xs text-gray-500">
          © Cloned by{" "}
          <span className="text-yellow-400 font-medium">Khadim Ali</span>
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
    </div>
  );
};

export default More;
