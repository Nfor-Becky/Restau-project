import express from "express";

const router = express.Router();

import {
  protect,
  staff,
} from "../middlewares/authMiddleware.js";

import {
  generateQRCode,
  validateQRCode,
} from "../controllers/qrController.js";

router.post("/generate", protect, generateQRCode);

router.post(
  "/validate",
  protect,
  staff,
  validateQRCode
);

export default router;