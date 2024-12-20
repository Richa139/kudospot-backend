const express = require("express");
const { validateName, createUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

// Route for validating user by name
router.get("/validate", validateName);

// Route for creating a new user
router.post("/", createUser);

// Route for getting all users
router.get("/all", getAllUsers);

module.exports = router;
