import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => {
    (clicked ?setClicked(false) : setClicked(true))
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  if (!clicked){
    return(
      <div className='new-expense'>
        <button type='submit' onClick={toggleClicked}>Add New Expense</button>
      </div>
    )
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={toggleClicked} />
    </div>
  )
}

export default NewExpense;
