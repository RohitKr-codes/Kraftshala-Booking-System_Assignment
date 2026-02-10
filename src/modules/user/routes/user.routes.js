const express = require("express");
const router = express.Router();

const controller = require("../interface/user.controller");

// CREATE
router.post("/", controller.createUser);

// READ
router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUserById);

// UPDATE
router.put("/:id", controller.updateUser);

// DELETE
router.delete("/:id", controller.deleteUser);

module.exports = router;
