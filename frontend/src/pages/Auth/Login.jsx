import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // LOGIN
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Save user info
      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      console.log(data);

      // Redirect based on role
      if (data.role === "student") {
        window.location.href = "/student/dashboard";
      } else if (data.role === "staff") {
        window.location.href = "/Staff/StaffDashboard";
      } else if (data.role === "admin") {
        window.location.href = "/Admin/AdminDashboard";
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login Failed"
      );
    }

    setLoading(false);
  };

  // REGISTER
  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError(
        "Passwords do not match"
      );
    }

    try {
      setLoading(true);
      setError("");

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          matricNumber,
          password,
        }
      );

      alert("Registration Successful");

      setName("");
      setEmail("");
      setMatricNumber("");
      setPassword("");
      setConfirmPassword("");

      setIsLoginMode(true);

      console.log(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-white
      px-4
      py-8
    "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-2xl
        border
        border-gray-200
        p-6
        sm:p-8
      "
      >
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div
            className="
            w-16
            h-16
            sm:w-20
            sm:h-20
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
          "
          >
            <span className="text-3xl sm:text-4xl">
              🍽️
            </span>
          </div>
        </div>

        {/* Header */}
        <h1
          className="
          text-center
          text-2xl
          sm:text-3xl
          font-bold
          text-green-900
        "
        >
          Restau System
        </h1>

        <p
          className="
          text-center
          text-gray-500
          mb-8
          text-sm
          sm:text-base
        "
        >
          University of Buea
        </p>

        {/* Error */}
        {error && (
          <div
            className="
            bg-red-100
            text-red-600
            p-3
            rounded-lg
            mb-5
            text-sm
          "
          >
            {error}
          </div>
        )}

        {/* Switch Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            type="button"
            onClick={() => setIsLoginMode(true)}
            className={`
              w-1/2
              py-3
              rounded-full
              font-semibold
              transition
              ${
                isLoginMode
                  ? "bg-green-900 text-white"
                  : "bg-gray-100 text-green-900"
              }
            `}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setIsLoginMode(false)}
            className={`
              w-1/2
              py-3
              rounded-full
              font-semibold
              transition
              ${
                !isLoginMode
                  ? "bg-green-900 text-white"
                  : "bg-gray-100 text-green-900"
              }
            `}
          >
            Sign Up
          </button>
        </div>

        {isLoginMode ? (
          <form
            className="space-y-5"
            onSubmit={loginHandler}
          >
            <div>
              <label className="text-sm text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="auth-input"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="auth-input"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            <button
              type="submit"
              className="
              w-full
              py-3
              rounded-full
              bg-green-900
              text-white
              font-semibold
              hover:bg-green-800
              transition
            "
            >
              {loading
                ? "Loading..."
                : "Login"}
            </button>
          </form>
        ) : (
          <form
            className="space-y-4"
            onSubmit={registerHandler}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="auth-input"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Matric Number"
              className="auth-input"
              value={matricNumber}
              onChange={(e) =>
                setMatricNumber(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <button
              type="submit"
              className="
              w-full
              py-3
              rounded-full
              bg-green-900
              text-white
              font-semibold
              hover:bg-green-800
              transition
            "
            >
              {loading
                ? "Creating..."
                : "Create Account"}
            </button>
          </form>
        )}

        <p
          className="
          text-center
          mt-7
          text-gray-600
          text-sm
          sm:text-base
        "
        >
          {isLoginMode
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() =>
              setIsLoginMode(!isLoginMode)
            }
            className="
            ml-2
            text-green-800
            font-bold
            hover:underline
          "
          >
            {isLoginMode
              ? "Sign Up"
              : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;