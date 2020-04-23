import React from "react";
import { Link } from "react-router-dom";

const ExpenseFooter = () => (
    <footer>
        <p> <sup>&copy;</sup>Copyright, <Link to="/">Expensify App</Link> {(new Date().getFullYear())} </p>
    </footer>
);


export default ExpenseFooter;