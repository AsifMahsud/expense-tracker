import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = props => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  console.log('Component evaluated by React');
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('updated!');
    console.log('updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-item__description">
        <h2>
          {title}
        </h2>
        <div className="expense-item__price">
          {console.log('inside return block')}
          ${props.amount}
        </div>
        <button onClick={clickHandler}>Click me</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
