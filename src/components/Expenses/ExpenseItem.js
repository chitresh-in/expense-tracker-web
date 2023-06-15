import './ExpenseItem.css';
import React, { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Hello');
  }
  
  return(
    <div className='expense-item'>
      <div>{props.date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      <button onClick={clickHandler} >Update title</button>
    </div>
  )
}

export default ExpenseItem;