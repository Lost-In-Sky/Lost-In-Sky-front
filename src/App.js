import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contacts/Contacts";
import CardPage from "./components/CardPage/CardPage";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/room:" element={<CardPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
