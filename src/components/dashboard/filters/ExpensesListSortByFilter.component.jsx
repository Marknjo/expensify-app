import React from "react";
import { sortByDate, sortByAmount } from "../../../configs/redux/actions/filtersGenerators";


const ExpensesListSortByFilter = (props) => (
    <li>
        &nbsp; Sort By: &nbsp;
        <select
            name="sort-by"

            defaultValue={props.filters.sortBy}

            onChange={(e) => {
                if (e.target.value === "date") {
                    props.dispatch(sortByDate())
                } else if (e.target.value === "amount") {
                    props.dispatch(sortByAmount())
                }
            }}
        >
            <option value="date"> Date</option>

            <option value="amount" > Amount</option>
        </select>
    </li>
);

export default ExpensesListSortByFilter;