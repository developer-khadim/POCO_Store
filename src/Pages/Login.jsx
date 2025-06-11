    import React from 'react';

const Login = () => {
  return (
    <div className=" select-none absolute top-6 -right-24 z-50 min-w-[400px]">
      <div className="bg-white shadow-xl w-full p-4 transform transition-all">
        <form className="space-y-6">
          <div>
            <input 
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
            />
          </div>
          <div>
            <input 
              type="password"
              placeholder="Password"
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
          <div className=" flex">
            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white font-medium py-3  px-6  hover:bg-gray-800 transition-colors"
            >
              SIGN IN
            </button>
            <button 
              type="button" 
              className="w-full bg-transparent underline text-gray-900 font-medium py-2 px-4  hover:bg-gray-50 transition-colors"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;