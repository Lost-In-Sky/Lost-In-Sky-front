export default {
  locale: 'hy',
  months: [
    'Հունվար',
    'Փետրվար',
    'Մարտ',
    'Ապրիլ',
    'Մայիս',
    'Հունիս',
    'Հուլիս',
    'Օգոստոս',
    'Սեպտեմբեր',
    'Հոկտեմբեր',
    'Նոյեմբեր',
    'Դեկտեմբեր'
  ],
  weekdaysShort: ['Կիր', 'Երկ', 'Երք', 'Չոր', 'Հնգ', 'Ուրբ', 'Շաբ'],
  weekdaysLong: [
    'Կիրակի',
    'Երկուշաբթի',
    'Երեքշաբթի',
    'Չորեքշաբթի',
    'Հինգշաբթի',
    'Ուրբաթ',
    'Շաբաթ'
  ],
};
// CheckInOutCalendar.jsx
import { useEffect, useState } from "react";
import CalendarComponent from "./Calendar";
import { CalendarComponentWrapper } from "./Calendar.style";
function CheckInOutCalendar () {
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [dateRange, setDateRange] = useState([]);
    const [disabledDates, setDisabledDates] = useState([
        // new Date(2023, 2, 7),
        // new Date(2023, 2, 8),
        // // new Date(2023, 2, 10),
        // // new Date(2023, 2, 11),
        // new Date(2023, 2, 12)
    ]);
    const [checkInValue, setCheckInValue] = useState();
    const [checkOutValue, setCheckOutValue] = useState();

    useEffect(() => {
        const today = new Date();
        setCheckInDate(today);
        let tomorrow =  new Date();
        tomorrow.setDate(today.getDate() + 1);
        setCheckOutDate(tomorrow);
        setDateRange([today, tomorrow]);
    },[])

    useEffect(() => {
        if (checkInDate && checkOutDate && (checkInDate.getTime() < checkOutDate.getTime())) {
            setDateRange([new Date(checkInDate), new Date(checkOutDate)])
        }
    }, [checkInDate, checkOutDate])

    useEffect(() => {
        const date = new Date(checkInDate);
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setCheckInValue(formattedToday);
        if(checkInDate && checkOutDate && checkInDate.getTime() >= checkOutDate.getTime()){
            let day = new Date(checkInDate);
            let day2 = new Date();
            day2.setDate(day.getDate() + 1)
            setCheckOutDate(day2)
        }
    }, [checkInDate])
    useEffect(() => {
        const date = new Date(checkOutDate);
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setCheckOutValue(formattedToday);
        if(checkInDate && checkOutDate && checkInDate.getTime() >= checkOutDate.getTime()){
            let day = new Date(checkOutDate);
            let day2 = new Date();
            day2.setDate(day.getDate() - 1)
            setCheckInDate(day2)
        }
    }, [checkOutDate])
    return(
        <CalendarComponentWrapper>
            <CalendarComponent 
                label="Check In:"
                dateRange={dateRange}
                disabledDates={disabledDates}
                selecedDate={checkInDate}
                setSelectedDate={setCheckInDate}
                placeholderValue={checkInValue}
            />
            <CalendarComponent 
                label="Check Out:"
                dateRange={dateRange}
                disabledDates={disabledDates}
                selecedDate={checkOutDate}
                setSelectedDate={setCheckOutDate}
                placeholderValue={checkOutValue}
            />
        </CalendarComponentWrapper>
    )
}

export default CheckInOutCalendar
