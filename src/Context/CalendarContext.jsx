import { createContext, useState } from "react";

export const CalendarContext = createContext(null);

const CalendarContextProvider = ({ children }) => {
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });


  return (
    <CalendarContext.Provider
      value={{
        selectedDates,
        setSelectedDates,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
