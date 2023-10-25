import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2021");
  let yearArray = ["2019", "2020", "2021", "2022", "2023"];
  let index = yearArray.indexOf(yearFilter)
  yearArray.splice(index, 1);
  let yearFilterText = yearArray.join(", ");

  const yearFilterHandler = (year) => {
    setYearFilter(year)
    console.log(year)
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === yearFilter);

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={yearFilter} onChangeYearFilter={yearFilterHandler}/>
        {filteredExpenses.map(expense =>  (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
        <p>Data for years {yearFilterText} is hidden</p>

      </Card>
    </div>
  )
}

export default Expenses;
