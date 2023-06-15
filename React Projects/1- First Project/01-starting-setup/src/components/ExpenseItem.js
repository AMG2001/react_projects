import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function expenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate day={props.expense.day} year={props.expense.year} month={props.expense.month}/>
      <div className='expense-item__description'>
        <h2>{props.expense.title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default expenseItem;
