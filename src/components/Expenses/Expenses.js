import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());
  const onFilterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={onFilterChangeHandler}
      />

      {props.items
        .filter(
          expense => expense.date.getFullYear().toString() === filteredYear
        )
        .map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
    </Card>
  );
};

export default Expenses;
