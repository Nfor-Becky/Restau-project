import express from "express";

const router = express.Router();

import {
  protect,
  staff,
  admin,
} from "../middlewares/authMiddleware.js";

import {
  getMyMealHistory,
  getAllMealClaims,
} from "../controllers/mealClaimController.js";

router.get(
  "/my-history",
  protect,
  getMyMealHistory
);

router.get(
  "/all",
  protect,
  admin,
  getAllMealClaims
);

export default router;