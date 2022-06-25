import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { expenses as initialState } from './expenses';

const App = () => {
  const [expenses, setExpenses] = React.useState(initialState);

  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
