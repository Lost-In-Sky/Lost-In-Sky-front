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
import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import img1 from "../../assets/CardPageImg/LISimg1.jpg";
import HotelCard from "../HotelCard/HotelCard";
import img2 from "../../assets/CardPageImg/LISimg2.jpg";
import Button from "@mui/material/Button";
import { BookBtn } from "./CardPage.style";
import CalendarComponent from "../Calendar/Calendar";
import { Box, Modal } from "@mui/material";
import ContactForm from "../ContactForm/ContactForm";
import api from "../../helpers/api";
import Loading from "../Loading";

const CardPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const slides = [img1, img2];
  const [showModal, setShowModal] = useState(false);
  const { room, setRoom } = useContext(RoomContext);
  const { selectedDates } = useContext(RoomContext);
  const [cottages, setCottages] = useState([]);
  const [selectedDateError, setSelectedDateError] = useState(false);

  useEffect(() => {
    console.log(selectedDates);
    (async () => {
      const { data } = await api("get", `cottage/${id}`);
      setRoom(data[0]);
      const { data: rooms } = await api("get", "cottage");
      setCottages(rooms);
    })();
  }, [id]);
  const handleBooking = () => {
    if (!selectedDates.startDate) {
      setSelectedDateError(true);

      return;
    }
    setShowModal(true);
  };
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
          <CalendarComponent
            selectedDateError={selectedDateError}
            setSelectedDateError={setSelectedDateError}
            cottageId={room.id}
          />
          <Button
            variant="contained"
            style={{ height: "3rem", fontWeight: " bold", marginTop: "2rem" }}
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
                cottage={room}
              />
            </Box>
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
          {cottages.length > 0 ? (
            cottages.map(
              (room) =>
                // eslint-disable-next-line eqeqeq
                room.id != id && <HotelCard key={room.id} room={room} />
            )
          ) : (
            <Loading />
          )}
        </BottomCardWrapper>
      </RoomsCont>
    </MainWrapperCardPage>
  );
};

export default CardPage;
