import React from "react";
import HotelCard from "../HotelCard/HotelCard";
import SliderCard from "../SliderCard/SliderCard";
import { CardWrapper, MainWrapper } from "./Home.style";
import { useTranslation } from "react-i18next";
import { cotages } from "../../mocks/cotagesMock";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SliderCard />
      <MainWrapper>
        <h1>{t("our_rooms")}</h1>
        <CardWrapper>
          {cotages.length > 0
            ? cotages.map((room) => <HotelCard key={room.id} room={room} />)
            : "nothing to show"}
        </CardWrapper>
      </MainWrapper>
    </div>
  );
};

export default Home;
