// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login attempt:', { email, password });
//   };

//   return (
//     <>
//       {/* Desktop Login Form */}
//       <div className="select-none absolute top-6 -right-24 z-50 min-w-[400px] md:block hidden">
//         <div className="bg-white shadow-xl w-full p-4 transform transition-all">
//           <div className="space-y-6">
//             <div>
//               <input 
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
//               />
//             </div>
//             <div>
//               <input 
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
//               />
//             </div>
//             <div className="text-left">
//               <button 
//                 type="button" 
//                 className="text-sm text-black/60 hover:text-amber-500"
//               >
//                 Forgot your password?
//               </button>
//             </div>
//             <div className="flex">
//               <button 
//                 onClick={handleSubmit}
//                 className="w-full bg-gray-900 text-white font-medium py-3 px-6 hover:bg-gray-800 transition-colors"
//               >
//                 SIGN IN
//               </button>
//               <button 
//                 type="button" 
//                 className="w-full bg-transparent underline text-gray-900 font-medium py-2 px-4 hover:bg-gray-50 transition-colors"
//               >
//                 Create Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Login Form */}
//       <div className="md:hidden block w-full max-w-md mx-auto px-4 py-6">
//         <div className="p-6">
//           {/* Header */}
//           <div className="text-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">SIGN IN</h1>
//             <p className="text-gray-600 text-sm">Sign in below using your POCO.pk information.</p>
//           </div>

//           {/* Form */}
//           <div className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-900 text-sm placeholder-gray-500"
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-900 text-sm placeholder-gray-500"
//               />
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <button 
//                 type="button"
//                 className="text-sm text-gray-600 hover:text-amber-500 transition-colors underline"
//               >
//                 Forgot your password?
//               </button>
//             </div>

//             {/* Sign In Button */}
//             <div className="pt-2">
//               <button 
//                 onClick={handleSubmit}
//                 className="w-full bg-gray-900 text-white font-medium py-3 px-6 hover:bg-gray-800 transition-colors duration-200 text-sm uppercase tracking-wide"
//               >
//                 SIGN IN
//               </button>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">OR</span>
//             </div>
//           </div>

//           {/* Create Account Section */}
//           <div className="text-center space-y-3">
//             <p className="text-sm font-medium text-gray-900 uppercase tracking-wide">
//               NOT A MEMBER? BECOME A MEMBER TODAY
//             </p>
//             <Link
//               to="/register" 
//               type="button"
//               className="w-full bg-transparent font-medium underline hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide"
//             >
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <>
      {/* Desktop Login Form */}
      <div className="select-none absolute top-6 -right-24 z-50 min-w-[400px] md:block hidden">
        <div className="bg-white shadow-xl w-full p-4 transform transition-all">
          <div className="space-y-6">
            <div>
              <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
              />
            </div>
            <div>
              <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
              />
            </div>
            <div className="text-left">
              <button 
                type="button" 
                className="text-sm text-black/60 hover:text-amber-500"
              >
                Forgot your password?
              </button>
            </div>
            <div className="flex">
              <button 
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white font-medium py-3 px-6 hover:bg-gray-800 transition-colors"
              >
                SIGN IN
              </button>
              <button 
                type="button" 
                className="w-full bg-transparent underline text-gray-900 font-medium py-2 px-4 hover:bg-gray-50 transition-colors"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Login Form */}
      <div className="md:hidden block w-full max-w-md mx-auto px-4 py-4">
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">SIGN IN</h1>
            <p className="text-gray-600 text-sm">Sign in below using your POCO.pk information.</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-900 text-sm placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-900 text-sm placeholder-gray-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button 
                type="button"
                className="text-sm text-gray-600 hover:text-amber-500 transition-colors "
              >
                Forgot your password?
              </button>
            </div>

            {/* Sign In Button */}
            <div className="pt-2">
              <button 
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white font-medium py-3 px-6 hover:bg-gray-800 transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                SIGN IN
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Create Account Section */}
          <div className="text-center ">
            <p className="text-sm font-medium text-gray-900 uppercase tracking-wide">
              NOT A MEMBER? BECOME A MEMBER TODAY
            </p>
            <Link
              to="/register" 
              type="button"
              className="w-full bg-transparent font-medium underline hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;