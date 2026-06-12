import React from "react";
import { useNavigate } from "react-router-dom";
import {
  QrCode,
  History,
  User,
  CreditCard,
  ClipboardList,
  LogOut,
} from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-green-900 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto p-5 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">
              Student Dashboard
            </h1>

            <p className="text-green-100 mt-2">
              Welcome back,
            </p>

            <h2 className="text-lg font-semibold">
              {userInfo?.name || "Student"}
            </h2>

            <p className="text-green-200 text-sm">
              {userInfo?.matricNumber ||
                "UB2025001"}
            </p>
          </div>

          {/* Logout */}
          <button
            onClick={logoutHandler}
            className="
              bg-white
              text-red-600
              px-3
              py-2
              rounded-xl
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              hover:bg-red-50
              transition
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Credits */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600 font-medium">
                Meal Credits
              </h3>

              <CreditCard
                size={24}
                className="text-green-900"
              />
            </div>

            <h1 className="text-4xl font-bold text-green-900 mt-3">
              30
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Remaining Credits
            </p>
          </div>

          {/* Meal Plan */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600 font-medium">
                Active Meal Plan
              </h3>

              <ClipboardList
                size={24}
                className="text-green-900"
              />
            </div>

            <h1 className="text-2xl font-bold text-green-900 mt-3">
              Standard Plan
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              3 Meals Per Day
            </p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="text-lg font-bold mb-4 text-green-900">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* QR */}
            <button
              onClick={() =>
                navigate("/student/qrcode")
              }
              className="
                bg-green-50
                hover:bg-green-100
                rounded-xl
                p-4
                transition
                flex
                flex-col
                items-center
              "
            >
              <QrCode
                size={30}
                className="text-green-900"
              />

              <span className="mt-2 text-sm font-medium">
                QR Code
              </span>
            </button>

            {/* Meal Plan */}
            <button
              onClick={() =>
                navigate("/student/mealplans")
              }
              className="
                bg-green-50
                hover:bg-green-100
                rounded-xl
                p-4
                transition
                flex
                flex-col
                items-center
              "
            >
              <ClipboardList
                size={30}
                className="text-green-900"
              />

              <span className="mt-2 text-sm font-medium">
                Meal Plan
              </span>
            </button>

            {/* History */}
            <button
              onClick={() =>
                navigate("/student/history")
              }
              className="
                bg-green-50
                hover:bg-green-100
                rounded-xl
                p-4
                transition
                flex
                flex-col
                items-center
              "
            >
              <History
                size={30}
                className="text-green-900"
              />

              <span className="mt-2 text-sm font-medium">
                History
              </span>
            </button>

            {/* Profile */}
            <button
              onClick={() =>
                navigate("/student/profile")
              }
              className="
                bg-green-50
                hover:bg-green-100
                rounded-xl
                p-4
                transition
                flex
                flex-col
                items-center
              "
            >
              <User
                size={30}
                className="text-green-900"
              />

              <span className="mt-2 text-sm font-medium">
                Profile
              </span>
            </button>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-2xl p-5 shadow mt-6">
          <h2 className="text-lg font-bold mb-3 text-green-900">
            Recent Activity
          </h2>

          <div className="space-y-3">
            <div className="border-b pb-2">
              <p className="font-medium">
                Breakfast Claimed
              </p>
              <p className="text-sm text-gray-500">
                Today - 7:45 AM
              </p>
            </div>

            <div className="border-b pb-2">
              <p className="font-medium">
                Lunch Claimed
              </p>
              <p className="text-sm text-gray-500">
                Yesterday - 12:15 PM
              </p>
            </div>

            <div>
              <p className="font-medium">
                Meal Plan Activated
              </p>
              <p className="text-sm text-gray-500">
                2 Days Ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;