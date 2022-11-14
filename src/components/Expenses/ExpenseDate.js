import './ExpenseDate.css'

const ExpenseDate = props => {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>
        {props.month}
      </div>
      <div className='expense-date__day'>
        {props.day}
      </div>
      <div className='expense-date__year'>
        {props.year}
      </div>
    </div>
  );
};

export default ExpenseDate;