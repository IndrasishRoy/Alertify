"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { RiLockLine, RiEyeOffLine, RiEyeLine } from "react-icons/ri";
import "./AuthPage.css";
import TermsAndConditions from "../components/TermsAndConditions";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false); // State to toggle Terms & Conditions view
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to sign up.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      dob,
      gender,
      state,
      password,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem("loginCreds", JSON.stringify({ email, password }));
        router.push("/otp-verification");
      } else {
        const responseText = await response.text();
        let errorData;

        try {
          errorData = JSON.parse(responseText);
        } catch (error) {
          errorData = { error: "An unknown error occurred" };
        }

        console.error("Registration Error:", errorData);
        alert(errorData.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await fetch("/data/users.json");
        if (!response.ok) throw new Error("Failed to fetch user data");

        const users = await response.json();
        const currentUser = users.find(
          (user) => user.email === email && user.password === password
        );

        if (currentUser) {
          localStorage.setItem("authToken", "your-auth-token");
          localStorage.setItem(
            "loginCreds",
            JSON.stringify({ email, password })
          );
          router.push("/home");
        } else {
          alert("Invalid email or password. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    } else {
      alert("Please enter both email and password");
    }
  };

  // Function to handle showing the Terms & Conditions
  const handleShowTerms = () => {
    setShowTerms(true);
  };

  return (
    <div className="flex h-screen">
      {showTerms ? (
        <TermsAndConditions setShowTerms={setShowTerms} />
      ) : isLogin ? (
        <div className="flex w-full">
          <div className="hidden md:flex w-1/2 relative">
            <Image
              src="/loginImage.jpg"
              alt="Login Image"
              sizes={20}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
            <div className="p-10 w-full max-w-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Alertify Logo"
                  width={150}
                  height={50}
                />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-8">
                Login to Alertify
              </h2>
              <form onSubmit={handleLogin}>
                <div className="relative mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <MdOutlineMail
                    size={20}
                    className="absolute right-3 top-3.5 rounded"
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <RiLockLine
                    size={20}
                    className="absolute right-3 top-3.5 rounded"
                  />
                  <span
                    className="absolute right-10 top-3.5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <RiEyeLine size={20} />
                    ) : (
                      <RiEyeOffLine size={20} />
                    )}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white rounded-full font-semibold"
                >
                  Log In
                </button>
              </form>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-600">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

              <div className=" flex justify-center gap-1.5">
              <span>Read the</span>
              <span
                      className="text-blue-500 underline cursor-pointer"
                      onClick={handleShowTerms}
                    >
                      <b>Terms & Conditions</b>
                    </span>
              </div>

              <div className="text-center mt-4">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
            <div className="p-6 w-full max-w-lg">
              <div className="flex justify-center mb-3">
                <Image
                  src="/logo.png"
                  alt="Alertify Logo"
                  width={150}
                  height={50}
                />
              </div>
              <h2 className="flex justify-center gap-1.5 text-xl font-semibold text-center mb-1">
                Register an account to <b>Alertify</b>
              </h2>
              <h3 className="flex justify-center mb-3">
                Sign up to continue Alertify
              </h3>
              <form onSubmit={handleRegister}>
                <div className="flex mb-4">
                  {/* First Name and Last Name */}
                  <div className="w-1/2 pr-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-300 rounded-full"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-300 rounded-full"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email and Date of Birth */}
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <input
                      type="email"
                      placeholder="Email ID"
                      className="w-full p-3 border border-gray-300 rounded-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-full"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Gender and State */}
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2">
                    <select
                      className="w-full p-3 border border-gray-300 rounded-full"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="w-1/2 pl-2">
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full p-3 border border-gray-300 rounded-full"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password and Confirm Password */}
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <RiLockLine
                    size={20}
                    className="absolute right-3 top-3.5 rounded"
                  />
                  <span
                    className="absolute right-10 top-3.5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <RiEyeLine size={20} />
                    ) : (
                      <RiEyeOffLine size={20} />
                    )}
                  </span>
                </div>

                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="flex justify-center mb-4">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                  <span className="ml-2 text-sm">
                    I accept the{" "}
                    <span
                      className="text-blue-500 underline cursor-pointer"
                      onClick={handleShowTerms}
                    >
                      <b>Terms & Conditions</b>
                    </span>
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-red-600 text-white rounded-full font-semibold"
                >
                  Sign Up
                </button>
              </form>
              <div className="flex items-center my-2">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-600">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <div className="text-center mt-2">
                <p>
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500"
                    onClick={() => setIsLogin(true)}
                  >
                    Log In
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-1/2 relative">
            <Image
              src="/signupImage.png"
              alt="Signup Image"
              fill
              sizes={20}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;