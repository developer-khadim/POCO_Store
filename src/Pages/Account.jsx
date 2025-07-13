import React from "react";
import { useSelector } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AUTH_ENDPOINTS } from "../API/APIEndPoints";

const Account = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(AUTH_ENDPOINTS.LOGOUT, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch(logout()); // clear Redux
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="select-none absolute top-6 -right-24 z-50 min-w-[400px] hidden md:block">
        <div className="bg-white shadow-xl w-full p-4 transform transition-all">
          <div className="flex flex-col justify-items-start font-semibold  ">
            <Link to="/order-history" className=" text-gray-800 hover:text-yellow-300 curosr-pinter duration-100"> 
              Order History
            </Link>
            <Link to="/addresses" className=" text-gray-800 hover:text-yellow-300 curosr-pinter duration-100">
              Your Addresses
            </Link>
            <Link to="/wishlist" className=" text-gray-800 hover:text-yellow-300 curosr-pinter duration-100">
              Your Wishlist
            </Link>
            <button onClick={handleLogout}  className=" text-gray-800 hover:text-yellow-300 curosr-pinter duration-100">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <section className="md:hidden block w-full max-w-md mx-auto px-4 py-6 h-[62vh] flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold uppercase text-gray-900 mb-6 text-center ">
          WELCOME TO {`${user?.first_name} ${user?.last_name}`}
        </h1>
        <div className="flex flex-col gap-2 items-center py-6 rounded-md">
          <Link to="/order-history" className="text-gray-800 font-medium hover:underline">
            Order History
          </Link>
          <Link to="/addresses" className="text-gray-800 font-medium hover:underline">
            Your Addresses
          </Link>
          <Link to="/wishlist" className="text-gray-800 font-medium hover:underline">
            Your Wishlist
          </Link>
          <button  onClick={handleLogout} className="text-gray-800 font-medium hover:underline">
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default Account;
