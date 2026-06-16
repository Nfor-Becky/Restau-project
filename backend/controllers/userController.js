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

export {
  getUserProfile,
  updateUserProfile,
};