import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus } from "lucide-react";

const CreateStaff = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    matricNumber: "",
    password: "",
    confirmPassword: "",
    role: "staff",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
  const { name, email, matricNumber, password, confirmPassword, role } = form;

  if (!name || !email || !matricNumber || !password || !confirmPassword || !role) {
    setError("All fields are required.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  try {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const res = await fetch("http://localhost:5000/api/admin/create-staff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
    body: JSON.stringify({ name, email, matricNumber, password, role }),
  });

  const data = await res.json();

  if (!res.ok) {
    setError(data.message || "Something went wrong.");
    return;  // ← stops here, won't reach setSuccess
  }

  setSuccess(`Staff account for ${data.user.name} created successfully.`);
  setForm({ name: "", email: "", matricNumber: "", password: "", confirmPassword: "", role: "staff" });

} catch (err) {
  setError("Server error. Please try again.");
}



    // TODO: connect to backend API
    console.log("Creating staff:", { name, email, matricNumber, password, role });
    setSuccess(`Staff account for ${name} created successfully.`);
    setForm({ name: "", email: "", matricNumber: "", password: "", confirmPassword: "", role: "staff" });
  };

  const inputStyle =
    "w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm focus:outline-none focus:border-green-700 focus:bg-white transition";

  const labelStyle = "block text-sm font-medium text-gray-600 mb-1";

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-2xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-900">Create Staff</h1>
            <p className="text-sm text-gray-600">Add a new staff account to the system.</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-900 shadow"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 space-y-5">

          {/* Name */}
          <div>
            <label className={labelStyle}>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Mary Enoh"
              className={inputStyle}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelStyle}>Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. mary@ub.cm"
              className={inputStyle}
            />
          </div>

          {/* Matric Number */}
          <div>
            <label className={labelStyle}>Matric / Staff Number</label>
            <input
              name="matricNumber"
              value={form.matricNumber}
              onChange={handleChange}
              placeholder="e.g. ST2026001"
              className={inputStyle}
            />
          </div>

          {/* Role */}
          <div>
            <label className={labelStyle}>Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="staff">Canteen Staff</option>
              <option value="kitchen">Kitchen Staff</option>
              <option value="support">Support Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className={labelStyle}>Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className={inputStyle}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className={labelStyle}>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat the password"
              className={inputStyle}
            />
          </div>

          {/* Error / Success */}
          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}
          {success && (
            <p className="text-green-700 text-sm font-medium">{success}</p>
          )}

          {/* Buttons */}
          <button
            onClick={handleSubmit}
            className="w-full h-12 rounded-full bg-green-900 text-white text-sm font-semibold hover:bg-green-800 transition flex items-center justify-center gap-2"
          >
            <UserPlus size={18} /> Create Staff Account
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full h-12 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default CreateStaff;
