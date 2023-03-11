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
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import img1 from "../../assets/CardPageImg/LISimg1.jpg";
import HotelCard from "../HotelCard/HotelCard";
import img2 from "../../assets/CardPageImg/LISimg2.jpg";
import { cotages } from "../../mocks/cotagesMock";
import Button from "@mui/material/Button";
import { BookBtn } from "./CardPage.style";

const CardPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const slides = [img1, img2];
  const { room } = useContext(RoomContext);
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
          <Button
            variant="contained"
            style={{ height: "3rem", fontWeight: " bold" }}
          >
            Check pricing and Book here
          </Button>
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
            ? cotages.map((room) => <HotelCard key={room.id} room={room} />)
            : "nothing to show"}
        </BottomCardWrapper>
      </RoomsCont>
    </MainWrapperCardPage>
  );
};

export default CardPage;


