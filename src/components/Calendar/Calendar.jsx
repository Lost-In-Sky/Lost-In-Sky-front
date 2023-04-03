import Calendar from "react-calendar"
import React, { useEffect, useRef, useState } from "react"
import 'react-calendar/dist/Calendar.css';
import hy from "./hy";
import { useSearchParams } from "react-router-dom";
import { CalendarWrapper, Wrapper } from "./Calendar.style";
import PropTypes from 'prop-types'
import { getReservationById } from "../../services/reservation";

function CalendarComponent() {
  const [dateRange, setDateRange] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const pathname = window.location.pathname;

  const [searchParams] = useSearchParams();
  const calendarRef = useRef(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [locale, setLocale] = useState(searchParams.get('lang') || "hy");

  useEffect(() => {
    async function getDisabledDates() {
      // Backy chi ashxatum Dzel!!!
      // const id = pathname.slice(-1);
      // const data = await getReservationById(id);
      const data = [
        {
          checkIn: 'Sun Apr 02 2023 00:00:00 GMT+0400 (Armenia Standard Time)',
          checkOut: 'Sun Apr 06 2023 00:00:00 GMT+0400 (Armenia Standard Time)'
        },
        {
          checkIn: 'Sun Apr 10 2023 00:00:00 GMT+0400 (Armenia Standard Time)',
          checkOut: 'Sun Apr 13 2023 00:00:00 GMT+0400 (Armenia Standard Time)'
        }
      ]
      // console.log(data, 'aaaaaaaaaa');
      const days = [];

      data.forEach(({ checkIn, checkOut }) => {
        const startDate = new Date(checkIn);
        const endDate = new Date(checkOut);
      
        const daysDiff = (endDate - startDate) / (1000 * 60 * 60 * 24); // Number of days between the two dates
      
        for (let i = 0; i <= daysDiff; i++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(currentDate.getDate() + i);
          days.push(currentDate.toDateString()); // Push the date to the `days` array
        }
      });
      
      const checkIn = new Date();
      checkIn.setHours(0, 0, 0, 0);
      const checkOut = new Date(checkIn);
      checkOut.setDate(checkOut.getDate() + 1);
      setDateRange([checkIn, checkOut]);
      // console.log(days,11111111111);

    }

    getDisabledDates();
  }, [])
  useEffect(() => {
    setLocale(searchParams.get('lang') || "hy");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('lang')])

  const getDisabledDates = async () => {
    const data = await getReservationById(2);
    // console.log(data, 'aaaaaaaaaa');
  }

  const handleDateSelect = (date) => {
    if (dateRange.length === 2) {
      setDateRange([date]);
    } else if (dateRange.length === 1) {
      if (date > dateRange[0]) {
        setDateRange([dateRange[0], date]);
      } else {
        setDateRange([date, dateRange[0]]);
      }
    } else {
      setDateRange([date]);
    }

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
      <input
        type="text"
        id="date_in"
        required=""
        name="date_in"
        size="35"
        value={'placeholderValue'}
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

// CalendarComponent.defaultProps = {
//     label: null,
//     dateRange: [],
//     disabledDates: [],
//     selecedDate: null,
//     setSelectedDate: () => {},
//     placeholderValue: ''
// };

// CalendarComponent.propTypes = {
//     placeholderValue: PropTypes.string,
//     label: PropTypes.string,
//     dateRange: PropTypes.arrayOf(PropTypes.any),
//     disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
//     selecedDate: PropTypes.instanceOf(Date),
//     setSelectedDate: PropTypes.func
// };

export default CalendarComponent

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function CalendarComponent() {
//   const [selectedRange, setSelectedRange] = useState([]);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const handleDateSelect = (date) => {
//     if (selectedRange.length === 2) {
//       setSelectedRange([date]);
//     } else if (selectedRange.length === 1) {
//       if (date > selectedRange[0]) {
//         setSelectedRange([selectedRange[0], date]);
//       } else {
//         setSelectedRange([date, selectedRange[0]]);
//       }
//     } else {
//       setSelectedRange([date]);
//     }
//   };

//   const openCalendar = () => {
//     setIsCalendarOpen(true);
//   };

//   const closeCalendar = () => {
//     setIsCalendarOpen(false);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={
//           selectedRange.length === 2
//             ? `${selectedRange[0].toLocaleDateString()} - ${selectedRange[1].toLocaleDateString()}`
//             : ''
//         }
//         onFocus={openCalendar}
//         readOnly
//       />
//       {isCalendarOpen && (
//         <div style={{ position: 'relative' }}>
//           <div
//             style={{
//               position: 'fixed',
//               top: 0,
//               right: 0,
//               bottom: 0,
//               left: 0,
//             }}
//             onClick={closeCalendar}
//           />
//           <Calendar
//             selectRange={true}
//             value={selectedRange}
//             onChange={handleDateSelect}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CalendarComponent;
