import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore'
import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import getVisibleExpense from '../src/selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 8222 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 5046 }));
store.dispatch(setTextFilter('Bill'));
// store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpense);

const root = document.getElementById('app');
ReactDOM.render(<AppRouter />, root)