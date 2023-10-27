import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState(0)
  const [enteredDate, setEnteredDate] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate + " PST")
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredDate(event.target.value )
  };

  return( <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
      </div>
    </div>
    <div className='new-expense-actions'>
      <button onClick={props.cancel}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>)

};

export default ExpenseForm
