const express = require("express");
const Transaction = require("../models/transactionModel");
const router = express.Router();

// Add a transaction
router.post("/", async (req, res) => {
  const { userId, amount, category } = req.body;
  try {
    const transaction = await Transaction.create({ userId, amount, category });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get transactions by user
router.get("/:userId", async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
