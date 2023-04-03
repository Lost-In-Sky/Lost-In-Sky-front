import { createContext, useState, useEffect } from "react";

export const RoomContext = createContext(null);

const RoomContextProvider = ({ children }) => {
  const [room, setRoom] = useState(
    JSON.parse(localStorage.getItem("myContextData")) || {}
  );
  const [showModal, setShowModal] = useState(false);

  const [cottages, setCottages] = useState( JSON.parse(localStorage.getItem("cottages")) || []);
  useEffect(() => {
    localStorage.setItem("myContextData", JSON.stringify(room));
  }, [room]);
  useEffect(() => {
    localStorage.setItem("cottages", JSON.stringify(cottages));
  }, [cottages]);


  return (
    <RoomContext.Provider
      value={{
        room,
        showModal,
        setShowModal,
        setRoom,
        cottages,
        setCottages,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
