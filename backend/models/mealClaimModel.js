import mongoose from "mongoose";

const mealClaimSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    claimDate: {
      type: String,
      required: true,
    },

    station: {
      type: String,
      enum: ["Point 1", "Point 2"],
      required: true,
    },

    status: {
      type: String,
      enum: ["approved", "rejected"],
      default: "approved",
    },

    scannedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

mealClaimSchema.index(
  { student: 1, claimDate: 1 },
  { unique: true }
);

const MealClaim = mongoose.model("MealClaim", mealClaimSchema);

export default MealClaim;