import MealClaim from "../models/mealClaimModel.js";


// STUDENT HISTORY
const getMyMealHistory = async (req, res) => {
  try {
    const claims = await MealClaim.find({
      student: req.user._id,
    })
      .sort({ createdAt: -1 });

    res.json(claims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ADMIN HISTORY
const getAllMealClaims = async (req, res) => {
  try {
    const claims = await MealClaim.find({})
      .populate(
        "student",
        "name email matricNumber"
      )
      .sort({ createdAt: -1 });

    res.json(claims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  getMyMealHistory,
  getAllMealClaims,
};