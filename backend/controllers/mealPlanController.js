const createMealPlan = async (req, res) => {
  res.json({
    message: "Create Meal Plan",
  });
};

const getMealPlans = async (req, res) => {
  res.json({
    message: "Get Meal Plans",
  });
};

const selectMealPlan = async (req, res) => {
  res.json({
    message: "Select Meal Plan",
  });
};

const updateMealPlan = async (req, res) => {
  res.json({
    message: "Update Meal Plan",
  });
};

const deleteMealPlan = async (req, res) => {
  res.json({
    message: "Delete Meal Plan",
  });
};

export {
  createMealPlan,
  getMealPlans,
  selectMealPlan,
  updateMealPlan,
  deleteMealPlan,
};