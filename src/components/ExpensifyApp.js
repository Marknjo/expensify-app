import React from 'react';
import { Provider } from "react-redux";

import AppRouter from '../configs/router/AppRouter.config';
import expensifyStore from '../configs/redux/expensifyStore.config';

import { addExpense } from '../configs/redux/actions/expensesGenerators';

const store = expensifyStore();


store.dispatch(addExpense({description: " water bill", amount: 20000, createdAt: 23434234}));

store.dispatch(addExpense({description: " Gas bill", amount: 80000, createdAt: 34234}));

const ExpensifyApp = () => (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

export default ExpensifyApp;
