import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

const students = [
  { name: "James Nkem", matric: "UB2026134", plan: "Monthly", status: "Active" },
  { name: "Esther Nyeme", matric: "UB2026247", plan: "Weekly", status: "Active" },
  { name: "Daniel Ako", matric: "UB2026390", plan: "Expired", status: "Inactive" },
];

const ManageStudents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-900">
              Manage Students
            </h1>
            <p className="text-sm text-gray-600">
              See student accounts and meal plan statuses.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-900 shadow"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-green-900 px-4 py-2 text-sm text-white transition hover:bg-green-800">
              <Search size={16} /> Search
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid gap-4 p-5 md:grid-cols-3 bg-gray-50 text-sm font-semibold text-gray-600">
            <span>Student</span>
            <span>Meal Plan</span>
            <span>Status</span>
          </div>
          <div className="divide-y divide-gray-100">
            {students.map((student) => (
              <div key={student.matric} className="grid gap-4 p-5 md:grid-cols-3 items-center">
                <div>
                  <p className="font-semibold text-gray-900">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.matric}</p>
                </div>
                <div className="text-sm text-gray-700">{student.plan}</div>
                <div>
                  <span className={`inline-flex rounded-full px-3 py-1 text-sm ${student.status === "Active" ? "bg-green-100 text-green-900" : "bg-gray-100 text-gray-700"}`}>
                    {student.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
