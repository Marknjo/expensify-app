import React from 'react';

import {
  BrowserRouter as Router, 
  Route,
  Switch,
} from "react-router-dom";

import AddExpense from '../../components/add/AddExpense.components';

import EditExpense from '../../components/edit/EditExpense.component';

import ExpensesDashboard from '../../components/dashboard/ExpenseDashboard.component';

import ExpenseFooter from '../../components/layouts/ExpenseFooter.component';

import ExpenseHelpPage from '../../components/help/ExpenseHelpPage.component';

import ExpenseHeader from "../../components/layouts/ExpenseHeader.component";

import PageNotFound from '../../components/utilities/PageNotFound.component';

const AppRouter = () => (

  <Router>
    <ExpenseHeader />

    <Switch>
      <Route path="/" exact>
        <ExpensesDashboard />
      </Route>

      <Route path="/add">
        <AddExpense />
      </Route>

      <Route path="/edit/:id">
        <EditExpense />
      </Route>
      
      <Route path="/help">
        <ExpenseHelpPage />
      </Route>

      <Route>
          <PageNotFound />
      </Route>
    </Switch>

    <ExpenseFooter />

  </Router>

);

export default AppRouter;
