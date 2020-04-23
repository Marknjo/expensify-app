import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import BuildErrorMessages from "../utilities/BuildErrorMessages.component";




export default class ExpenseForm extends Component {
    state = {
        description: this.props.expenseToEdit ? this.props.expenseToEdit.description : "",
        amount: this.props.expenseToEdit ? (this.props.expenseToEdit.amount/100).toString() : "0.00",
        note: this.props.expenseToEdit ? this.props.expenseToEdit.note : "",
        createdAt: this.props.expenseToEdit ? moment(this.props.expenseToEdit.createdAt) : moment(),
        calenderFocused: false,
        messagesContainer: [],
        isFormSubmitSuccessful: false
    }

    addMessageToContainer = (messageArrays = [],  message="", messageType="success") => {
        //Set amount error
        this.setState((prevState) => {
            //Don't add another message in the 
            //container if there is already another one
            //If none, add
            if (!messageArrays.includes(message)) {
                const messagesContainer = prevState.messagesContainer.concat({
                    message,
                    type: messageType
                });
                return {
                    messagesContainer
                }
            }
        });
    }

    clearMessageInContainer = (messageArrays = [],  message="") => {
        //Clear the message in the que after there is no error
        if (messageArrays.includes(message)) {
            this.setState((prevState) => {
                const messagesContainer = prevState.messagesContainer.filter(messageObj => (message !== messageObj.message));
                return {
                    messagesContainer
                }
            });
        }
    }


    handleAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let formErrors = false; // tracks errors, it's messy.
        const descriptionError = "Description required to proceed.";
        const amountError = "Amount required to proceed.";
        //To ease check, put messages in message container to array for checking with includes 
        const messagesInContainerToArray = this.state.messagesContainer.map(messageObj  => (messageObj.message)); 
        /**
         * Validate Description
         */
        if (!this.state.description) {
            this.addMessageToContainer(messagesInContainerToArray, descriptionError, "error");
            formErrors = true;
        } else {
            this.clearMessageInContainer(messagesInContainerToArray, descriptionError);
        }

        /**
         * Validate Amount
         */
        const amount = parseFloat(this.state.amount) * 100;
        if (isNaN(amount) || amount === 0) {
            this.addMessageToContainer(messagesInContainerToArray, amountError, "error");
            formErrors = true;
        } else {
            this.clearMessageInContainer(messagesInContainerToArray, amountError);
        }

        /**
         * If there are no errors
         * (All validations passes) 
         * in the errors array,
         * Data is sanitized for submission
         */
        if (!formErrors) {
            const expense = {
                description: this.state.description.trim(),
                amount,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            }

            this.props.handleSubmit(expense);

            /**
             * Enable Redirect 
             * if form is submitted 
             * successfully 
             */
            this.setState(prevState => ({
                isFormSubmitSuccessful: !prevState.isFormSubmitSuccessful
            }))

        }
    }

    handleNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        })
    }

    handleDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }


    render() {
        const formStyles = {
            display: "flex",
            flexFlow: "column nowrap",
            width: "50%"
        }

        return (
            <div>
               <BuildErrorMessages messages={this.state.messagesContainer} />

                <form style={formStyles} onSubmit={this.handleFormSubmit}>
                    <label htmlFor="expense-description">
                        Description:
                        <input
                            type="text" name="description" id="expense-description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </label>

                    <label htmlFor="">
                        Amount:
                         <input
                            type="text" name="amount" id="expense-amount"
                            value={this.state.amount}

                            onChange={this.handleAmountChange}
                        />
                    </label>

                    <SingleDatePicker
                        date={this.state.createdAt}

                        onDateChange={this.handleDateChange}

                        focused={this.state.calenderFocused}

                        onFocusChange={this.handleFocusChange}

                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        name="note" id="expense-note" cols="30"
                        ows="10"

                        value={this.state.note}

                        onChange={this.handleNoteChange}
                        placeholder="Add a Note for your expense (Optional)"
                    ></textarea>

                    <button type="submit"> {this.props.expenseToEdit ? "Edit" : "Add"} A Note</button>
                </form>

                {this.state.isFormSubmitSuccessful && <Redirect push to="/" />}
            </div>
        )
    }
}