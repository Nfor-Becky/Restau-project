import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  QrCode,
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
            My QR Code
          </h1>
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* STUDENT CARD */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
          <h2 className="text-lg font-bold text-green-900">
            {userInfo?.name}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {userInfo?.email}
          </p>

          <p className="text-gray-500 text-sm">
            Matric:
            {" "}
            {userInfo?.matricNumber || "N/A"}
          </p>
        </div>

        {/* QR CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div
              className="
              w-56
              h-56
              bg-gray-100
              border-4
              border-dashed
              border-green-900
              rounded-xl
              flex
              items-center
              justify-center
            "
            >
              <QrCode
                size={120}
                className="text-green-900"
              />
            </div>
          </div>

          <h3 className="font-bold text-lg text-green-900">
            Active Meal QR
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Present this QR code to the cafeteria
            staff when claiming meals.
          </p>

          <button
            className="
            mt-5
            w-full
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
            Download QR
          </button>
        </div>

        {/* MEAL INFO */}
        <div className="bg-white rounded-2xl shadow-md p-5 mt-5">
          <h3 className="font-semibold text-gray-700">
            Meal Status
          </h3>

          <div className="mt-4 flex justify-between">
            <span className="text-gray-500">
              Credits Remaining
            </span>

            <span className="font-bold text-green-900">
              30
            </span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="text-gray-500">
              Today's Status
            </span>

            <span className="font-bold text-green-600">
              Eligible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;