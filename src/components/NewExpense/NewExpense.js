import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
