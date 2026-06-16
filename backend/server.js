import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mealPlanRoutes from "./routes/mealPlanRoutes.js";
import qrRoutes from "./routes/qrRoutes.js";
import mealClaimRoutes from "./routes/mealClaimRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main Route
app.get("/", (req, res) => {
  res.send("Restaurant Management System API Running...");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// User Routes
app.use("/api/users", userRoutes);

// Meal Plan Routes
app.use("/api/mealplans", mealPlanRoutes);

// QR Code Routes
app.use("/api/qr", qrRoutes);

// Meal Claim Routes
app.use("/api/claims", mealClaimRoutes);

// Report Routes
app.use("/api/reports", reportRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

// Connect Database and then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Database connected successfully.");
  });
}).catch(err => {
  console.error("CRITICAL ERROR: Could not connect to MongoDB.");
  console.error(err.message);
  process.exit(1);
});