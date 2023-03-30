import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CalendarComponent from "./Calendar";
import { CalendarComponentWrapper } from "./Calendar.style";
function CheckInOutCalendar() {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [dateRange, setDateRange] = useState([]);
  const [disabledDatesCheckIn, setDisabledDatesCheckIn] = useState();
  // eslint-disable-next-line no-unused-vars
  const [disabledDatesCheckOut, setDisabledDatesCheckOut] = useState();
  const [checkInValue, setCheckInValue] = useState();
  const [checkOutValue, setCheckOutValue] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    getDisabledDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setCheckInDate(today);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    setCheckOutDate(tomorrow);
    setDateRange([today, tomorrow]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (checkInDate && checkOutDate && (checkInDate.getTime() < checkOutDate.getTime())) {
      setDateRange([new Date(checkInDate), new Date(checkOutDate)])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInDate, checkOutDate])

  useEffect(() => {
    const formattedDay = getFormateddDate(checkInDate);
    setCheckInValue(formattedDay);

    if (checkInDate && checkOutDate && checkInDate.getTime() >= checkOutDate.getTime()) {
      let day = new Date(checkInDate);
      let day2 = new Date();
      day2.setDate(day.getDate() + 1)
      setCheckOutDate(day2)
    }

    //if checkIn date changes, change the disabled days in checkoutCalendar
    setCheckOutCalendarDisabledDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInDate])

  useEffect(() => {
    setCheckOutValue(getFormateddDate(checkOutDate));
    if (checkInDate && checkOutDate && checkInDate.getTime() >= checkOutDate.getTime()) {
      let day = new Date(checkOutDate);
      let day2 = new Date();
      day2.setDate(day.getDate() - 1)
      setCheckInDate(day2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkOutDate])

  const getFormateddDate = (date1) => {
    const date = new Date(date1);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formatteddate = dd + '-' + mm + '-' + yyyy;
    return formatteddate;
  };

  // const disableThirtyOneDaysAgo = () => {
  //   const today = new Date();
  //   const thirtyOneDaysAgo = new Date();
  //   thirtyOneDaysAgo.setDate(today.getDate() - 31);
  //   const disabledDatesArray = [];
  //   for (let i = 0; i < 31; i++) {
  //     const date = new Date(thirtyOneDaysAgo);
  //     date.setDate(thirtyOneDaysAgo.getDate() + i);
  //     const formatedDay = getFormateddDate(date);
  //     disabledDatesArray.push(new Date(+formatedDay.split("-")[2], formatedDay.split("-")[1] - 1, +formatedDay.split("-")[0]));
  //   }
  //   setDisabledDatesCheckIn([...disabledDatesCheckIn, ...disabledDatesArray]);
  //   setDisabledDatesCheckOut([...disabledDatesCheckIn, ...disabledDatesArray]);

  // }

  const setCheckOutCalendarDisabledDates = () => {
    if(disabledDatesCheckIn && checkInDate){
      const firstDayDisabledAfterCheckIn = disabledDatesCheckIn.find((e) => e.getTime() > checkInDate);
      const disabledDatesArray = []
      for (let i = 0; i < 31; i++) {
        const date = new Date(firstDayDisabledAfterCheckIn);
        date.setDate(firstDayDisabledAfterCheckIn.getDate() + i);
        const formatedDay = getFormateddDate(date);
        disabledDatesArray.push(new Date(+formatedDay.split("-")[2], formatedDay.split("-")[1] - 1, +formatedDay.split("-")[0]));
      }
      setDisabledDatesCheckOut([...disabledDatesCheckOut, ...disabledDatesArray])
    }
  }

  const getDisabledDays = () => {
    // implement http request to get the disable days !!!!IMportant to be sorted and started from todays day, dont send the reservations before

    const days = [
      new Date(2023, 2, 29),
      new Date(2023, 2, 30),
      new Date(2023, 3, 2),
    ]

    const today = new Date();
    const thirtyOneDaysAgo = new Date();
    thirtyOneDaysAgo.setDate(today.getDate() - 31);
    const disabledDatesArray = [];
    for (let i = 0; i < 31; i++) {
      const date = new Date(thirtyOneDaysAgo);
      date.setDate(thirtyOneDaysAgo.getDate() + i);
      const formatedDay = getFormateddDate(date);
      disabledDatesArray.push(new Date(+formatedDay.split("-")[2], formatedDay.split("-")[1] - 1, +formatedDay.split("-")[0]));
    }
    setDisabledDatesCheckIn([...disabledDatesArray, ...days]);
    setDisabledDatesCheckOut([...disabledDatesArray, ...days]);
  }

  return (
    <CalendarComponentWrapper>
      <CalendarComponent
        label={t('check_in')}
        dateRange={dateRange}
        disabledDates={disabledDatesCheckIn}
        selecedDate={checkInDate}
        setSelectedDate={setCheckInDate}
        placeholderValue={checkInValue}
      />
      <CalendarComponent
        label={t('check_out')}
        dateRange={dateRange}
        disabledDates={disabledDatesCheckOut}
        selecedDate={checkOutDate}
        setSelectedDate={setCheckOutDate}
        placeholderValue={checkOutValue}
      />
    </CalendarComponentWrapper>
  )
}

export default CheckInOutCalendar;
