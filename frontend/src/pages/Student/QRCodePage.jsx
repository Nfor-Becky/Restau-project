import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";

import {
  ArrowLeft,
  Download,
  RefreshCw,
} from "lucide-react";

const QRCodePage = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [qrData, setQrData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQRCode = async () => {
    try {
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
        error?.response?.data?.message ||
          "Failed to generate QR"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  const downloadQR = () => {
    const svg = document.getElementById(
      "studentQR"
    );

    const svgData = new XMLSerializer().serializeToString(
      svg
    );

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL(
        "image/png"
      );

      const downloadLink =
        document.createElement("a");

      downloadLink.download =
        "meal-pass.png";

      downloadLink.href = pngFile;

      downloadLink.click();
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(svgData);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading QR Code...
      </div>
    );
  }

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
        {/* STUDENT */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
          <h2 className="text-lg font-bold text-green-900">
            {userInfo?.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {userInfo?.email}
          </p>

          <p className="text-gray-500 text-sm">
            {userInfo?.matricNumber}
          </p>
        </div>

        {/* QR CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl">
              <QRCode
                id="studentQR"
                value={qrData.token}
                size={220}
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-green-900 mt-5">
            Active Meal Pass
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Present this QR code when
            collecting your meal.
          </p>

          <div className="bg-green-50 rounded-xl p-3 mt-4">
            <p className="text-sm text-green-800 font-medium">
              Expires:
            </p>

            <p className="text-xs">
              {new Date(
                qrData.expiresAt
              ).toLocaleString()}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <button
              onClick={downloadQR}
              className="
                bg-green-900
                text-white
                py-3
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Download size={18} />
              Download
            </button>

            <button
              onClick={fetchQRCode}
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
              "
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;