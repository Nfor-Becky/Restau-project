import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// POST /api/admin/create-staff
const createStaff = async (req, res) => {
  const { name, email, matricNumber, password, role } = req.body;

  // Validate required fields
  if (!name || !email || !matricNumber || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if email already exists
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ message: "Email already in use." });
  }

  // Check if matric number already exists
  const matricExists = await User.findOne({ matricNumber });
  if (matricExists) {
    return res.status(400).json({ message: "Matric number already in use." });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    matricNumber,
    password: hashedPassword,
    role,
  });

  if (user) {
    res.status(201).json({
      message: "Staff account created successfully.",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        matricNumber: user.matricNumber,
        role: user.role,
      },
    });
  } else {
    res.status(500).json({ message: "Failed to create staff account." });
  }
};

// GET /api/admin/users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/admin/user/:id
const updateUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.role = req.body.role || user.role;
    const updated = await user.save();

    res.json({ message: "User updated.", user: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/admin/user/:id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found." });

    await user.deleteOne();
    res.json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createStaff, getAllUsers, updateUserStatus, deleteUser };