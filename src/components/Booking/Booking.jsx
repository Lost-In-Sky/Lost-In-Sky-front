import React, { useContext, useState } from "react";
import {
  BookingWrapper,
  ContentWrapper,
  BookingTitle,
  TextContent,
  CalendarBook,
} from "./Booking.style";
import { RoomContext } from "../../Context/RoomsContext";
import CheckInOutCalendar from "../Calendar/CheckInOutCalendar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Booking = () => {
  const { cottages } = useContext(RoomContext);
  const [age, setAge] = useState(""); 

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
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
                value={age}
                label="Cottage"
                onChange={handleChange}
              >
                {cottages.map((cottage) => (
                  <MenuItem
                    key={cottage.id}
                    value={cottage.id}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  >
                    {cottage.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <CheckInOutCalendar />
        </TextContent>
      </ContentWrapper>
    </BookingWrapper>
  );
};

export default Booking;
