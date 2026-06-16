import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";

import {
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

const QRCodePage = () => {
  const navigate = useNavigate();

  const [qrData, setQrData] = useState(null);
  const [loading, setLoading] = useState(true);

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const generateQR = async () => {
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/qr/generate",
        {},
        config
      );

      setQrData(data);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "QR Generation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateQR();
  }, []);

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
            Matric:
            {" "}
            {userInfo?.matricNumber}
          </p>

        </div>

        {/* QR CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">

          {loading ? (
            <h2>Generating QR...</h2>
          ) : (
            <>
              <div className="flex justify-center">

                <QRCode
                  value={qrData?.token || "empty"}
                  size={220}
                />

              </div>

              <h3 className="text-xl font-bold text-green-900 mt-5">
                Active Meal Pass
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Present this QR code to staff
                when collecting your meal.
              </p>

              <div className="bg-green-50 rounded-xl p-3 mt-4">

                <p className="text-sm text-green-800 font-medium">
                  Expires:
                </p>

                <p className="text-sm">
                  {new Date(
                    qrData?.expiresAt
                  ).toLocaleString()}
                </p>

              </div>

              <button
                onClick={generateQR}
                className="
                  mt-5
                  border
                  border-green-900
                  text-green-900
                  py-3
                  px-5
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  gap-2
                  mx-auto
                "
              >
                <RefreshCw size={18} />
                Refresh QR
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default QRCodePage;