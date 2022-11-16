// import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = props => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // const [title, setTitle] = useState(props.title);
  
  // const clickHandler = () => {
  //   setTitle('updated!');
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-item__description">
        <h2>
          {props.title}
        </h2>
        <div className="expense-item__price">
          ${props.amount}
        </div>
        <button>Click me</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
