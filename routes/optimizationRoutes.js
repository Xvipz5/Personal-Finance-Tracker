const express = require("express");
const Transaction = require("../models/transactionModel");
const router = express.Router();

// Get budget optimization suggestions
router.get("/:userId", async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });

    const totalExpenses = transactions.reduce((sum, txn) => sum + txn.amount, 0);
    const categoryExpenses = transactions.reduce((categories, txn) => {
      categories[txn.category] = (categories[txn.category] || 0) + txn.amount;
      return categories;
    }, {});

    const suggestions = Object.entries(categoryExpenses).map(([category, amount]) => ({
      category,
      current: amount,
      suggested: amount * 0.9, // Suggest reducing 10% of current spending
    }));

    res.status(200).json({ totalExpenses, suggestions });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
