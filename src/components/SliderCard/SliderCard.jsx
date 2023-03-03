import Slide1 from '../../assets/slider-images/slide-1.jpg';
import Slide2 from '../../assets/slider-images/slide-2.jpg';
import Slide3 from '../../assets/slider-images/slide-3.jpg';
import Slide4 from '../../assets/slider-images/slide-4.jpg';
import Slide5 from '../../assets/slider-images/slide-5.jpg';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Image,
  StoryBoardContainer,
  StyledSlide,
} from './slider.style';

function SliderCard() {
  const images = [Slide1, Slide2, Slide3, Slide4, Slide5];

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
