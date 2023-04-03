import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { CalendarComponentWrapper } from './Calendar.style';

const DateRangePickerDemo = ({ onSubmit }) => {
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [disabledDates, setDisabledDates] = useState([]);

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
      const days = [];

      data.forEach(({ checkIn, checkOut }) => {
        const startDate = new Date(checkIn);
        const endDate = new Date(checkOut);
        endDate.setDate(endDate.getDate() - 1);

        const daysDiff = (endDate - startDate) / (1000 * 60 * 60 * 24); // Number of days between the two dates
      
        for (let i = 0; i <= daysDiff; i++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(currentDate.getDate() + i);
          days.push(currentDate); // Push the date to the `days` array
        }
      });
      setDisabledDates(days);
      // const checkIn = new Date();
      // checkIn.setHours(0, 0, 0, 0);
      // const checkOut = new Date(checkIn);
      // checkOut.setDate(checkOut.getDate() + 1);
      // setDateRange([checkIn, checkOut]);
      // console.log(days,11111111111);

    }

    getDisabledDates();
  }, [])
  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    // Check if date is before today
    if (date.date < today) {
      return true;
    }

    return disabledDates.some(disabledDate => {
      return disabledDate.getTime() === date.date.getTime()
    }
    );
  }
  const handleDateClick = (date) => {
    if (selectedRange.startDate && !selectedRange.endDate) {
      if (date >= selectedRange.startDate) {
        const range = { ...selectedRange, endDate: date };
        if (disabledDates.some(d => d >= range.startDate && d <= range.endDate)) {
          // Range includes disabled dates, do not update state
          return;
        }
        setSelectedRange(range);
        console.log(range);
      } else {
        setSelectedRange({ startDate: date, endDate: null });
      }
    } else {
      setSelectedRange({ startDate: date, endDate: null });
    }
  };
  


  return (
    <CalendarComponentWrapper>
      <Calendar
        value={[selectedRange.startDate, selectedRange.endDate]}
        onClickDay={handleDateClick}
        tileDisabled={isDateDisabled}
      />
    </CalendarComponentWrapper>
  );
};

export default DateRangePickerDemo;
