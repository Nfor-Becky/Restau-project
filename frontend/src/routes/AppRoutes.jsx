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
        path="/Staff/StaffDashboard"
        element={<StaffDashboard />}
      />

      <Route
        path="/Staff/ScanQRCode"
        element={<ScanQRCode />}
      />

      <Route
        path="/Staff/StaffProfile"
        element={<StaffProfile />}
      />

      {/* Admin */}
      <Route
        path="/Admin/AdminDashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/Admin/ManageStudents"
        element={<ManageStudents />}
      />

      <Route
        path="/Admin/ManageStaff"
        element={<ManageStaff />}
      />

      <Route
        path="/Admin/ManageMealPlans"
        element={<ManageMealPlans />}
      />

      <Route
        path="/Admin/Reports"
        element={<Reports />}
      />

      <Route
        path="/Admin/Settings"
        element={<Settings />}
      />
    </Routes>
  );
};

export default AppRoutes;
