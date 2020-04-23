import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem.component";
import getVisibleExpenses from "../../../configs/redux/selectors/getVisibleExpenses";


const ExpensesList = (props) => (
    <div>
        <table>
            <thead>
                <tr>  
                    <th>#</th>
                    <th>Description</th>
                    <th>Note</th>
                    <th>Amount</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.expenses.map((expense, index) =>
                        (<ExpenseListItem key={expense.id}
                            count={index + 1}
                            {...expense}
                        />))
                }
            </tbody>
        </table>
    </div>
);

const mapStateToProps = ({expenses, filters}) => ({
    expenses: getVisibleExpenses(expenses, filters)
})



export default connect(mapStateToProps)(ExpensesList);