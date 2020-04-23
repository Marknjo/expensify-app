import React from "react";
import {NavLink} from "react-router-dom";

const ExpenseHeader = () => (
    <header>
      <h1> Expensify App </h1>
      <nav>
        <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
        &nbsp;
        <NavLink to="/add"  activeClassName="is-active">Add Expense</NavLink>
        &nbsp;
        <NavLink to="/help"  activeClassName="is-active">Help</NavLink>
      </nav>
    </header>
  );


  export default ExpenseHeader;
