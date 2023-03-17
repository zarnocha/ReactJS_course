import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  // const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const EXPENSES_ARRAY_FILTERED = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectYear={filterHandler} />
      <ExpensesList expenses={EXPENSES_ARRAY_FILTERED} />
    </Card>
  );
}
