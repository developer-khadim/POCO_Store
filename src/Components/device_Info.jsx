// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from "lucide-react";
// import pocof7 from "../assets/Products/POCO_F7.webp";
// import { Products_Data } from "../Data/Products_Data";

// const DeviceInfo = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedColor, setSelectedColor] = useState("Black");

//   // Product images
//   const productImages = [
//     {
//       id: 1,
//       src: pocof7,
//       alt: "POCO F7 Ultra Front View",
//     },
    
//   ];

//   const colors = [{ name: "Black", value: "bg-black" }];

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % productImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImage(
//       (prev) => (prev - 1 + productImages.length) % productImages.length
//     );
//   };

//   const goToImage = (index) => {
//     setCurrentImage(index);
//   };

//   const incrementQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   // Key Features data
//   const keyFeatures = [
//     { label: "Display", value: '6.67" 2K 120Hz Flow AMOLED display' },
//     { label: "Resolution", value: "3200*1440, 526 ppi" },
//     { label: "Contrast", value: "5,000,000:1 ratio" },
//     { label: "Refresh rate", value: "Up to 120Hz" },
//     {
//       label: "Brightness",
//       value: "1800 nits (HBM), 3200 nits (peak brightness)",
//     },
//     { label: "Touch rate", value: "Up to 480Hz sampling rate" },
//     {
//       label: "Processor",
//       value:
//         "Snapdragon® 8 Elite Mobile Platform, 3nm manufacturing process, Octa-core CPU with Oryon architecture",
//     },
//     {
//       label: "Rear camera",
//       value: '50MP main camera - Light Fusion 800 image sensor, 1/1.55"',
//     },
//     { label: "Front Camera", value: "32MP front camera" },
//     {
//       label: "Battery",
//       value:
//         "5300mAh (typ) battery | 120W HyperCharge | 50W wireless HyperCharge",
//     },
//   ];

//   // General Features data
//   const generalFeatures = [
//     { label: "Dimensions", value: "160.26 x 74.95 x 8.39mm" },
//     { label: "Weight", value: "212g" },
//     {
//       label: "Connectivity",
//       value:
//         "Dual SIM (nano SIM + nano SIM), Supports 5G/4G/3G/2G, Powered by Xiaomi HyperOS 2, IP68 dust and water resistance, Supports NFC, IR blaster, Dual-frequency GPS, Ultrasonic in-display fingerprint sensor, Stereo Dual Speaker",
//     },
//   ];

//   return (
//     <div className="w-full" >
//     <section className=" container max-w-[1460px] mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//         {/* Image section */}
//         <div className="lg:sticky lg:top-4 h-fit">
//           <div className="relative overflow-hidden ">
//             {/* Main Image Display */}
//             <div className="relative h-96 md:h-[480px] flex items-center justify-center">
//               <img
//                 src={productImages[currentImage].src}
//                 alt={productImages[currentImage].alt}
//                 className="max-w-full max-h-full object-contain transition-all duration-300 ease-in-out"
//               />

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevImage}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-yellow-300 text-gray-700 px-2 py-5  transition-all duration-200 hover:scale-110 z-10"
//               >
//                 <ChevronLeft size={20} color="white" />
//               </button>

//               <button
//                 onClick={nextImage}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-black/30 hover:bg-yellow-300 text-gray-700 px-2 py-5  transition-all duration-200 hover:scale-110 z-10"
//               >
//                 <ChevronRight size={20} color="white" />
//               </button>
//             </div>

//             {/* Thumbnail Navigation */}
//             <div className="bg-white ">
//               <div className="flex justify-left space-x-3">
//                 {productImages.map((image, index) => (
//                   <button
//                     key={image.id}
//                     onClick={() => goToImage(index)}
//                     className={`w-24 h-32 overflow-hidden border transition-all duration-200 ${
//                       currentImage === index
//                         ? "border-black "
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                   >
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className="w-full h-28 object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Info section */}
//         <div className=" space-x-60">
//           <h1 className="text-2xl font-bold text-gray-800 mb-3">
//             POCO F7 Ultra (16GB - 512GB)
//           </h1>
//           <p className="text-sm font-bold text-black mb-6">Rs.259,999.00</p>

//           {/* /* Color Selection */}
//           <div className="mb-6">
//             <div className="flex items-center gap-4 mb-3">
//               <span className="font-medium text-black">Color:</span>
//               <span className="text-gray-500">{selectedColor}</span>
//             </div>
//             <div className="flex gap-3">
//               {colors.map((color) => (
//                 <button
//                   key={color.name}
//                   onClick={() => setSelectedColor(color.name)}
//                   className={`w-12 h-12 transition-all duration-200 ${
//                     color.value
//                   } ${
//                     selectedColor === color.name
//                       ? "scale-110"
//                       : "opacity-75 hover:opacity-100"
//                   }`}
//                   title={color.name}
//                 />
//               ))}
//             </div>

//             {/* Quantity */}
//             <div className="mb-6">
//               <span className="font-medium text-black block mb-2 mt-5">
//                 Quantity:
//               </span>
//               <div className="flex items-center border border-gray-300 w-[94px]">
//                 <button
//                   onClick={decrementQuantity}
//                   className="p-2 hover:bg-gray-100 text-sm transition-colors duration-200"
//                 >
//                   <Minus size={10} />
//                 </button>
//                 <span className="px-4 py-2 min-w-[40px] text-center font-medium">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={incrementQuantity}
//                   className="p-2 hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <Plus size={10} />
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-2">
//               <button 
//                 onClick={() => {
//                   // Add to cart logic here
//                   const cartCount = parseInt(localStorage.getItem('cartCount') || '0');
//                   localStorage.setItem('cartCount', (cartCount + 1).toString());
//                   window.dispatchEvent(new Event('storage'));
//                 }}
//                 className="w-full bg-black text-white py-4 px-5 font-bold text-sm cursor-pointer hover:bg-amber-300 transition-all duration-200"
//               >
//                 ADD TO CART
//               </button>
//               <div className="flex gap-4">
//                 <button className="flex-1 border-2 border-black text-black py-3 px-6 text-sm font-medium hover:text-amber-300 transition-colors duration-200 cursor-pointer">
//                   UNAVAILABLE
//                 </button>
//                 <button className="flex-1 border-2 border-black text-black py-3 px-6 text-sm font-medium hover:text-amber-300 transition-colors duration-200 cursor-pointer">
//                   ADD TO WISHLIST
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Description */}

//           <h2 className="text-sm text-gray-600 mb-4">DESCRIPTION</h2>

//           {/* Key Features */}
//           <div className="mb-8">
//             <h3 className="text-2xl font-bold text-black mb-2">
//               Key Features:
//             </h3>
//               <p className="text-red-600 text-sm w-[32vw] mb-4">
//                 <span className="font-bold">For COD Orders:</span> Due to
//                 Courier restrictions, any Amount Exceeding PKR 100,000 Must be
//                 Paid in Advance
//               </p>
       

//             <div className=" text-gray-700 w-[32vw]">
//               {keyFeatures.map((feature, index) => (
//                 <div key={index} className="flex flex-wrap">
//                   <span className="font-bold text-black text-sm ">
//                     {feature.label}: <span className="font-normal">{feature.value}</span>
//                   </span>
                  
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* General Features */}
//           <div className="" >
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               General Features:
//             </h3>
//             <div className=" text-gray-700 w-[32vw] ">
//               {generalFeatures.map((feature, index) => (
//                 <div key={index} className="flex  flex-wrap ">
//                   <span className="font-semibold text-black">
//                     {feature.label}: <span className="font-normal" >{feature.value}</span>
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default DeviceInfo;


import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from "lucide-react";
import pocof7 from "../assets/Products/POCO_F7.webp";
import { Products_Data } from "../Data/Products_Data";

const DeviceInfo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");

  // Product images
  const productImages = [
    {
      id: 1,
      src: pocof7,
      alt: "POCO F7 Ultra Front View",
    },
  ];

  const colors = [{ name: "Black", value: "bg-black" }];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Key Features data
  const keyFeatures = [
    { label: "Display", value: '6.67" 2K 120Hz Flow AMOLED display' },
    { label: "Resolution", value: "3200*1440, 526 ppi" },
    { label: "Contrast", value: "5,000,000:1 ratio" },
    { label: "Refresh rate", value: "Up to 120Hz" },
    {
      label: "Brightness",
      value: "1800 nits (HBM), 3200 nits (peak brightness)",
    },
    { label: "Touch rate", value: "Up to 480Hz sampling rate" },
    {
      label: "Processor",
      value:
        "Snapdragon® 8 Elite Mobile Platform, 3nm manufacturing process, Octa-core CPU with Oryon architecture",
    },
    {
      label: "Rear camera",
      value: '50MP main camera - Light Fusion 800 image sensor, 1/1.55"',
    },
    { label: "Front Camera", value: "32MP front camera" },
    {
      label: "Battery",
      value:
        "5300mAh (typ) battery | 120W HyperCharge | 50W wireless HyperCharge",
    },
  ];

  // General Features data
  const generalFeatures = [
    { label: "Dimensions", value: "160.26 x 74.95 x 8.39mm" },
    { label: "Weight", value: "212g" },
    {
      label: "Connectivity",
      value:
        "Dual SIM (nano SIM + nano SIM), Supports 5G/4G/3G/2G, Powered by Xiaomi HyperOS 2, IP68 dust and water resistance, Supports NFC, IR blaster, Dual-frequency GPS, Ultrasonic in-display fingerprint sensor, Stereo Dual Speaker",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <section className="container max-w-[1440px] mx-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Image section */}
          <div className="h-fit">
            <div className="relative overflow-hidden">
              {/* Main Image Display */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[480px] flex items-center justify-center bg-white">
                <img
                  src={productImages[currentImage].src}
                  alt={productImages[currentImage].alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300 ease-in-out"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-yellow-300 text-gray-700 px-1.5 py-3 sm:px-2 sm:py-5 transition-all duration-200 hover:scale-110 z-10"
                >
                  <ChevronLeft size={16} color="white" className="sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-yellow-300 text-gray-700 px-1.5 py-3 sm:px-2 sm:py-5 transition-all duration-200 hover:scale-110 z-10"
                >
                  <ChevronRight size={16} color="white" className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="bg-white mt-4">
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  {productImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => goToImage(index)}
                      className={`w-20 h-24 sm:w-24 sm:h-32 overflow-hidden border transition-all duration-200 ${
                        currentImage === index
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-20 sm:h-28 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="space-y-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              POCO F7 Ultra (16GB - 512GB)
            </h1>
            <p className="text-sm sm:text-base font-bold text-black">Rs.259,999.00</p>

            {/* Color Selection */}
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <span className="font-medium text-black text-sm sm:text-base">Color:</span>
                <span className="text-gray-500 text-sm sm:text-base">{selectedColor}</span>
              </div>
              <div className="flex gap-2 sm:gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 transition-all duration-200 ${
                      color.value
                    } ${
                      selectedColor === color.name
                        ? "scale-110 "
                        : "opacity-75 hover:opacity-100"
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="font-medium text-black block mb-2 text-sm sm:text-base">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 w-24 sm:w-[94px]">
                <button
                  onClick={decrementQuantity}
                  className="p-2 hover:bg-gray-100 text-sm transition-colors duration-200"
                >
                  <Minus size={10} className="sm:w-4 sm:h-4" />
                </button>
                <span className="px-3 py-2 min-w-[40px] text-center font-medium text-sm sm:text-base">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Plus size={10} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  const cartCount = parseInt(localStorage.getItem('cartCount') || '0');
                  localStorage.setItem('cartCount', (cartCount + 1).toString());
                  window.dispatchEvent(new Event('storage'));
                }}
                className="w-full bg-black text-white py-3 sm:py-4 px-5 font-bold text-xs sm:text-sm cursor-pointer hover:bg-amber-300 transition-all duration-200"
              >
                ADD TO CART
              </button>
              <div className="flex  gap-2">
                <button className="flex-1 border-2 border-black text-black py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-medium hover:text-amber-300 transition-colors duration-200 cursor-pointer">
                  UNAVAILABLE
                </button>
                <button className="flex-1 border-2 border-black text-black py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-medium hover:text-amber-300 transition-colors duration-200 cursor-pointer">
                  ADD TO WISHLIST
                </button>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-gray-600 mb-4">DESCRIPTION</h2>

              {/* Key Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2">
                  Key Features:
                </h3>
                <p className="text-red-600 text-xs sm:text-sm mb-4">
                  <span className="font-bold">For COD Orders:</span> Due to
                  Courier restrictions, any Amount Exceeding PKR 100,000 Must be
                  Paid in Advance
                </p>
                <div className="text-gray-700 text-xs sm:text-sm space-y-1">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-wrap">
                      <span className="font-bold text-black">
                        {feature.label}:{" "}
                        <span className="font-normal">{feature.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Features */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                  General Features:
                </h3>
                <div className="text-gray-700 text-xs sm:text-sm space-y-1">
                  {generalFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-wrap">
                      <span className="font-semibold text-black">
                        {feature.label}:{" "}
                        <span className="font-normal">{feature.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeviceInfo;