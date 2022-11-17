import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [newExpense, setNewExpense] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setNewExpense(false);
  };

  const addExpenseClickHandler = () => {
    setNewExpense(true);
  };

  return (
    <div className="new-expense">
      {newExpense
        ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        : <button onClick={addExpenseClickHandler}>Add Expense</button>}
    </div>
  );
};

export default NewExpense;
