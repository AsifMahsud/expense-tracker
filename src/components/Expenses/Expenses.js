import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState("2019");
  const onFilterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={onFilterChangeHandler}
      />
      {props.items.map(expense =>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </Card>
  );
};

export default Expenses;
