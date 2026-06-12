  import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  UserCog,
  ClipboardList,
  FileText,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const cards = [
    {
      title: "Manage Students",
      icon: <Users size={28} />,
      path: "/admin/students",
    },
    {
      title: "Manage Staff",
      icon: <UserCog size={28} />,
      path: "/admin/staff",
    },
    {
      title: "Meal Plans",
      icon: <ClipboardList size={28} />,
      path: "/admin/mealplans",
    },
    {
      title: "Reports",
      icon: <FileText size={28} />,
      path: "/admin/reports",
    },
    {
      title: "Settings",
      icon: <Settings size={28} />,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-green-900 text-white rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center p-5">
          <div>
            <h1 className="text-2xl font-bold">
              Admin Dashboard
            </h1>

            <p className="text-green-100 mt-1">
              Welcome back
            </p>

            <h2 className="font-semibold">
              {userInfo?.name || "Administrator"}
            </h2>
          </div>

          <Bell size={24} />
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-gray-500 text-sm">
              Students
            </h3>

            <h1 className="text-3xl font-bold text-green-900">
              250
            </h1>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-gray-500 text-sm">
              Staff
            </h3>

            <h1 className="text-3xl font-bold text-green-900">
              25
            </h1>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-gray-500 text-sm">
              Meal Plans
            </h3>

            <h1 className="text-3xl font-bold text-green-900">
              5
            </h1>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-gray-500 text-sm">
              Meals Served
            </h3>

            <h1 className="text-3xl font-bold text-green-900">
              1450
            </h1>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="px-5">
        <h2 className="text-lg font-bold mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(card.path)
              }
              className="
                bg-white
                rounded-2xl
                shadow
                p-5
                cursor-pointer
                hover:shadow-lg
                transition
              "
            >
              <div className="text-green-900 mb-3">
                {card.icon}
              </div>

              <h3 className="font-semibold">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* LOGOUT */}
      <div className="p-5">
        <button
          onClick={logoutHandler}
          className="
            w-full
            bg-red-500
            hover:bg-red-600
            text-white
            py-3
            rounded-xl
            flex
            justify-center
            items-center
            gap-2
            transition
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;