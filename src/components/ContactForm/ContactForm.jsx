import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Container, FormWrapper, SectionWrapper, TextFieldStyles } from "./ContactForm.style";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    coffee: false,
    tea: false,
    bathroom: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
    console.log(formData);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
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
        <FormControlLabel
          sx={{ width: '90%', margin: '0 auto' }}
          control={
            <Checkbox
              checked={formData.coffee}
              onChange={handleCheckboxChange}
              name="coffee"
              sx={{ padding: '9px 9px 9px 0' }}
            />
          }
          label="Coffee"
        />
        <FormControlLabel
          sx={{ width: '90%', margin: '0 auto' }}
          control={
            <Checkbox
              checked={formData.tea}
              onChange={handleCheckboxChange}
              name="tea"
              sx={{ padding: '9px 9px 9px 0' }}
            />
          }
          label="Tea"
        />
        <FormControlLabel
          sx={{ width: '90%', margin: '0 auto' }}
          control={
            <Checkbox
              checked={formData.bathroom}
              onChange={handleCheckboxChange}
              name="bathroom"
              sx={{ padding: '9px 9px 9px 0' }}
            />
          }
          label="Bathroom"
        />
        <Button type="submit" variant="contained" sx={{ width: '93px', margin: '1rem auto' }}>
          Submit
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;
