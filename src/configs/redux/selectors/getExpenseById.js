const getExpenseById = (expenses, { id }) => {
    return expenses.filter(expense => {
        return expense.id === id;
    }).shift()    
};
export default getExpenseById;