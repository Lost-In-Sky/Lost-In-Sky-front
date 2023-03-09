import Calendar from "react-calendar"
import React, { useEffect, useState } from "react"
import 'react-calendar/dist/Calendar.css';
import hy from "./hy";
import { useSearchParams } from "react-router-dom";
import { CalendarWrapper } from "./Calendar.style";

function CalendarComponent() {
    const [searchParams] = useSearchParams();
  
    const [dateRange, setDateRange] = useState([]);
    //new Date(2023, 2, 15), new Date(2023, 2, 19)
    const [locale, setLocale] = useState(searchParams.get('lang') || "hy");
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();

    useEffect(() => {
      setLocale(searchParams.get('lang') || "hy");
    }, [searchParams.get('lang')])

    const disabledDates = [
        new Date(2023, 2, 8),
        new Date(2023, 2, 10),
        new Date(2023, 2, 11),
        new Date(2023, 2, 12)
    ];

    const handleCheckInDate = (date) => {
      setCheckInDate(date);
    }

    const handleCheckOutDate = (date) => {
      setCheckOutDate(date);
    }

    useEffect(() => {
      if(checkInDate && checkOutDate){
        setDateRange([checkInDate, checkOutDate])
      }
    },[checkInDate,checkOutDate])
    const isDateDisabled = (date) => {
        return disabledDates.some(disabledDate =>
            disabledDate.getTime() === date.date.getTime()
        );
    }
    console.log(dateRange);
    return (
        <CalendarWrapper>
          {dateRange && <p>asd</p>}
            <Calendar
                // value={dateRange ? dateRange : ''}
                onChange={handleCheckInDate}
                tileDisabled={isDateDisabled}
                locale={locale}
                formatShortWeekday={locale === 'hy' ? (locale, value) =>
                    hy.weekdaysShort[value.getDay()] : undefined
                  }
                formatMonthYear={locale === 'hy' ? (locale, value) =>
                    `${hy.months[value.getMonth()]} ${value.getFullYear()}` : undefined
                  }
                formatWeekday={locale === 'hy' ? (locale, value) =>
                    hy.weekdaysLong[value.getDay()] : undefined
                  }
            />
            <Calendar
                // value={dateRange}
                onChange={handleCheckOutDate}
                tileDisabled={isDateDisabled}
                locale={locale}
                formatShortWeekday={locale === 'hy' ? (locale, value) =>
                    hy.weekdaysShort[value.getDay()] : undefined
                  }
                formatMonthYear={locale === 'hy' ? (locale, value) =>
                    `${hy.months[value.getMonth()]} ${value.getFullYear()}` : undefined
                  }
                formatWeekday={locale === 'hy' ? (locale, value) =>
                    hy.weekdaysLong[value.getDay()] : undefined
                  }
            />
        </CalendarWrapper>
    )
}

export default CalendarComponent
