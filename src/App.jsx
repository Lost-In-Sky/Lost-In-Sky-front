import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contacts/Contacts";
import CardPage from "./components/CardPage/CardPage";
import { Routes, Route } from "react-router-dom";
import RoomContextProvider from "./Context/RoomsContext";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <RoomContextProvider>
      <Navbar />
      <Routes>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<CardPage />} />
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>

      <Footer />
    </RoomContextProvider>
  );
}

export default App;
