import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  QrCode,
  RefreshCw,
} from "lucide-react";

const QRCodePage = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-green-900 text-white p-5 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              navigate("/student/dashboard")
            }
          >
            <ArrowLeft size={24} />
          </button>

          <h1 className="text-xl font-bold">
            Meal QR Code
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        {/* STUDENT INFO */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
          <h2 className="text-lg font-bold text-green-900">
            {userInfo?.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {userInfo?.email}
          </p>

          <p className="text-gray-500 text-sm">
            Matric Number:
            {" "}
            {userInfo?.matricNumber || "N/A"}
          </p>
        </div>

        {/* QR CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="flex justify-center">
            <div
              className="
              w-64
              h-64
              bg-gray-50
              border-4
              border-dashed
              border-green-900
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
            "
            >
              <QrCode
                size={120}
                className="text-green-900"
              />

              <p className="text-xs text-gray-500 mt-3">
                QR Preview
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-green-900 mt-5">
            Active Meal Pass
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Present this QR code when collecting
            your meal.
          </p>

          <div className="bg-green-50 rounded-xl p-3 mt-4">
            <p className="text-sm text-green-800 font-medium">
              QR expires in: 24 Hours
            </p>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <button
              className="
              bg-green-900
              text-white
              py-3
              rounded-xl
              flex
              items-center
              justify-center
              gap-2
              hover:bg-green-800
              transition
            "
            >
              <Download size={18} />
              Download
            </button>

            <button
              className="
              border
              border-green-900
              text-green-900
              py-3
              rounded-xl
              flex
              items-center
              justify-center
              gap-2
              hover:bg-green-50
              transition
            "
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>

        {/* MEAL DETAILS */}
        <div className="bg-white rounded-2xl shadow-md p-5 mt-5">
          <h3 className="font-bold text-gray-700 mb-4">
            Meal Information
          </h3>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">
              Meal Plan
            </span>

            <span className="font-semibold">
              Monthly Plan
            </span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">
              Credits Remaining
            </span>

            <span className="font-bold text-green-900">
              30
            </span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">
              Today's Status
            </span>

            <span className="font-bold text-green-600">
              Eligible
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Last Scan
            </span>

            <span className="font-semibold">
              Not Used Today
            </span>
          </div>
        </div>

        {/* NOTICE */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mt-5">
          <p className="text-sm text-yellow-800">
            ⚠️ This QR code is unique to your account.
            Sharing it with another student may lead
            to account suspension.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;