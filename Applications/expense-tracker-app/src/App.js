import React, { useReducer, useState } from 'react';
import './styles/css/main.css'
import Balance from './components/Balance';
import History from './components/History';
import AddNew from './components/AddNew';

export const ACTIONS = {
  ADD_EXPENSE: 'add-expense',
  DELETE_EXPENSE: 'delete-expense',
  DELETE_ALL: 'delete-all'
}

function reducer(expenses, action) {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return action.payload.properties.name && action.payload.properties.value ? [...expenses, newExpense(action.payload.properties)] : expenses
    case ACTIONS.DELETE_EXPENSE:
      console.log(expenses.filter(expense => expense.id !== action.payload.id))
      return expenses.filter(expense => expense.id !== action.payload.id)
    case ACTIONS.DELETE_ALL:
      return []
    default:
      return expenses
  }
}

function newExpense(properties) {
  return { id: Date.now(), properties: properties }
}

function App() {
  const [expenses, dispatch] = useReducer(reducer, [])
  const [properties, setProperties] = useState({})

  return (
    <div className='app'>
      <h1>Expense Tracker</h1>
      <Balance expenses={expenses} />
      <History expenses={expenses} dispatch={dispatch} />
      <AddNew properties={properties} setProperties={setProperties} dispatch={dispatch} />
    </div>
  );
}

export default App;
