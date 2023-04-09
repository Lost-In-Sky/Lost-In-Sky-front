import { createContext, useState, useEffect } from "react";

export const RoomContext = createContext(null);

const RoomContextProvider = ({ children }) => {
  const [room, setRoom] = useState(
    JSON.parse(localStorage.getItem("myContextData")) || {}
  );
  const [showModal, setShowModal] = useState(false);
  const [service,setService] = useState(localStorage.getItem("service",[]))
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const [cottages, setCottages] = useState( JSON.parse(localStorage.getItem("cottages")) || []);
  useEffect(() => {
    localStorage.setItem("myContextData", JSON.stringify(room));
  }, [room]);
  useEffect(() => {
    localStorage.setItem("cottages", JSON.stringify(cottages));
  }, [cottages]);
  useEffect(()=>{
    localStorage.setItem("services",JSON.stringify(service))
  },[service])


  return (
    <RoomContext.Provider
      value={{
        room,
        showModal,
        setShowModal,
        setService,
        service,
        setRoom,
        cottages,
        setCottages,
        selectedDates,
        setSelectedDates,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;