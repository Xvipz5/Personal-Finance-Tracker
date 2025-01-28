import React, { useState } from "react";

function AddTransaction() {
  const [transaction, setTransaction] = useState({
    userId: "some_user_id", // Replace with logged-in user's ID
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Transaction added successfully!");
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={transaction.amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={transaction.category}
        onChange={handleChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
