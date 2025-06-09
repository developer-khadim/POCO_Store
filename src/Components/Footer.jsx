// import { ArrowRight, Facebook, Instagram } from "lucide-react";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-black py-16">
//       <div className="w-full ">
//         <div className="bg-gray-800 w-full flex justify-center rounded-lg p-8">
//           <div className="flex flex-col lg:flex-row w-7xl justify-between items-start lg:items-center gap-8">
//             {/* Newsletter Section */}
//             <div className="flex-1">
//               <h1 className="text-white text-2xl font-bold mb-2">
//                 LET'S STAY IN TOUCH
//               </h1>
//               <p className="text-gray-300 mb-6">
//                 Get updates on sales, specials and more
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-3 max-w-md">
//                 <input 
//                   type="email" 
//                   placeholder="Enter Email Address" 
//                   className="flex-1 px-4 py-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 />
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
//                   <ArrowRight size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Social Media Section */}
//             <div className="flex-1 lg:text-right">
//               <h1 className="text-white text-2xl font-bold mb-2">
//                 FOLLOW POCO
//               </h1>
//               <p className="text-gray-300 mb-6">
//                 We want to hear from you!
//               </p>
              
//               <div className="flex gap-4 lg:justify-end">
//                 <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200">
//                   <Facebook size={24} color="white" />
//                 </button>
//                 <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200">
//                   <Instagram size={24} color="white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { ArrowRight, Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container max-w-[1380px] mx-auto flex justify-between items-center ">
        <div className="space-y-2">
          <h1 className="text-lg font-bold">LET'S STAY IN TOUCH</h1>
          <p className="text-gray-400 text-sm">Get updates on sales specials and more</p>
          <div className="flex items-center ">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 bg-gray-800 border border-yellow-500 text-white rounded-l-md focus:outline-none"
            />
            <button className="p-[9px] bg-yellow-500 rounded-r-md">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="space-y-2 text-right">
          <h1 className="text-lg font-bold">FOLLOW POCO</h1>
          <p className="text-gray-400 text-sm">We want to hear from you!</p>
          <div className="flex justify-end space-x-4">
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;