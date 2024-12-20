const User = require("../models/User");

// Validate if a name exists
exports.validateName = async (req, res) => {
    const { name } = req.query;
    try {
        const user = await User.findOne({ name });
        if (user) {
            res.status(200).json({ success: true, message: "User found." });
        } else {
            res.status(404).json({ success: false, message: "User not found." });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error." });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name } = req.body;
    try {
        const newUser = new User({ name });
        await newUser.save();
        res.status(201).json({ success: true, message: "User created successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error." });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error." });
    }
};
