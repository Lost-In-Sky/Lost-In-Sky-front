import React from "react";
import HotelCard from "../HotelCard/HotelCard";
import SliderCard from "../SliderCard/SliderCard";
import { CardWrapper, MainWrapper } from "./Home.style";
import { useTranslation } from "react-i18next";
import { cotages } from "../../mocks/cotagesMock";
import Slide1 from "../../assets/slider-images/slide-1.jpg";
import Slide2 from "../../assets/slider-images/slide-2.jpg";
import Slide3 from "../../assets/slider-images/slide-3.jpg";
import Slide4 from "../../assets/slider-images/slide-4.jpg";
import Slide5 from "../../assets/slider-images/slide-5.jpg";

const Home = () => {
  const images = [Slide1, Slide2, Slide3, Slide4, Slide5];
  const { t } = useTranslation();
  return (
    <div>
      <SliderCard images={images} />
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
