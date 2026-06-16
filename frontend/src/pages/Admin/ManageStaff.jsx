 import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus, UserCheck } from "lucide-react";

const staff = [
  { name: "Mary Enoh", role: "Canteen Staff", status: "Active" },
  { name: "Paul Nkwentis", role: "Kitchen Staff", status: "Active" },
  { name: "Alice Fon", role: "Support Staff", status: "Inactive" },
];

const ManageStaff = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-900">
              Manage Staff
            </h1>
            <p className="text-sm text-gray-600">
              Add or update restaurant staff accounts.
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-900 shadow"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <span className="text-sm font-semibold text-gray-700">Staff Members</span>
            <button className="inline-flex items-center gap-2 rounded-full bg-green-900 px-4 py-2 text-sm text-white transition hover:bg-green-800">
              <UserPlus size={16} /> Add Staff
            </button>
          </div>

          <div className="space-y-3 p-5">
            {staff.map((member) => (
              <div
                key={member.name}
                className="flex flex-col gap-2 rounded-3xl border border-gray-100 bg-gray-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-semibold text-gray-900">{member.name}</h2>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white px-3 py-1 text-sm text-green-900 shadow-sm">
                    {member.status}
                  </span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-green-900 shadow-sm transition hover:bg-green-50">
                    <UserCheck size={16} /> Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStaff;