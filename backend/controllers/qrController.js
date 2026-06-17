import QRToken from "../models/qrTokenModel.js";
import User from "../models/userModel.js";
import { v4 as uuidv4 } from "uuid";

// Generate QR Code
const generateQRCode = async (req, res) => {
  try {
    const student = await User.findById(req.user._id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    if (student.mealCredits <= 0) {
      return res.status(400).json({
        message: "No meal credits available",
      });
    }

    const today = new Date()
      .toISOString()
      .split("T")[0];

    const existingQR = await QRToken.findOne({
      student: student._id,
      qrDate: today,
    });

    if (existingQR) {
      return res.status(200).json(existingQR);
    }

    const token = uuidv4();

    const expiresAt = new Date();
    expiresAt.setHours(23, 59, 59, 999);

    const qr = await QRToken.create({
      student: student._id,
      token,
      qrDate: today,
      expiresAt,
    });

    res.status(201).json(qr);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Validate QR Code
const validateQRCode = async (req, res) => {
  try {
    const { token } = req.body;

    const qr = await QRToken.findOne({ token });

    if (!qr) {
      return res.status(400).json({
        message: "Invalid QR Code",
      });
    }

    if (new Date() > qr.expiresAt) {
      return res.status(400).json({
        message: "QR Code Expired",
      });
    }

    const student = await User.findById(
      qr.student
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    if (student.mealCredits <= 0) {
      return res.status(400).json({
        message: "No meal credits available",
      });
    }

    student.mealCredits -= 1;

    await student.save();

    await qr.deleteOne();

    res.status(200).json({
      message: "Meal Successfully Claimed",
      remainingCredits: student.mealCredits,
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  generateQRCode,
  validateQRCode,
};