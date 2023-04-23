import React, { useContext, useState, useEffect } from "react";
import {
  BookingWrapper,
  ContentWrapper,
  BookingTitle,
  TextContent,
  CalendarWrapper,
} from "./Booking.style";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import api from "../../helpers/api";
import CalendarComponent from "../Calendar/Calendar";
import { Modal } from "@mui/material";
import ContactForm from "../ContactForm/ContactForm";
import { Button } from "@mui/material";
import { RoomContext } from "../../Context/RoomsContext";

const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].startsWith("MUI: You have provided an out-of-range value")
  ) {
    return;
  }
  originalWarn(...args);
};

const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const { selectedDates, setRoom, setSelectedDates } = useContext(RoomContext);
  const [selectedDateError, setSelectedDateError] = useState(false);
  const [cottages, setCottages] = useState([]);
  const [cottage, setCottage] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBooking = () => {
    if (!selectedDates.startDate) {
      setSelectedDateError(true);

      return;
    }
    setShowModal(true);
  };
  useEffect(() => {
    (async () => {
      const { data } = await api("get", "cottage");
      setCottages(data);
    })();
  }, []);
  const handleChange = (event) => {
    setCottage(event.target.value);
    setRoom(event.target.value);
    setShowCalendar(true);
  };

  return (
    <BookingWrapper>
      <ContentWrapper>
        <BookingTitle>Booking</BookingTitle>
        <TextContent>
          <p>
            To book a cottage, 100% prepayment is required. In case of
            cancellation or no-show, the amount will not be refunded.
          </p>
          <p>
            The reservation is kept for 20 min, in case of non-payment, it is
            automatically canceled.
          </p>
          <p>
            Start price is for 2 persons. Pls choose an additional bed for every
            additional person.
          </p>
          <p>Children under 12 years old are not allowed.</p>
          <p>Pets are not allowed at the hotel.</p>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cottage</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cottage}
                label="Cottage"
                onChange={handleChange}
              >
                {cottages.map((cottage) => (
                  <MenuItem key={cottage.id} value={cottage}>
                    {cottage.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </TextContent>
        {showCalendar && cottage.id ? (
          <CalendarWrapper>
            <CalendarComponent
              selectedDateError={selectedDateError}
              setSelectedDateError={setSelectedDateError}
              cottageId={cottage.id}
            />
            <Button
              variant="contained"
              style={{
                height: "3rem",
                fontWeight: " bold",
                marginTop: "2rem",
              }}
              onClick={handleBooking}
            >
              Check pricing and Book here
            </Button>
            <Modal
              open={showModal}
              onClose={() => setShowModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              BackdropProps={{
                onClick: () => setShowModal(false),
              }}
              sx={{
                width: "500px",
                margin: "0 auto",
                "@media (max-width: 600px)": {
                  width: "88%",
                },
              }}
            >
              <Box>
                <ContactForm
                  selectedDates={selectedDates}
                  setShowModal={setShowModal}
                  cottage={cottage}
                />
              </Box>
            </Modal>
            <p>Check-in 14:00</p>
            <p>Check-out 12:00</p>
          </CalendarWrapper>
        ) : (
          <></>
        )}
      </ContentWrapper>
    </BookingWrapper>
  );
};

export default Booking;
