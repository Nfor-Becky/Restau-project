const getUserProfile = async (req, res) => {
  res.json({
    message: "Get User Profile",
  });
};

const updateUserProfile = async (req, res) => {
  res.json({
    message: "Update User Profile",
  });
};

const getDashboardData = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).populate("selectedMealPlan");

    const recentClaims = await MealClaim.find({
      student: req.user._id,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      name: user.name,
      email: user.email,
      matricNumber: user.matricNumber,

      credits: user.mealCredits,

      mealPlan:
        user.selectedMealPlan?.name ||
        "No Plan",

      recentClaims,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  getUserProfile,
  updateUserProfile,
  getDashboardData,
};