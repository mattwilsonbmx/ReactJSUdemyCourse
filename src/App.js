import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";

const dummyExpenses = [
  {
    id: "e1",
    title: "MacBook Pro",
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Ergonofis Standing Desk",
    amount: 650,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "PWRBLD Crewneck",
    amount: 60,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Razor Gaming Keyboard",
    amount: 150,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
