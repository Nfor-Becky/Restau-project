import express from "express";

const router = express.Router();

import {
  protect,
  admin,
} from "../middlewares/authMiddleware.js";

import {
  createMealPlan,
  getMealPlans,
  selectMealPlan,
  updateMealPlan,
  deleteMealPlan,
} from "../controllers/mealPlanController.js";

router.get("/", getMealPlans);

router.post("/", protect, admin, createMealPlan);

router.post("/select/:id", protect, selectMealPlan);

router.put("/:id", protect, admin, updateMealPlan);

router.delete("/:id", protect, admin, deleteMealPlan);

export default router;