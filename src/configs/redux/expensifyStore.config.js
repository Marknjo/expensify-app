import {createStore, combineReducers} from "redux";

import expensesReducer from "./reducers/expensesReducer";
import filtersReducer from "./reducers/filtersReducers";

const expensifyStore = () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default expensifyStore;