import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState('All');

  const handleFilterYearChange = (year) => {
    setYearFilter(year);
  };

  const filterExpensesByYear = (expense) => {
    if (yearFilter === 'All') {
      return true;
    }
    return expense.date.getFullYear().toString() === yearFilter;
  };

  const expensesForDisplay = props.items.filter(filterExpensesByYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onFilterYearChange={handleFilterYearChange} />
      {!expensesForDisplay.length && <p>No expenses to display</p>}
      {!!expensesForDisplay.length &&
        expensesForDisplay.map((expense) => <ExpenseItem key={expense.id} {...expense} />)}
    </Card>
  );
};

export default Expenses;
