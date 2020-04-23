import React from "react";
import ExpenseForm from "../form/ExpenseForm.component";
import { connect } from "react-redux";
import { addExpense } from "../../configs/redux/actions/expensesGenerators";

const AddExpense = (props) => (
    <div>
        <h2> Add Expense </h2>
        <ExpenseForm
           
            handleSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                return true;
            }}
        />
        
    </div>
);

export default connect()(AddExpense);