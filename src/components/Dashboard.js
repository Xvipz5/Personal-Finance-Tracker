import React from "react";
import AddTransaction from "./AddTransaction";
import BudgetSuggestions from "./BudgetSuggestions";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddTransaction />
      <BudgetSuggestions />
    </div>
  );
}

export default Dashboard;
