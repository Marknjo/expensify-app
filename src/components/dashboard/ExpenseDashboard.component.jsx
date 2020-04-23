import React from "react";
import ExpensesList from "./list/ExpensesList.component";
import ExpensesFilters from "./filters/ExpensesFilters.component";


const ExpensesDashboard = () => (
    <div>
        <h2> Expensify Dashboard </h2>
        <h3>List of Expenses</h3>
        <ExpensesFilters />
        <ExpensesList />
    </div>
);

export default ExpensesDashboard;