import { createContext, useState, useEffect } from "react";

export const RoomContext = createContext(null);

const RoomContextProvider = ({ children }) => {
  const [room, setRoom] = useState(
    JSON.parse(localStorage.getItem("myContextData")) || {}
  );
  useEffect(() => {
    localStorage.setItem("myContextData", JSON.stringify(room));
  }, [room]);

  return (
    <RoomContext.Provider
      value={{
        room,
        setRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
