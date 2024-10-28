"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import Cards from "../components/Cards";

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isDay, setIsDay] = useState(true);
  const router = useRouter();
  // Declare loginCreds outside of the if block
  let loginCreds = null;

  // Assign loginCreds only if in browser
  if (typeof window !== "undefined") {
    loginCreds = JSON.parse(localStorage.getItem("loginCreds")); // Retrieve login credentials from local storage
  }
  
  // Function to fetch user data from the API
  const fetchUserData = async (email, password) => {
    try {
      const response = await fetch("/data/users.json"); // Fetch users data

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await response.json(); // Parse JSON data
      console.log("Fetched users:", users); // Log fetched users

      // Find user matching the email and password
      const currentUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (currentUser) {
        // Exclude password from user data
        const { password, ...userWithoutPassword } = currentUser;
        setUserData(userWithoutPassword); // Store user data
      } else {
        console.error("User not found or incorrect password:", email);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Function to open the modal
  const openModal = (section) => {
    setActiveSection(section);
    if(typeof window !== "undefined"){
    if (section === "profile" && loginCreds?.email && loginCreds?.password) {
      fetchUserData(loginCreds.email, loginCreds.password); // Fetch user data based on login credentials
    }
  }
    if (section === "profile" && loginCreds?.email && loginCreds?.password) {
      fetchUserData(loginCreds.email, loginCreds.password); // Fetch user data based on login credentials
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveSection(null);
    setUserData(null); // Clear user data when closing the modal
  };

  // Function to handle logout
  const handleLogout = () => {
    if(typeof window !== "undefined"){
    localStorage.removeItem("loginCreds");
    localStorage.removeItem("loginCreds");
    }
    console.log("loginCreds removed");
    console.clear();
    router.push("/auth");
  };

  // Toggle between day and night modes
  const toggleDayNight = () => {
    setIsDay((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col px-4 md:px-16 lg:px-32 items-center min-h-screen ${
        isDay ? "bg-white" : "bg-black"
      }`}
    >
      {/* Header */}
      <header
        className={`w-full max-w-3xl mt-6 mx-4 p-6 flex justify-between items-center border ${
          isDay ? "bg-white border-red-500" : "bg-black border-red-500"
        } rounded-full shadow`}
      >
        <div className="flex items-center">
          <img src="/logo.png" alt="Alertify Logo" className="w-32 h-10" />
        </div>

        {/* Circle Button for Day/Night Toggle */}
        <button
          className={`w-10 h-10 rounded-full border-2 ${
            isDay ? "bg-white border-black" : "bg-black border-white"
          } flex justify-center items-center`}
          onClick={toggleDayNight}
        >
          {isDay ? <FaSun size={20} /> : <FaMoon size={20} color="white" />}
        </button>

        {/* Profile Icon */}
        <div
          className="bg-blue-500 w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer"
          onClick={() => openModal("profile")} // Open profile modal on click
        >
          <CgProfile color="white" size={30} />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        {/* Banner */}
        <div className="relative w-full mb-4">
          <img
            src="/Hero_Banner.png"
            alt="Alertify Banner"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
            <img src="/logo.png" alt="Alertify Logo" className="w-80 h-50" />
          </div>
        </div>
        <Cards />
      </div>

      {/* Modal Pop-ups */}
      {activeSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className={`rounded-lg p-8 max-w-3xl w-full relative ${
              isDay ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 w-12 h-12 bg-red-500 text-black rounded-md hover:bg-red-600 transition flex justify-center items-center text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Alertify Logo */}
            <img
              src="/logo.png" // Replace with your logo path
              alt="Alertify Logo"
              className="absolute inset-0 w-1/4 h-1/4 mx-auto my-auto opacity-40" // Changed opacity to 40%
            />
            {/* Content Based on Active Section */}
            {activeSection === "profile" && userData ? (
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
                <p className="text-center">
                  Name: {userData.firstName} {userData.lastName}
                </p>
                <p className="text-center">Email: {userData.email}</p>
                <p className="text-center">Date of Birth: {userData.dob}</p>
                <p className="text-center">Gender: {userData.gender}</p>
                <p className="text-center">State: {userData.state}</p>
                {/* Centered Logout Button */}
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={handleLogout} // Logout handler
                >
                  Logout
                </button>
              </div>
            ) : activeSection === "profile" && !userData ? (
              <div className="text-center">
                <p>Loading user data...</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
