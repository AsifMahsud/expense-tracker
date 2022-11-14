import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const onAddExpenseHandler = expenseData => {
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
