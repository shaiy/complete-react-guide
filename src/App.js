import React from 'react';

import Expenses from './components/Expenses/Expenses';
import { expenses } from './expenses';

const App = () => {
  return <Expenses items={expenses} />;
};

export default App;
