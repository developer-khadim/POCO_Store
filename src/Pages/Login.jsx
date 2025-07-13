import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// API endpoint
import { AUTH_ENDPOINTS } from "../API/APIEndPoints";

// RTK
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log("User Data from Redux:", user.first_name);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(AUTH_ENDPOINTS.login, {
        email,
        password,
      });

      const data = res.data;
      const status = res.status; 

      if (status === 200 || status === 201) {
        toast.success("Login successful");
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch(setUser(data.user));
        navigate("/");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const errorData = error.response.data;
        
        if (status === 400 || status === 401) {
          toast.error(errorData.message || errorData.error || "Invalid credentials");
        } else if (status === 404) {
          toast.error("User not found");
        } else {
          toast.error(errorData.message || "Login failed");
        }
      } else if (error.request) {
        // Network error
        toast.error("Network error. Please check your connection.");
      } else {
        // Other errors
        toast.error("An error occurred. Please try again.");
      }
      
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Desktop Login Form */}
      <div className="select-none absolute top-6 -right-24 z-50 min-w-[400px] md:block hidden">
        <div className="bg-white shadow-xl w-full p-4 transform transition-all">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
                disabled={loading}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-amber-300 text-gray-900"
                disabled={loading}
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
                type="submit"
                className="w-full bg-gray-900 text-white font-medium py-3 px-6 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Signing in..." : "SIGN IN"}
              </button>
              <Link
                to="/register"
                className="w-full text-center bg-transparent underline text-gray-900 font-medium py-2 px-4 hover:bg-gray-50 transition-colors"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Login Form */}
      <div className="md:hidden block w-full max-w-md mx-auto px-4 py-4">
        <div className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">SIGN IN</h1>
            <p className="text-gray-600 text-sm">
              Sign in below using your POCO.pk information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-900 text-sm placeholder-gray-500"
                disabled={loading}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-900 text-sm placeholder-gray-500"
                disabled={loading}
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-amber-500 transition-colors"
              >
                Forgot your password?
              </button>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-medium py-3 px-6 hover:bg-gray-800 transition-colors duration-200 text-sm uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "SIGNING IN..." : "SIGN IN"}
              </button>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-gray-900 uppercase tracking-wide">
              NOT A MEMBER? BECOME A MEMBER TODAY
            </p>
            <Link
              to="/register"
              className="font-medium underline hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide"
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