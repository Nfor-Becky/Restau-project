import express from "express";

const router = express.Router();

import {
  protect,
} from "../middlewares/authMiddleware.js";

import {
  getUserProfile,
  updateUserProfile,
  getDashboardData,
} from "../controllers/userController.js";

router.get("/profile", protect, getUserProfile);

router.put("/profile", protect, updateUserProfile);

router.get(
  "/dashboard",
  protect,
  getDashboardData
);

export default router;