import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';

export default function ExpenseItem({expense}) {
  let [title_s,setTitle]=useState(expense.title);
  function updateTitle(){
    setTitle('updated');
  }
  return (
    <div className='expense-item'>
      <ExpenseDate day={expense.day} year={expense.year} month={expense.month}/>
      <div className='expense-item__description'>
        <h2>{title_s}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      <button onClick={updateTitle}>Click to update</button>
    </div>
  );
}

