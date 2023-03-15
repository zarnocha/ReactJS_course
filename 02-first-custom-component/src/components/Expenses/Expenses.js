import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((_object, i) => (
        <ExpenseItem
          title={expenses[i].title}
          amount={expenses[i].amount}
          date={expenses[i].date}
        />
      ))}
    </Card>
  );
}
