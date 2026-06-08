import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";

import StudentDashboard from "../pages/Student/StudentDashboard";
import MealPlans from "../pages/Student/MealPlans";
import QRCodePage from "../pages/Student/QRCodePage";
import MealHistory from "../pages/Student/MealHistory";
import StudentProfile from "../pages/Student/StudentProfile";

import StaffDashboard from "../pages/Staff/StaffDashboard";
import ScanQRCode from "../pages/Staff/ScanQRCode";
import StaffProfile from "../pages/Staff/StaffProfile";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageStudents from "../pages/Admin/ManageStudents";
import ManageStaff from "../pages/Admin/ManageStaff";
import ManageMealPlans from "../pages/Admin/ManageMealPlans";
import Reports from "../pages/Admin/Reports";
import Settings from "../pages/Admin/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />

      {/* Student */}
      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      <Route
        path="/student/mealplans"
        element={<MealPlans />}
      />

      <Route
        path="/student/qr"
        element={<QRCodePage />}
      />

      <Route
        path="/student/history"
        element={<MealHistory />}
      />

      <Route
        path="/student/profile"
        element={<StudentProfile />}
      />

      {/* Staff */}
      <Route
        path="/staff/dashboard"
        element={<StaffDashboard />}
      />

      <Route
        path="/staff/scan"
        element={<ScanQRCode />}
      />

      <Route
        path="/staff/profile"
        element={<StaffProfile />}
      />

      {/* Admin */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/students"
        element={<ManageStudents />}
      />

      <Route
        path="/admin/staff"
        element={<ManageStaff />}
      />

      <Route
        path="/admin/mealplans"
        element={<ManageMealPlans />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />

      <Route
        path="/admin/settings"
        element={<Settings />}
      />
    </Routes>
  );
};

export default AppRoutes;