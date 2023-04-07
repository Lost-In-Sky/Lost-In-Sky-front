import { Alert } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSearchParams } from 'react-router-dom';
import api from '../../helpers/api';
import { CalendarWrapper, Wrapper } from './Calendar.style';
import hy from "./hy";
import PropTypes from 'prop-types';
import { RoomContext } from '../../Context/RoomsContext';
import { useTranslation } from 'react-i18next';

const CalendarComponent = ({ selectedDateError, setSelectedDateError }) => {
  const [disabledDates, setDisabledDates] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [locale, setLocale] = useState(searchParams.get('lang') || "hy");
  const [showError, setShowError] = useState(false);
  const { setSelectedDates, selectedDates } = useContext(RoomContext);
  const pathname = window.location.pathname;
  const { t } = useTranslation();

  useEffect(() => {
    setLocale(searchParams.get('lang') || "hy");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('lang')])

  useEffect(() => {
    async function getDisabledDates() {
      const id = pathname.slice(-1);
      const { data } = await api("get", `reservation/cottage/${id}`);

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
    }

    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        closeCalendar();
      }
    };

    getDisabledDates();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
    setShowError(false);
    if (selectedDates.startDate && !selectedDates.endDate) {
      if (date >= selectedDates.startDate) {
        const range = { ...selectedDates, endDate: date };
        if (disabledDates.some(d => d >= range.startDate && d <= range.endDate)) {
          // Range includes disabled dates, do not update state
          setShowError(true);
          return;
        }
        setSelectedDates(range);
      } else {
        setSelectedDates({ startDate: date, endDate: null });
      }
    } else {
      setSelectedDates({ startDate: date, endDate: null });
    }
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
    setSelectedDateError(false);
  }

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  }

  return (
    <>
      {showError && <Alert severity="error" sx={{
        width: '90%',
        margin: '5px auto',
        placeContent: 'center',
      }}>{t('wrong_input')}!</Alert>}
     {selectedDateError && <Alert severity="error" sx={{
        width: '90%',
        margin: '5px auto',
        placeContent: 'center',
      }}>{t('select_dates')}!</Alert>}
      <Wrapper>
        <input
          type="text"
          id="date_in"
          required=""
          name="date_in"
          size="35"
          value={t('calendar_placeholder')}
          readOnly
          onClick={openCalendar}
        />
        <CalendarWrapper ref={calendarRef}>
          {isCalendarOpen &&
            <Calendar
              value={[selectedDates.startDate, selectedDates.endDate]}
              onClickDay={handleDateClick}
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
            />}
        </CalendarWrapper>
      </Wrapper>
    </>
  );
};

CalendarComponent.defaultProps = {
  selectedDateError: false,
  setSelectedDateError: () => {},
};

CalendarComponent.propTypes = {
  selectedDateError: PropTypes.bool,
  setSelectedDateError: PropTypes.func,
};

export default CalendarComponent;
