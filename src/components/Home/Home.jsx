import React from "react";
import HotelCard from "../HotelCard/HotelCard";
import SliderCard from "../SliderCard/SliderCard";
import { CardWrapper, MainWrapper } from "./Home.style";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SliderCard />
      <MainWrapper>
        <h1>{t("our_rooms")}</h1>
        <CardWrapper>
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </CardWrapper>
      </MainWrapper>
    </div>
  );
};

export default Home;
