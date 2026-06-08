import express from "express";

const router = express.Router();

import {
  protect,
  admin,
} from "../middlewares/authMiddleware.js";

import {
  createStaff,
  getAllUsers,
  updateUserStatus,
  deleteUser,
} from "../controllers/adminController.js";

router.post(
  "/create-staff",
  protect,
  admin,
  createStaff
);

router.get(
  "/users",
  protect,
  admin,
  getAllUsers
);

router.put(
  "/user/:id",
  protect,
  admin,
  updateUserStatus
);

router.delete(
  "/user/:id",
  protect,
  admin,
  deleteUser
);

export default router;