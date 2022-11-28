import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  const onFilterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          onRemoveExpenseItem={expenseId =>
            props.onRemoveExpenseItem(expenseId)}
        />
      </Card>
    </li>
  );
};

export default Expenses;
