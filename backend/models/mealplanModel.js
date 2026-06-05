import mongoose from "mongoose";

const mealPlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    durationWeeks: {
      type: Number,
      required: true,
    },

    schoolDays: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    credits: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MealPlan = mongoose.model("MealPlan", mealPlanSchema);

export default MealPlan;