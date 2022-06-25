import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { expenses } from './expenses';

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log(`In App.js\n ${JSON.stringify(expense)}`);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
