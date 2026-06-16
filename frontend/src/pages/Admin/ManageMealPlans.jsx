import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, ArrowLeft } from "lucide-react";

const plans = [
  { name: "Daily Plan", credits: 1, price: "100 FCFA" },
  { name: "Weekly Plan", credits: 4, price: "400 FCFA" },
  { name: "Monthly Plan", credits: 16, price: "1600 FCFA" },
];

const ManageMealPlans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-900">
              Manage Meal Plans
            </h1>
            <p className="text-sm text-gray-600">
              View and update active plans for students.
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-900 shadow"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Credits: {plan.credits}
              </p>
              <p className="text-sm text-gray-600">Price: {plan.price}</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-900 px-4 py-2 text-sm text-white transition hover:bg-green-800">
                <PlusCircle size={16} /> Edit Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageMealPlans;
