import React from 'react';
import { connect } from "react-redux";

import ExpenseListTextFilter from './ExpenseListTextFilter.component';
import ExpensesListSortByFilter from './ExpensesListSortByFilter.component';
import ExpenseListDateRangePicker from './ExpenseListDateRangePicker.component';


const ExpensesFilters = (props) => {
    const styleFilters = {
        display: "flex",
        listStyle: "none"
    };
    return (
        <div>
            <div>
                <p>Filter Details By</p>
            </div>
            <ul style={styleFilters}>
                <ExpenseListTextFilter {...props} />
                <ExpensesListSortByFilter {...props} />
                <ExpenseListDateRangePicker {...props} />
            </ul>
        </div >
    );
};


const mapStateToProps = ({ filters }) => ({
    filters
})

export default connect(mapStateToProps)(ExpensesFilters);