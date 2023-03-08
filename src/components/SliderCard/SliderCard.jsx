import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Image,
  StoryBoardContainer,
  StyledSlide,
} from './slider.style';

function SliderCard({images}) {


  return (
    <StoryBoardContainer>
      <StyledSlide>
          <Slider
            dots
            infinite={images.length > 1}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dotsClass="slide-dots"
            lazyLoad="ondemand"
            arrows
            easing="ease-in-out"
            autoplay
            autoplaySpeed={5000}
          >
            {images?.map((item) => (
              <Image src={item} key={item} alt="slider" />
            ))}
          </Slider>
       </StyledSlide>
     </StoryBoardContainer>
  );
}

export default SliderCard;
