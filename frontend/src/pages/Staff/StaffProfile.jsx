import React from "react";
import { useNavigate } from "react-router-dom";


const StaffProfile = () => {
  const navigate = useNavigate();


  // Mock data - normally retrieved from context or localStorage
  const staff = {
    name: "Pride Muma",
    email: "pride.muma@ubuea.cm",
    role: "Dining Hall Supervisor",
    id: "UB-ST-2342",
    joined: "January 12, 2024",
    photo: null,
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-[#0b7a42] text-white px-6 py-4 flex items-center shadow-md sticky top-0 z-50">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors mr-2 text-2xl font-bold"
        >
          ←
        </button>
        <h2 className="text-xl font-bold tracking-tight">Staff Profile</h2>
      </header>


      <main className="flex-1 p-4 sm:p-6 max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl">
          {/* Profile Backdrop */}
          <div className="h-24 sm:h-32 bg-gradient-to-r from-[#0b7a42] to-green-600"></div>

          <div className="px-6 sm:px-8 pb-10">
            {/* Photo Avatar */}
            <div className="relative -mt-16 mb-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] sm:rounded-[2.5rem] border-4 border-white overflow-hidden shadow-lg bg-white">
                <img
                  src={staff.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&size=256&background=f0fdf4&color=166534&bold=true`}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-black text-gray-900">{staff.name}</h1>
                <p className="text-sm font-bold text-[#0b7a42] uppercase tracking-wider">{staff.role}</p>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-sm font-semibold text-gray-700">{staff.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Employee ID</p>
                  <p className="text-sm font-mono font-bold text-gray-700">{staff.id}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Member Since</p>
                  <p className="text-sm font-semibold text-gray-700">{staff.joined}</p>
                </div>
              </div>


              <button onClick={() => { localStorage.removeItem('userInfo'); navigate('/login'); }} className="w-full mt-8 py-4 bg-red-50 text-red-600 font-bold rounded-2xl hover:bg-red-100 transition-colors shadow-sm">
                Logout from Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default StaffProfile;