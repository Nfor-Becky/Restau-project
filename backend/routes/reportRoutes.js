import express from "express";

const router = express.Router();

import {
  protect,
  admin,
} from "../middlewares/authMiddleware.js";

import {
  dailyReport,
  weeklyReport,
  monthlyReport,
} from "../controllers/reportController.js";

router.get(
  "/daily",
  protect,
  admin,
  dailyReport
);

router.get(
  "/weekly",
  protect,
  admin,
  weeklyReport
);

router.get(
  "/monthly",
  protect,
  admin,
  monthlyReport
);

export default router;