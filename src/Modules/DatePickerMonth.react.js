'use strict';

import ClassNames from 'classnames';
import DatePickerWeek from './DatePickerWeek.react';
import PropTypes from 'prop-types';
import React from 'react';

class DatePickerMonth extends React.PureComponent {
    constructor() {
        super();

        this._onDayClick = this._onDayClick.bind(this);
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-month');

        return (
            <div className={containerClasses}>
                {this._renderWeeks()}
            </div>
        );
    }

    _isWeekInMonth(startOfWeek) {
        const { dateInView } = this.props;
        const endOfWeek = startOfWeek.clone().add(6, 'days');

        return startOfWeek.isSame(dateInView, 'month') || endOfWeek.isSame(dateInView, 'month');
    }

    _onDayClick(day) {
        const { onDayClick } = this.props;

        if (_.isFunction(onDayClick)) {
            onDayClick(day);
        }
    }

    _renderWeeks() {
        const {
            date,
            dateFrom,
            dateInView,
            dateTo,
            maxDate,
            minDate,
            mode,
        } = this.props;
        const startOfMonth = dateInView.clone().startOf('month').startOf('week');

        return _.map([0, 1, 2, 3, 4, 5], week => {
            const startOfWeek = startOfMonth.clone().add(week, 'weeks');

            return (
                <DatePickerWeek
                    date={date}
                    dateFrom={dateFrom}
                    dateInView={startOfWeek}
                    dateTo={dateTo}
                    key={week}
                    maxDate={maxDate}
                    minDate={minDate}
                    month={dateInView.month()}
                    onDayClick={this._onDayClick}
                    mode={mode}
                />
            );
        })
    }
}

DatePickerMonth.defaultProps = {
    date: {},
    dateFrom: {},
    dateTo: {},
    disabledDays: [],
    enabledDays: [],
    maxDate: {},
    minDate: {},
    mode: 'calendar',
};

DatePickerMonth.propTypes = {
    date: PropTypes.object,
    dateFrom: PropTypes.object,
    dateInView: PropTypes.object.isRequired,
    dateTo: PropTypes.object,
    disabledDays: PropTypes.array,
    enabledDays: PropTypes.array,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    mode: PropTypes.oneOf([ 'calendar', 'input' ]),
    onDayClick: PropTypes.func.isRequired,
};

export default DatePickerMonth;
