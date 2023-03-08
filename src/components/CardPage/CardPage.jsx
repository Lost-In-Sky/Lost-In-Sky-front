import React from "react";
import SliderCard from "../SliderCard/SliderCard";
import { SliderWrapper } from "./CardPage.style";
import { RoomContext } from "../../Context/RoomsContext";
import { useContext } from "react";
const CardPage = () => {
  const { room } = useContext(RoomContext);
  console.log(room);
  return (
    <div>
      <SliderWrapper>
        <SliderCard />
      </SliderWrapper>
    </div>
  );
};

export default CardPage;
