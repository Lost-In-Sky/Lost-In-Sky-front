import Calendar from "react-calendar"
import React, { useEffect, useRef, useState } from "react"
import 'react-calendar/dist/Calendar.css';
import hy from "./hy";
import { useSearchParams } from "react-router-dom";
import { CalendarWrapper, Wrapper } from "./Calendar.style";
import PropTypes from 'prop-types'

function CalendarComponent({ dateRange, disabledDates, selecedDate, setSelectedDate, label, placeholderValue }) {
    const [searchParams] = useSearchParams();
    const calendarRef = useRef(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [locale, setLocale] = useState(searchParams.get('lang') || "hy");

    useEffect(() => {
        setLocale(searchParams.get('lang') || "hy");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams.get('lang')])

    const handleDateSelect = (date) => {
        setSelectedDate(date);

        if(label === 'Check In:')
            setIsCalendarOpen(false);
    }

    const isDateDisabled = (date) => {
        return disabledDates.some(disabledDate => {
          return disabledDate.getTime() === date.date.getTime()
        }
        );
    }

    const openCalendar = () => {
        setIsCalendarOpen(true);
    }

    const closeCalendar = () => {
        setIsCalendarOpen(false);
      };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            closeCalendar();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Wrapper>
            <label>{label}:</label>
            <input 
                type="text" 
                id="date_in" 
                required="" 
                name="date_in" 
                size="35" 
                value={placeholderValue}
                readOnly
                onClick={openCalendar}
                />
            <CalendarWrapper ref={calendarRef}>
                {isCalendarOpen && 
                <Calendar
                    value={dateRange}
                    onChange={handleDateSelect}
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
            }
            </CalendarWrapper>
        </Wrapper>

    )
}

CalendarComponent.defaultProps = {
    label: null,
    dateRange: [],
    disabledDates: [],
    selecedDate: null,
    setSelectedDate: () => {},
    placeholderValue: ''
};
  
CalendarComponent.propTypes = {
    placeholderValue: PropTypes.string,
    label: PropTypes.string,
    dateRange: PropTypes.arrayOf(PropTypes.any),
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    selecedDate: PropTypes.instanceOf(Date),
    setSelectedDate: PropTypes.func
};

export default CalendarComponent
