import moment from "moment";
/**
 * Filter reducer
 */

const filtersReducerDefaultState = {
    id: true,
    text: "",
    sortBy: 'date', 
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};


export default ((state = filtersReducerDefaultState, action) => {

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
        
        case "FIND_BY_ID":
            return {
                ...state,
                id: action.id
            }

        default:
            return state;
    }

 });