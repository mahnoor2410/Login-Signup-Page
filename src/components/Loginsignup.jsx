import React, { useState } from 'react';
import { motion } from "framer-motion"
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  // State to toggle between Login and Sign Up
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div 
    initial={{opacity:0 ,y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1,y:0}}
    viewport={{once: true}}

    className="flex min-h-screen">
      {/* Left Side - Image Section */}
      <div className={`w-1/2 relative transition-all duration-500 ${isLogin ? 'order-first' : 'order-last'}`}>
        <img src="backImgLogin.webp" alt="Background" className="object-cover w-full h-full"/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg">You’re just one click away from a world of amazing experiences.</p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className={`w-1/2 flex flex-col justify-center items-center bg-gray-900 text-white p-10 transition-all duration-500 ${isLogin ? 'order-last' : 'order-first'}`}>
        <h2 className="text-4xl font-bold mb-6">{isLogin ? 'Login' : 'Register Here!'}</h2>

        {/* Social Media Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"><AiOutlineGoogle/></button>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"><FaLinkedin/></button>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"><FaFacebook/></button>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"><FaTwitter/></button>
        </div>
        <p className="mb-4">or use your email account</p>

        {/* Login / Sign Up Form */}
        <form className="w-full max-w-sm mb-6">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none"/>
          )}

          <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none"/>
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none"/>
         
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-4 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none"/>
          )}
        </form>

        {/* Toggle Buttons Below the Form */}
        <div className="flex w-full max-w-sm space-x-4">
          <button onClick={() => setIsLogin(true)} 
          className={`w-1/2 p-3 rounded ${isLogin ? 'bg-teal-500 text-gray-900' : 'bg-gray-800 hover:bg-gray-700'}`}>Login</button>
          <button onClick={() => setIsLogin(false)}
          className={`w-1/2 p-3 rounded ${!isLogin ? 'bg-teal-500 text-gray-900' : 'bg-gray-800 hover:bg-gray-700'}`}>Sign Up</button>
        </div>
      </div>
      
    </motion.div>
  );
};

export default LoginPage;
