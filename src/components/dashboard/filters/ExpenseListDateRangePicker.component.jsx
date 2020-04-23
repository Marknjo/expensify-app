import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { setStartDate, setEndDate } from "../../../configs/redux/actions/filtersGenerators";

export default class ExpenseListDateRangePicker extends Component {
    state = {
        calenderFocused: null
    }

    handleDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    }

    handleFocusChange = calenderFocused => {
        this.setState(() => ({ calenderFocused }))
    }

    render() {
        return (
            <li>
                <DateRangePicker
                    startDateId="filter_start_date_id"
                    endDateId="filter_end_date_id"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.handleDateChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.handleFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </li>
        );
    }
}




