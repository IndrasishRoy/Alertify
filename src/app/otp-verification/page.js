<<<<<<< HEAD
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    // Generate a 6-digit OTP
    const generateOtp = () => {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      alert(`Your OTP is: ${otp}`);
      setGeneratedOtp(otp);
      
      // Simulating sending OTP to the email
      const email = localStorage.getItem("email"); // Get the email from localStorage
      console.log(`Sending OTP ${otp} to ${email}`); // Replace this with your email sending logic
    };
    
    generateOtp();
  }, []);

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      // OTP is correct, redirect to home
      router.push("/home");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">OTP Verification</h2>
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            placeholder="Enter your 6-digit OTP"
            className="w-full p-3 border border-gray-300 rounded-full mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-full font-semibold"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

=======
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    // Generate a 6-digit OTP
    const generateOtp = () => {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      alert(`Your OTP is: ${otp}`);
      setGeneratedOtp(otp);
      
      // Simulating sending OTP to the email
      const email = localStorage.getItem("email"); // Get the email from localStorage
      console.log(`Sending OTP ${otp} to ${email}`); // Replace this with your email sending logic
    };
    
    generateOtp();
  }, []);

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      // OTP is correct, redirect to home
      router.push("/home");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">OTP Verification</h2>
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            placeholder="Enter your 6-digit OTP"
            className="w-full p-3 border border-gray-300 rounded-full mb-4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-full font-semibold"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

>>>>>>> ae0f5209876ac3b090ee5a5da48891123d83dce4
export default OtpVerification;