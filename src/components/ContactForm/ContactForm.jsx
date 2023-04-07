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
import { useTranslation } from "react-i18next";

const ContactForm = ({ selectedDates, setShowModal }) => {
  const { service } = useContext(RoomContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    service: [],
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const pathname = window.location.pathname;
  const [totalDays, setTotalDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.myContextData).price);
  const { t } = useTranslation();

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line eqeqeq
        if(element.id == e.target.id) {
          setTotalPrice(totalPrice + element.servicePrice * totalDays);
        }
      })
      
      setFormData({
        ...formData,
        service: [...formData.service, e.target.id],
      });
    } else {
      service.forEach((element) => {
        // eslint-disable-next-line eqeqeq
        if(element.id == e.target.id) {
          setTotalPrice(totalPrice - element.servicePrice * totalDays);
        }
      })

      setFormData({
        ...formData,
        service: formData.service.filter((a) => e.target.id !== a),
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
      ...formData
    }

    await api('post', 'reservation', variables);
    setShowModal(false);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <SectionWrapper>
          <DatesWrapper>
            <TitleWrapper>
              <span>{t('first_day')}</span>
              <span>
                {startDate}
              </span>
            </TitleWrapper>
            <TitleWrapper>
              <span>{t('last_day')}</span>
              <span>
                {endDate}
              </span>
            </TitleWrapper>
          </DatesWrapper>
        </SectionWrapper>
        <SectionWrapper>
          {t('contact')}:
        </SectionWrapper>
        <TextField
          name="firstName"
          label={t('first_name')}
          value={formData.firstName}
          onChange={handleInputChange}
          margin="normal"
          sx={TextFieldStyles}
          required
        />
        <TextField
          name="lastName"
          label={t('last_name')}
          value={formData.lastName}
          onChange={handleInputChange}
          margin="normal"
          sx={TextFieldStyles}
          required
        />
        <TextField
          name="phoneNumber"
          label={t('phone')}
          value={formData.phoneNumber}
          onChange={handleInputChange}
          margin="normal"
          sx={TextFieldStyles}
          required
        />
        <SectionWrapper>
          {t('services')}:
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
            label={
              <>
                <span
                  style={{
                    marginRight: '3rem'
                  }}
                >{s.type}</span>
                <span>(+{s.servicePrice})</span>
              </>
            }
          />
        ))}
        <div className="total-price">{t('total_price')} {totalPrice} {t('cost')}</div>
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
  },
  setShowModal: () => {}
}

ContactForm.propTypes = {
  selectedDates: PropTypes.any,
  setShowModal: PropTypes.func
}

export default ContactForm;
