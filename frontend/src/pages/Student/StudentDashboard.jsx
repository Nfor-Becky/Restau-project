import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const [dashboardData, setDashboardData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo?.token}`,
          },
        };

        const { data } = await axios.get(
          "http://localhost:5000/api/users/dashboard",
          config
        );

        setDashboardData(data);
      } catch (error) {
        console.log(
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    if (userInfo?.token) {
      fetchDashboard();
    } else {
      setLoading(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  if (loading) {
    return (
      <h2 className="text-center mt-10 text-xl">
        Loading...
      </h2>
    );
  }

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
              Welcome Back,
            </p>

            <h2 className="text-lg font-semibold">
              {dashboardData?.name ||
                userInfo?.name ||
                "Student"}
            </h2>

            <p className="text-green-200 text-sm">
              {dashboardData?.matricNumber ||
                userInfo?.matricNumber ||
                "N/A"}
            </p>
          </div>

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
              font-semibold
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* TOP CARDS */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Credits */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">
                Meal Credits
              </h3>

              <CreditCard />
            </div>

            <h1 className="text-4xl font-bold text-green-900 mt-3">
              {dashboardData?.mealCredits ?? 0}
            </h1>

            <p className="text-sm text-gray-500">
              Remaining Credits
            </p>
          </div>

          {/* Meal Plan */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">
                Active Meal Plan
              </h3>

              <ClipboardList />
            </div>

            <h1 className="text-2xl font-bold text-green-900 mt-3">
              {dashboardData?.mealPlan ||
                "No Plan"}
            </h1>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-bold text-lg mb-4 text-green-900">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() =>
                navigate("/student/qrcode")
              }
              className="bg-green-50 p-4 rounded-xl flex flex-col items-center hover:bg-green-100"
            >
              <QrCode size={30} />
              <span>QR Code</span>
            </button>

            <button
              onClick={() =>
                navigate("/student/mealplans")
              }
              className="bg-green-50 p-4 rounded-xl flex flex-col items-center hover:bg-green-100"
            >
              <ClipboardList size={30} />
              <span>Meal Plan</span>
            </button>

            <button
              onClick={() =>
                navigate("/student/history")
              }
              className="bg-green-50 p-4 rounded-xl flex flex-col items-center hover:bg-green-100"
            >
              <History size={30} />
              <span>History</span>
            </button>

            <button
              onClick={() =>
                navigate("/student/profile")
              }
              className="bg-green-50 p-4 rounded-xl flex flex-col items-center hover:bg-green-100"
            >
              <User size={30} />
              <span>Profile</span>
            </button>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-2xl shadow p-5 mt-6">
          <h2 className="font-bold text-lg mb-4 text-green-900">
            Recent Activity
          </h2>

          {dashboardData?.recentClaims?.length >
          0 ? (
            dashboardData.recentClaims.map(
              (claim) => (
                <div
                  key={claim._id}
                  className="border-b py-2"
                >
                  Meal Claimed -{" "}
                  {claim.claimDate}
                </div>
              )
            )
          ) : (
            <p>No activity found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
