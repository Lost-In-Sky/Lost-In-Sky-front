import React from "react";
import SliderCard from "../SliderCard/SliderCard";
import {
  SliderWrapper,
  CardPageWrapper,
  RoomName,
  DekInfo,
  RoomsCont,
  OtherRooms,
  BottomCardWrapper,
  MainWrapperCardPage,
  BlueLine,
  GenInfo,
} from "./CardPage.style";
import { RoomContext } from "../../Context/RoomsContext";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import img1 from "../../assets/CardPageImg/LISimg1.jpg";
import HotelCard from "../HotelCard/HotelCard";
import img2 from "../../assets/CardPageImg/LISimg2.jpg";
import { cotages } from "../../mocks/cotagesMock";
import Button from "@mui/material/Button";
import { BookBtn } from "./CardPage.style";
import CalendarComponent from "../Calendar/Calendar";
import { CalendarContext } from "../../Context/CalendarContext";
import { Modal } from "@mui/material";
import ContactForm from "../ContactForm/ContactForm";

const CardPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const slides = [img1, img2];
  const [openReservRoom, setOpenReservRoom] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { room } = useContext(RoomContext);
  const { selectedDates } = useContext(CalendarContext)
  return (
    <MainWrapperCardPage>
      <CardPageWrapper>
        <SliderWrapper>
          <SliderCard images={slides} />
        </SliderWrapper>
        <RoomName>{room.name}</RoomName>
        <DekInfo>
          <GenInfo>
            <p>{t("dek")}</p>
          </GenInfo>
          <h1>{t("comfort")}</h1>
        </DekInfo>
        <GenInfo>
          <p>֊ {t("bed")}</p>
          <p>- {t("rope")}</p>
          <p>֊ {t("pool")}</p>
          <p>֊ {t("picnic")}</p>
          <p>֊ {t("cond")}</p>
          <p>֊ {t("bath")}</p>
          <p>֊ {t("wifi")}</p>
        </GenInfo>
        <BookBtn>
          <CalendarComponent />
          <button onClick={() => {
            console.log(selectedDates, 'SElectedDates')
          }}>CALENDAR DATA</button>
          <Button
            variant="contained"
            style={{ height: "3rem", fontWeight: " bold" }}
            onClick={() => {
              setOpenReservRoom((prev) => (prev = !prev));
              setShowModal(true);
            }}
          >
            Check pricing and Book here
          </Button>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ContactForm />
          </Modal>
          <p>Check-in 14:00</p>
          <p>Check-out 12:00</p>
        </BookBtn>
      </CardPageWrapper>
      <RoomsCont>
        <OtherRooms>
          <BlueLine />
          <h1>Other Rooms</h1>
        </OtherRooms>
        <BottomCardWrapper>
          {cotages.length > 0
            ? cotages.map(
              (room) =>
                room.id != id && <HotelCard key={room.id} room={room} />
            )
            : "nothing to show"}
        </BottomCardWrapper>
      </RoomsCont>
    </MainWrapperCardPage>
  );
};

export default CardPage;
