import React from "react";
import { useNavigate } from "react-router-dom";


const StaffDashboard = () => {
  const navigate = useNavigate();


  // Mock data for the dashboard overview
  const stats = {
    mealsServed: 128,
    validScans: 120,
    invalidScans: 8,
  };


  const recentActivity = [
    { name: "Sandra Berinyuy", time: "12:15 PM", status: "Success", photo: null },
    { name: "John N.", time: "12:18 PM", status: "Success", photo: null },
    { name: "Mary T.", time: "12:25 PM", status: "Success", photo: null },
  ];


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-[#0b7a42] text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors mr-2 text-2xl font-bold"
          >
            ←
          </button>
          <h2 className="text-xl font-bold tracking-tight">Staff Dashboard</h2>
        </div>


        {/* Profile Header Summary */}
        <div
          onClick={() => navigate("/staff/StaffProfile")}
          className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-1 pr-3 rounded-full transition-all border border-white/20"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/50">
            <img src={`https://ui-avatars.com/api/?name=Pride+Muma&background=fff&color=0b7a42&bold=true`} className="w-full h-full object-cover" alt="Profile" />
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-[10px] font-black leading-none uppercase tracking-tighter">Pride Muma</p>
            <p className="text-[8px] opacity-70 leading-none mt-0.5 tracking-wide">pride@restau.com</p>
          </div>
        </div>
      </header>


      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto w-full space-y-6 sm:space-y-8 text-slate-800">
        {/* Welcome Section */}
        <div className="pt-2">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-none">Welcome, Staff!</h1>
          <p className="text-sm text-gray-500 mt-2 font-medium italic">Here's an overview of today's activity.</p>
        </div>


        {/* Main Stats Card */}
        <div className="bg-white p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-4 sm:gap-6 transition-transform hover:scale-[1.01]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner text-green-900">
            🍽️
          </div>
          <div>
            <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Today's Meals Served</h3>
            <h1 className="text-5xl font-black text-[#0b7a42]">{stats.mealsServed}</h1>
          </div>
        </div>


        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-center flex flex-row sm:flex-col items-center justify-between sm:justify-center">
            <div className="w-12 h-12 bg-green-50 text-[#0b7a42] rounded-full flex items-center justify-center text-2xl font-bold mb-3">
              ✓
            </div>
            <div className="text-right sm:text-center">
              <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Valid Scans</h3>
              <h1 className="text-2xl sm:text-3xl font-black text-[#0b7a42]">{stats.validScans}</h1>
            </div>
          </div>


          <div className="bg-white p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-center flex flex-row sm:flex-col items-center justify-between sm:justify-center">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-2xl font-bold mb-3">
              ✕
            </div>
            <div className="text-right sm:text-center">
              <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Invalid Scans</h3>
              <h1 className="text-2xl sm:text-3xl font-black text-red-500">{stats.invalidScans}</h1>
            </div>
          </div>
        </div>


        {/* Action Button: Scan */}
        <div
          onClick={() => navigate("/staff/ScanQRCode")}
          className="bg-[#0b7a42] hover:bg-[#096637] text-white p-8 rounded-[2.5rem] shadow-xl cursor-pointer transition-all active:scale-95 group relative overflow-hidden"
        >
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                📷 Scan QR Code
              </h2>
              <p className="text-white/80 text-sm font-medium">Tap to scan a student QR code</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
               <span className="material-symbols-outlined font-bold">›</span>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
        </div>


        {/* Recent Activity Section */}
        <div className="space-y-4 pb-12">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <button className="text-[10px] font-bold text-[#0b7a42] uppercase tracking-widest hover:underline">View All</button>
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex justify-between items-center hover:border-green-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 overflow-hidden border border-green-100 shadow-sm">
                    {activity.photo ? (
                      <img src={activity.photo} alt={activity.name} className="w-full h-full object-cover" />
                    ) : (
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(activity.name)}&background=f0fdf4&color=166534&bold=true`} alt={activity.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{activity.name}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{activity.time}</p>
                  </div>
                </div>
                <span className="bg-[#e8f6ee] text-[#0b7a42] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


export default StaffDashboard;