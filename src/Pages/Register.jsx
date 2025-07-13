import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_ENDPOINTS } from "../API/APIEndPoints";
import { toast } from "react-toastify";

const Register = () => { 
  const [formData, setFormData] = useState({ 
    first_name: "", 
    last_name: "", 
    email: "", 
    password: "", 
  }); 
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 
  const handleChange = (e) => { 
    setFormData((prev) => ({ 
      ...prev, 
      [e.target.name]: e.target.value, 
    })); 
    
    // Clear specific field error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ""
      }));
    }
  }; 

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }
    
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill in all fields correctly");
      return;
    }
    
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch(AUTH_ENDPOINTS.register, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const responseData = await res.json();

      if (res.ok) {
        toast.success("Account created successfully! Please login.");
        
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
       setTimeout(() => {
          navigate("/login");
        }, 1500); 
        
      } else {
        // Handle different error statuses
        if (res.status === 400) {
          if (responseData.message && responseData.message.includes('email')) {
            setErrors({ email: responseData.message });
            toast.error("Email validation failed");
          } else if (responseData.message && responseData.message.includes('password')) {
            setErrors({ password: responseData.message });
            toast.error("Password validation failed");
          } else {
            toast.error(responseData.message || "Please check your input and try again");
          }
        } else if (res.status === 409) {
          setErrors({ email: "This email is already registered" });
          toast.error("This email is already registered");
        } else if (res.status === 500) {
          toast.error("Server error. Please try again later");
        } else {
          toast.error(responseData.message || "Registration failed");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        toast.error("Network error: Unable to connect to server. Please check if the server is running.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
 
  return ( 
    <div className="w-full select-none min-h-[60vh] flex justify-center py-10 px-4"> 
      <div className="w-full md:w-[80%] lg:w-[50%] xl:w-[33%] px-4 md:px-10 flex items-center flex-col"> 
        <h1 className="uppercase text-2xl md:text-3xl font-semibold py-2"> 
          Register 
        </h1> 
        <p className="text-center text-sm md:text-base py-4"> 
          Create a new account. Once you've set it up, you can take advantage of 
          many benefits of membership. 
        </p> 
 
        <form onSubmit={handleSubmit} className="w-full mt-6 space-y-4"> 
          <div>
            <input 
              type="text" 
              name="first_name" 
              placeholder="First Name" 
              value={formData.first_name} 
              onChange={handleChange} 
              disabled={loading}
              className={`w-full px-3 py-2 bg-gray-50 border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-amber-300 text-gray-900 text-sm md:text-base disabled:opacity-50`}
            /> 
            {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
          </div>
          
          <div>
            <input 
              type="text" 
              name="last_name" 
              placeholder="Last Name" 
              value={formData.last_name} 
              onChange={handleChange} 
              disabled={loading}
              className={`w-full px-3 py-2 bg-gray-50 border ${errors.last_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-amber-300 text-gray-900 text-sm md:text-base disabled:opacity-50`}
            /> 
            {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
          </div>
          
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              disabled={loading}
              className={`w-full px-3 py-2 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-amber-300 text-gray-900 text-sm md:text-base disabled:opacity-50`}
            /> 
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              disabled={loading}
              className={`w-full px-3 py-2 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-amber-300 text-gray-900 text-sm md:text-base disabled:opacity-50`}
            /> 
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white font-medium py-2.5 md:py-3 px-6 mt-5 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm md:text-base" 
          > 
            {loading ? "CREATING..." : "CREATE"}
          </button> 
        </form>
      </div> 
    </div> 
  ); 
}; 

export default Register;