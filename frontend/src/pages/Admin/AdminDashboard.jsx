import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Menu, Bell, Users, UserCheck, ClipboardList, Utensils, Home, FileText, User 
} from 'lucide-react';

const AdminDashboard = () => {
  // State to hold our data, initializing with the fallback values from your UI
  const [stats, setStats] = useState({
    overview: { students: 250, staff: 25, mealPlans: 5, mealsServed: 1450 },
    charts: {
      weeklyTrend: [
        { day: 'Mon', count: 120 }, { day: 'Tue', count: 210 }, 
        { day: 'Wed', count: 320 }, { day: 'Thu', count: 200 }, 
        { day: 'Fri', count: 380 }, { day: 'Sat', count: 310 }, { day: 'Sun', count: 330 }
      ],
      locationBreakdown: [
        { name: 'Restaurant A', value: 60 },
        { name: 'Restaurant B', value: 25 },
        { name: 'Restaurant C', value: 15 }
      ]
    }
  });

  const COLORS = ['#15803d', '#22c55e', '#86efac']; // SmartRestau Green Theme

  // Fetch live data from your backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const config = {
          headers: { Authorization: `Bearer ${userInfo?.token}` },
        };
        const { data } = await axios.get('http://localhost:5000/api/admin/dashboard', config);
        
        // Transform the donut chart data slightly to match Recharts expected format
        const formattedLocations = data.charts.locationBreakdown.map(loc => ({
          name: loc.location,
          value: loc.percentage
        }));

        setStats({
          overview: data.overview,
          charts: {
            weeklyTrend: data.charts.weeklyTrend,
            locationBreakdown: formattedLocations
          }
        });
      } catch (error) {
        console.error("Using fallback data. API Error:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans text-gray-800">
      
      {/* HEADER */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center rounded-b-2xl shadow-md">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 cursor-pointer" />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <Bell className="w-6 h-6 cursor-pointer" />
      </header>

      <main className="p-4 space-y-6">
        
        {/* OVERVIEW SECTION */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wider">Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Students Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-xs text-gray-500 font-medium">Students</span>
              </div>
              <span className="text-2xl font-bold">{stats.overview.students}</span>
            </div>

            {/* Staff Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 mb-1">
                <UserCheck className="w-5 h-5 text-green-600" />
                <span className="text-xs text-gray-500 font-medium">Staff</span>
              </div>
              <span className="text-2xl font-bold">{stats.overview.staff}</span>
            </div>

            {/* Meal Plans Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 mb-1">
                <ClipboardList className="w-5 h-5 text-green-600" />
                <span className="text-xs text-gray-500 font-medium">Meal Plans</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{stats.overview.mealPlans}</span>
                <span className="text-xs text-green-500 font-semibold">Active</span>
              </div>
            </div>

            {/* Meals Served Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="w-5 h-5 text-green-600" />
                <span className="text-xs text-gray-500 font-medium">Meals Served</span>
              </div>
              <span className="text-2xl font-bold">{stats.overview.mealsServed.toLocaleString()}</span>
            </div>
          </div>
        </section>

        {/* LINE CHART: Meals Served This Week */}
        <section className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-sm font-bold text-gray-700 mb-4">Meals Served (This Week)</h2>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.charts.weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#15803d" strokeWidth={3} dot={{ r: 4, fill: '#15803d' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* DONUT CHART: Meal Claims by Location */}
        <section className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="w-1/2">
            <h2 className="text-sm font-bold text-gray-700 mb-2">Meal Claims by Location</h2>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.charts.locationBreakdown}
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {stats.charts.locationBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Chart Legend */}
          <div className="w-1/2 flex flex-col gap-2 pl-4">
            {stats.charts.locationBreakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-bold text-gray-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around p-3 pb-5 text-gray-400">
        <div className="flex flex-col items-center cursor-pointer text-green-700">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Dashboard</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-green-700">
          <Users className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Students</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-green-700">
          <UserCheck className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Staff</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-green-700">
          <FileText className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Reports</span>
        </div>
      </nav>

    </div>
  );
};

export default AdminDashboard;
