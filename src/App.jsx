import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contacts/Contacts";
import CardPage from "./components/CardPage/CardPage";
import { Routes, Route } from "react-router-dom";
import RoomContextProvider from "./Context/RoomsContext";
import Gallery from "./components/Gallery/Gallery";
import Booking from "./components/Booking/Booking";
import CalendarContextProvider from "./Context/CalendarContext";

function App() {
  return (
    <CalendarContextProvider>
    <RoomContextProvider>
      <Navbar />
      <Routes>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<CardPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </RoomContextProvider>
    </CalendarContextProvider>
  );
}

export default App;