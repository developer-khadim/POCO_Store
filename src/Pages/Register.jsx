import React from "react";

const Register = () => {
  return (
    <div className="w-full select-none h-[60vh] flex justify-center py-10 ">
      <div className="w-[33%] px-10 flex items-center flex-col ">
        <h1 className="uppercase text-3xl font-semibold py-2">Register</h1>
        <p className="text-center py-4 " >
          Create a new account. Once you‘ve set it up, you can take advantage of
          many benefits of membership.
        </p>
        <form className="w-full mt-6 space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300  focus:outline-none focus:border-amber-300 text-gray-900"
          />
          <input 
          type="text" 
          placeholder="Last Name" 
           className="w-full px-3 py-2 bg-gray-50 border border-gray-300  focus:outline-none focus:border-amber-300 text-gray-900"
         />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300  focus:outline-none focus:border-amber-300 text-gray-900"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300  focus:outline-none focus:border-amber-300 text-gray-900"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-medium py-3 px-6 mt-8 hover:bg-gray-800 transition-colors"
          >
            CREATE
          </button>
          </form>
      </div>
    </div>
  );
};

export default Register;
