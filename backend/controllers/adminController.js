const createStaff = async (req, res) => {
  res.json({
    message: "Create Staff",
  });
};

const getAllUsers = async (req, res) => {
  res.json({
    message: "Get All Users",
  });
};

const updateUserStatus = async (req, res) => {
  res.json({
    message: "Update User Status",
  });
};

const deleteUser = async (req, res) => {
  res.json({
    message: "Delete User",
  });
};

export {
  createStaff,
  getAllUsers,
  updateUserStatus,
  deleteUser,
};