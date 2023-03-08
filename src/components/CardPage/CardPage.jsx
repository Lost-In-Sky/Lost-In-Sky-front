import React from "react";
import SliderCard from "../SliderCard/SliderCard";
import {
  SliderWrapper,
  CardPageWrapper,
  RoomName,
  DekInfo,
  GenInfo,
} from "./CardPage.style";
import { RoomContext } from "../../Context/RoomsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import img1 from "../../assets/CardPageImg/LISimg1.jpg";
import img2 from "../../assets/CardPageImg/LISimg2.jpg";
import Button from "@mui/material/Button";
import { BookBtn } from "./CardPage.style";

const CardPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const slides = [img1, img2];
  const { room } = useContext(RoomContext);

  console.log(room);
  return (
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
          style={{ height: "3rem", "fontWeight": " bold" }}
        >
          Check pricing and Book here
        </Button>
      </BookBtn>
    </CardPageWrapper>
  );
};

export default CardPage;
