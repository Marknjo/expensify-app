import React from "react";
import {useParams, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import ExpenseForm from "../form/ExpenseForm.component";
import { editExpense, removeExpense } from "../../configs/redux/actions/expensesGenerators";
import getExpenseById from "../../configs/redux/selectors/getExpenseById";

const EditExpense = (props) => {
    const { id } = useParams();
    console.log();
    
     const expenseToEdit = props.expense
     
    
    if (expenseToEdit) {
        return (
            <div>
                <h2> Edit An Expense </h2>
                
                <ExpenseForm expenseToEdit={ expenseToEdit } handleSubmit={(expenses) => {
                    //update the forms
                    props.dispatch(editExpense(id, expenses));
                }} />
                
                <button onClick={()=>{
                    props.dispatch(removeExpense({id}));
                }
                } >Remove Expense</button>
            </div>
        )
    } else {
        return (
            <Redirect push to="/" />
        )
    }

   
    
};




//const mapStateToProps = ({ expenses }) => ({ expenses });

const mapStateToProps = ({ expenses, filters }) => ({ expense: getExpenseById(expenses, filters) });

export default connect(mapStateToProps)(EditExpense);