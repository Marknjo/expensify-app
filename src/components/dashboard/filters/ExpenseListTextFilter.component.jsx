import React from "react";

import { setTextFilter } from "../../../configs/redux/actions/filtersGenerators";

const ExpenseListTextFilter = (props) => (
    <li>
        Search: <input
            type="text"
            name="filterByText"
            id="filterByText"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
    </li>
);


export default ExpenseListTextFilter;