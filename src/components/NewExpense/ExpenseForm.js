import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //   const [title, settitle] = useState("");
  //   const [amount, setamount] = useState("0.01");
  //   const [date, setdate] = useState("2019-09-01");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "0.01",
    date: new Date().toISOString().split('T')[0]
  });

  const titleChangeHandler = event => {
    // settitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // });
    setUserInput(prevState => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = event => {
    // setamount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // });
    setUserInput(prevState => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = event => {
    // setdate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // });
    setUserInput(prevState => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "0.01",
      date: "2019-09-01"
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-09-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
