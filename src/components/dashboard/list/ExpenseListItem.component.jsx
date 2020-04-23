import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { removeExpense } from "../../../configs/redux/actions/expensesGenerators";
import { Link } from "react-router-dom";
import { findById } from "../../../configs/redux/actions/filtersGenerators";

const ExpenseListItem = (props) => {
    const curLink = `edit/${props.id}`;
    const linkStyle = {
        backgroundColor: "#dbdbdb", 
        border: "1px solid #82888a",
        borderRadius:"2px", 
        color: "#000", 
        padding: "1px 8px", 
        textDecoration: "none"
    }
    const amount = (props.amount/100).toLocaleString('en-US', { style: 'currency', currency: 'KES' })
    return (
        <tr>
            <td>{props.count}</td>
            <td>{props.description}</td>
            <td>{props.note}</td>
            <td>{amount}</td>
            <td>{ moment(props.createdAt).format("MMM Do, YYYY") }</td>
            <td>
                <button 
                    onClick={() => (
                        props.dispatch(removeExpense({id: props.id}))
                    )}
                >Delete</button>  
                 &nbsp; | &nbsp;
                <Link
                    to={curLink}
                    style={linkStyle}
                    onClick={() => {
                        props.dispatch(findById(props.id));
                    }}
                > Edit </Link>
            </td>
        </tr>
    )
};


export default connect()(ExpenseListItem);