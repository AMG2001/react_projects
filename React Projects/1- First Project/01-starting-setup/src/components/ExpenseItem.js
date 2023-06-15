import './ExpenseItem.css';

function expenseItem(props) {
  return (
    <div className='expense-item'>
      <div className='expense-date'>
        <div className='expense-date__month'>{props.expense.month}</div>
        <div className='expense-date__year'>{props.expense.year}</div>
        <div className='expense-date__day'>{props.expense.day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.expense.title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default expenseItem;
