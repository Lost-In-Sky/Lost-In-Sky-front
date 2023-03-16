import React from "react";
import { MainReservWrapper, ReservetionCard } from "./RoomReservCard.style";

const RoomReservCard = ({ OpenReservRoom }) => {
  return (
    <MainReservWrapper openReservRoom={OpenReservRoom}>
      <ReservetionCard>asdasd</ReservetionCard>
      <ReservetionCard>asd</ReservetionCard>
      <ReservetionCard>ddddddddddd</ReservetionCard>
      <ReservetionCard>sadada</ReservetionCard>
    </MainReservWrapper>
  );
};

export default RoomReservCard;
