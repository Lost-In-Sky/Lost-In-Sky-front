import React, { useEffect, useMemo, useState } from "react";
import SliderCard from "../SliderCard/SliderCard";
import { SliderWrapper, CardPageWrapper, RoomName,DekInfo } from "./CardPage.style";
import { RoomContext } from "../../Context/RoomsContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/CardPageImg/LISimg1.jpg";
import img2 from "../../assets/CardPageImg/LISimg2.jpg";
const CardPage = () => {
  const { id } = useParams();
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
        <p>hello</p>
      </DekInfo>
    </CardPageWrapper>
  );
};

export default CardPage;
