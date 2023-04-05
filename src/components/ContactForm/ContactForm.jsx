import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Container, DatesWrapper, FormWrapper, SectionWrapper, TextFieldStyles, TitleWrapper } from "./ContactForm.style";
import PropTypes from 'prop-types'
import { RoomContext } from "../../Context/RoomsContext";
import api from "../../helpers/api";

const ContactForm = ({ selectedDates }) => {
  const { service } = useContext(RoomContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    services: [],
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const pathname = window.location.pathname;
  const [totalDays, setTotalDays] = useState(1);
  // VALOOODDDD!!!!!!!
  // Chgidem inchqanoves chisht are es localstorage nery, bayc raz uj vorosheles praekti maman qunes
  // avelacra es klris context i mej et servicnery inch service vor uni konkret es hamary
  // hmi API ic call em anum vekalem bayc de hena localStorage um pahi ete pahum es
  const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.myContextData).price);

  const formateDate = (date) => {
    return date.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, "-");
  };


  function getDaysDifference(startDate, endDate) {
    const diff = Math.abs(endDate.getTime() - startDate.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days + 1;
  }
  useEffect(() => {
    if (!selectedDates.endDate) {
      setEndDate(formateDate(selectedDates.startDate))
    }
    else {
      const dayCounts = getDaysDifference(selectedDates.startDate, selectedDates.endDate);
      setTotalPrice(totalPrice * dayCounts);
      setTotalDays(dayCounts);
      setStartDate(formateDate(selectedDates.startDate))
      setEndDate(formateDate(selectedDates.endDate))
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      service.forEach((element) => {
        if(element.id == e.target.id) {
          setTotalPrice(totalPrice + element.servicePrice * totalDays);
        }
      })
      
      setFormData({
        ...formData,
        services: [...formData.services, e.target.id],
      });
    } else {
      service.forEach((element) => {
        if(element.id == e.target.id) {
          setTotalPrice(totalPrice - element.servicePrice * totalDays);
        }
      })

      setFormData({
        ...formData,
        services: formData.services.filter((a) => e.target.id !== a),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let checkOutDate = null;
    if(selectedDates.endDate){
      checkOutDate = new Date();
      checkOutDate.setDate(selectedDates.endDate.getDate() + 1);
    }
    else {
      checkOutDate = new Date();
      checkOutDate.setDate(selectedDates.startDate.getDate() + 1);
    }
    const variables = {
      checkIn: selectedDates.startDate,
      checkOut: checkOutDate,
      totalPrice,
      cottageId: pathname.slice(-1),
      formData
    }

    await api('post', 'reservation', variables);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>

        <SectionWrapper>
          <DatesWrapper>
            <TitleWrapper>
              <span>Start Date</span>
              <span>
                {startDate}
              </span>
            </TitleWrapper>
            <TitleWrapper>
              <span>End Date</span>
              <span>
                {endDate}
              </span>
            </TitleWrapper>
          </DatesWrapper>
        </SectionWrapper>
        <SectionWrapper>
          Contact:
        </SectionWrapper>
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          margin="normal"
          sx={TextFieldStyles}
          required
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          margin="normal"
          sx={TextFieldStyles}
          required
        />
        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          margin="normal"
          sx={TextFieldStyles}
          required
        />
        <SectionWrapper>
          Services:
        </SectionWrapper>
        {service?.map((s) => (
          <FormControlLabel
            key={s.id}
            sx={{ width: '90%', margin: '0 auto' }}
            control={
              <Checkbox
                onChange={handleCheckboxChange}
                id={s.id}
                sx={{ padding: '9px 9px 9px 0' }}
              />
            }
            label={s.type}
          />
        ))}
        <div className="total-price">Total Price {totalPrice} AMD</div>
        <Button type="submit" variant="contained" sx={{ width: '93px', margin: '1rem auto' }}>
          Submit
        </Button>
      </FormWrapper>
    </Container>
  );
};

ContactForm.defaultValue = {
  selectedDates: {
    startDate: null,
    endDate: null,
  }
}

ContactForm.propTypes = {
  selectedDates: PropTypes.any,
}

export default ContactForm;
