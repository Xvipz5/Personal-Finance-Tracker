import React, { useEffect, useState } from "react";

function BudgetSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch(
        "http://localhost:5000/api/optimization/some_user_id" // Replace with actual user ID
      );
      const data = await response.json();
      if (response.ok) {
        setSuggestions(data.suggestions);
      } else {
        alert("Error fetching suggestions");
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div>
      <h2>Budget Suggestions</h2>
      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>
            {item.category}: Current - ${item.current}, Suggested - $
            {item.suggested}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetSuggestions;

