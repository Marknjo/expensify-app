import { v4 as uuidV4 } from "uuid";
/**
 * Expenses Action
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