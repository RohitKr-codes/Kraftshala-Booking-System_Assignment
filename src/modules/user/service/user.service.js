const User = require("../model/user.model");

// Create User
async function createUser(data) {
  return await User.create(data);
}

// Get User By ID
async function getUserById(id) {
  return await User.findByPk(id);
}

// Get All Users
async function getAllUsers() {
  return await User.findAll();
}

// Update User
async function updateUser(id, data) {
  const user = await User.findByPk(id);

  if (!user) return null;

  return await user.update(data);
}

// Delete User
async function deleteUser(id) {
  const user = await User.findByPk(id);

  if (!user) return null;

  await user.destroy();
  return true;
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
