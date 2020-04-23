import React from 'react';
import {createStore, combineReducers} from "redux";

import { v4 as uuidV4 } from "uuid";
/**
 * Expenses
 *  Generators
 */

 //ADD_EXPENSE
 export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = undefined
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidV4(),
        description,
        note,
        amount,
        createdAt
    }
});

 //REMOVE_EXPENSE
export const removeExpense = ( {id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

 //EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});



 //SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

 //SORT_BY_DATE

 const sortByDate = () => ({
     type: "SORT_BY_DATE",
     sortBy: "date"
 })

 //SORT_BY_AMOUNT

 const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
})

 //SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

 //SET_END_DATE
 const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});


/**
 * Reducers
 */
//expenses reducer
 const expensesReducerDefaultState = [];

 const expensesReducer = ((state = expensesReducerDefaultState, action) => {

    switch(action.type) {
        case "ADD_EXPENSE":
        return [
            ...state,
            action.expense
        ];

        case "REMOVE_EXPENSE": 
        return state.filter(({ id }) => (
            action.id !== id
        ));

        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })

        default:
            return state;
    }

 });

//Filter reducer
 const filtersReducerDefaultState = {
    text: "",
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};



 const filtersReducer = ((state = filtersReducerDefaultState, action) => {

    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: action.sortBy
            }  
            
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy
            }  

        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };

        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }

 });


/**
* Store
*/
  const store = createStore(
      combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
      })
  );

  /**
   * Managing expenses and filters
   * get visisble expenses 
   */

   const getVisibleExpense = ( expenses, {
       text,
       sortBy,
       startDate,
       endDate
   } ) => {

    return expenses.filter( expense => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;

        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        } 
        if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1 
        }
        return 0;
    });
   };


  store.subscribe(() => {
    const {expenses, filters} = store.getState();

    const visibleExpenses= getVisibleExpense(expenses, filters);

    console.log(visibleExpenses);


  });

  /**
   * Dispatch actions
   */

//   const expenseOne = store.dispatch(addExpense({
//       description: "Rent",
//       amount: 100,
//       createdAt: 1000
//   }));

//   const expenseTwo = store.dispatch(addExpense({
//       description: "Monthly Shopping",
//       amount: 1500,
//       createdAt: -1000
//   }));

//   store.dispatch(removeExpense({
//       id: expenseOne.expense.id
//   }));

//   store.dispatch(editExpense(expenseTwo.expense.id, {
//       amount: 3000
//   }));

//   store.dispatch(setTextFilter("nt"));


//   store.dispatch(sortByAmount());
//   store.dispatch(sortByDate());

//   store.dispatch(setStartDate(899));
//   store.dispatch(setEndDate(1900));



const demoStore = {
    expenses: [{
        id: 'pooijoidsjoifjs',
        description: "January Rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: "rent",
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


