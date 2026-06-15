import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const handlePassword = () => {
    setMessage(
      "Password update feature will be available soon."
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const backDashboard = () => {
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-green-900 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold">
          Student Profile
        </h1>

        <p className="text-green-100 mt-1">
          Manage your account information
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          {/* Avatar Section */}
          <div className="flex flex-col items-center p-8 border-b">
            <div
              className="
                w-32
                h-32
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                text-6xl
              "
            >
              👤
            </div>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {userInfo?.name || "Student"}
            </h2>

            <p className="text-gray-500">
              {userInfo?.matricNumber ||
                "No Matric Number"}
            </p>

            <p className="text-green-700 font-medium mt-1">
              STUDENT
            </p>
          </div>

          {/* DETAILS */}
          <div className="p-6">
            <div className="space-y-5">
              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-600">
                  Email
                </span>

                <span className="text-gray-800">
                  {userInfo?.email || "N/A"}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-600">
                  Phone
                </span>

                <span className="text-gray-800">
                  Not Added
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-600">
                  Meal Plan
                </span>

                <span className="text-gray-800">
                  Not Selected
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold text-gray-600">
                  Credits
                </span>

                <span className="font-bold text-green-900">
                  30
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-8 space-y-4">
              <button
                onClick={handlePassword}
                className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  hover:bg-gray-50
                  text-left
                  font-medium
                "
              >
                🔒 Change Password
              </button>

              <button
                onClick={handleLogout}
                className="
                  w-full
                  p-4
                  border
                  border-red-200
                  rounded-xl
                  bg-red-50
                  text-red-600
                  hover:bg-red-100
                  text-left
                  font-medium
                "
              >
                🚪 Logout
              </button>
            </div>

            {/* MESSAGE */}
            {message && (
              <div
                className="
                  mt-5
                  bg-green-50
                  text-green-700
                  p-3
                  rounded-lg
                "
              >
                {message}
              </div>
            )}

            {/* BACK BUTTON */}
            <div className="flex justify-center mt-8">
              <button
                onClick={backDashboard}
                className="
                  bg-green-900
                  text-white
                  px-8
                  py-3
                  rounded-full
                  hover:bg-green-800
                  transition
                "
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;