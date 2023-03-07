import Calendar from "react-calendar"
import React, { useEffect, useState } from "react"
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {

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
        locale="ru-RU"
      />
    </div>
  )
}

export default CalendarComponent
