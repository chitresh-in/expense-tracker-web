import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const [enteredAmount, setEnteredAmount] = useState('');
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate] = useState('');
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  return(

    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler}></input>
        </div>
        <div className='new-expense__actions'>
          <button type = 'submit'>Sumbit</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm;