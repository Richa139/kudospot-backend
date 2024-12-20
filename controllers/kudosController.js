// const Kudos = require('../models/Kudos');
const Kudos = require("../models/Kudo");

// Fetch all kudos
exports.getKudos = async (req, res) => {
    try {
        const kudos = await Kudos.find();
        res.status(200).json(kudos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new kudos
exports.addKudos = async (req, res) => {
    const { sender, recipient, message , badge} = req.body;
    try {
        const newKudos = new Kudos({ sender, recipient, message, badge , date: new Date() });
        await newKudos.save();
        res.status(201).json(newKudos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Analytics (number of kudos given/received)
exports.getAnalytics = async (req, res) => {
    try {
        const kudos = await Kudos.aggregate([
            { $group: { _id: "$recipient", count: { $sum: 1 } } },
        ]);
        res.status(200).json(kudos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
