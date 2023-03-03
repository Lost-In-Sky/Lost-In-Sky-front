import React from 'react'
import HotelCard from '../HotelCard/HotelCard'
import SliderCard from '../SliderCard/SliderCard'
import { CardWrapper, MainWrapper } from './Home.style'
const Home = () => {
  return (
    <div>
      <SliderCard />
      <MainWrapper>
        <h1>Our Rooms</h1>
        <CardWrapper>
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </CardWrapper>
      </MainWrapper>

    </div>
  )
}

export default Home
