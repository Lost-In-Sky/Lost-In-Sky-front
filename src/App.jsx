import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contacts/Contacts";
import CardPage from "./components/CardPage/CardPage";
import { Routes, Route } from "react-router-dom";
import RoomContextProvider from "./Context/RoomsContext";

function App() {
  return (
    <RoomContextProvider>
      <Navbar />
      <Routes>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<CardPage />} />
      </Routes>
      <Footer />
    </RoomContextProvider>
  );
}

export default App;
