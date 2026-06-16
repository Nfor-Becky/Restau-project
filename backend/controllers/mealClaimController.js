const getMyMealHistory = async (req, res) => {
  res.json({
    message: "Get My Meal History",
  });
};

const getAllMealClaims = async (req, res) => {
  res.json({
    message: "Get All Meal Claims",
  });
};

export {
  getMyMealHistory,
  getAllMealClaims,
};