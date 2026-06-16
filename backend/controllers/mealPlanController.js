import MealPlan from "../models/mealPlanModel.js";
import User from "../models/userModel.js";

/*
========================================
CREATE MEAL PLAN (ADMIN)
========================================
*/
const createMealPlan = async (req, res) => {
  try {
    const {
      name,
      durationWeeks,
      schoolDays,
      price,
      credits,
    } = req.body;

    const mealPlan = await MealPlan.create({
      name,
      durationWeeks,
      schoolDays,
      price,
      credits,
    });

    res.status(201).json(mealPlan);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================
GET ALL MEAL PLANS
========================================
*/
const getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find({});

    res.status(200).json(mealPlans);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================
STUDENT SELECTS MEAL PLAN
========================================
*/
const selectMealPlan = async (req, res) => {
  try {
    const { mealPlanId } = req.body;

    const mealPlan = await MealPlan.findById(
      mealPlanId
    );

    if (!mealPlan) {
      return res.status(404).json({
        message: "Meal Plan Not Found",
      });
    }

    const student = await User.findById(
      req.user._id
    );

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    student.selectedMealPlan =
      mealPlan._id;

    student.mealCredits =
      mealPlan.credits;

    await student.save();

    res.status(200).json({
      message:
        "Meal Plan Selected Successfully",
      mealPlan,
      credits: mealPlan.credits,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================
UPDATE MEAL PLAN (ADMIN)
========================================
*/
const updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(
      req.params.id
    );

    if (!mealPlan) {
      return res.status(404).json({
        message: "Meal Plan Not Found",
      });
    }

    mealPlan.name =
      req.body.name || mealPlan.name;

    mealPlan.durationWeeks =
      req.body.durationWeeks ??
      mealPlan.durationWeeks;

    mealPlan.schoolDays =
      req.body.schoolDays ??
      mealPlan.schoolDays;

    mealPlan.price =
      req.body.price ?? mealPlan.price;

    mealPlan.credits =
      req.body.credits ??
      mealPlan.credits;

    const updatedMealPlan =
      await mealPlan.save();

    res.status(200).json(updatedMealPlan);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
========================================
DELETE MEAL PLAN (ADMIN)
========================================
*/
const deleteMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(
      req.params.id
    );

    if (!mealPlan) {
      return res.status(404).json({
        message: "Meal Plan Not Found",
      });
    }

    await mealPlan.deleteOne();

    res.status(200).json({
      message:
        "Meal Plan Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  createMealPlan,
  getMealPlans,
  selectMealPlan,
  updateMealPlan,
  deleteMealPlan,
};