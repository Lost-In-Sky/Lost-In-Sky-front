import Calendar from "react-calendar"
import React, { useEffect, useState, useTransition } from "react"
import 'react-calendar/dist/Calendar.css';
import hy from "./hy";

function CalendarComponent() {
    // NEED to implement the language query to get the current language and change the calendar language


    const [dateRange, setDateRange] = useState([]);

    const disabledDates = [
        new Date(2023, 2, 7),
        new Date(2023, 2, 10),
        new Date(2023, 2, 11),
        new Date(2023, 2, 12)
    ];

    const handleRangeSelection = (dateRange) => {
        setDateRange(dateRange);
    }

    const isDateDisabled = (date) => {
        return disabledDates.some(disabledDate =>
            disabledDate.getTime() === date.date.getTime()
        );
    }

    return (
        <div>
            <Calendar
                selectRange={true}
                onChange={handleRangeSelection}
                tileDisabled={isDateDisabled}
                locale={hy.locale}
                formatShortWeekday={(locale, value) =>
                    hy.weekdaysShort[value.getDay()]
                  }
                formatMonthYear={(locale, value) =>
                    `${hy.months[value.getMonth()]} ${value.getFullYear()}`
                  }
                formatWeekday={(locale, value) =>
                    hy.weekdaysLong[value.getDay()]
                  }
            />
        </div>
    )
}

export default CalendarComponent
