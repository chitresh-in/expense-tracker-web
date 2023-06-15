import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

  const [userInput, setUserInput] = useState(
    {
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    }
  )

  const titleChangeHandler = (event) => {
    setUserInput({...userInput, enteredTitle: event.target.value});
  }

  const amountChangeHandler = (event) => {
    setUserInput({...userInput, enteredAmount: event.target.value});
  }

  const dateChangeHandler = (event) => {
    setUserInput({...userInput, enteredDate: event.target.value});
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