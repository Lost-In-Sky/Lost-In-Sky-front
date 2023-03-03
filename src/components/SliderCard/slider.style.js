import styled from 'styled-components';

export const StoryBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

export const StyledSlide = styled.div`
  background-color: #fafafa; // dots styles
  border-top: 0.9375rem solid #fafafa;

  .slide-dots {
    list-style-type: none;
    padding: 0;
    text-align: center;
    transform: translate(0%, -3rem);

    @media only screen and (min-width: 61.25rem) {
      transform: translate(0%, -5rem);
    }
 
    > li {
      display: inline;
      margin: 0 0.3125rem;
      > button {
        background-color: white;
        border-radius: 50%;
        border: 0.1rem white solid;
        cursor: pointer;
        font-size: 0;
        height: 1rem;
        padding: 0;
        width: 0.5rem;
        height: 0.5rem;

        @media only screen and (min-width: 61.25rem) {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
  // active dot style
  .slide-dots li.slick-active button {
    background-color: #118acb;
    border: 0.3rem #118acb solid;
    width: 0.5rem;
    height: 0.5rem;

    @media only screen and (min-width: 61.25rem) {
      border: 0.6rem #118acb solid;
      width: 1rem;
      height: 1rem;
    }
  }
  // arrow styles
  .slick-prev {
    height: 2rem;
    width: 2rem;
    z-index: 1;
    left: 0;
    @media only screen and (min-width: 61.25rem) {
      left: 1rem;
     }
  }
  .slick-next {
    height: 2rem;
    width: 2rem;
    z-index: 1;
    right: 0;
    @media only screen and (min-width: 61.25rem) {
      right: 1rem;
    }
  }

  .slick-arrow {
    min-height: 3rem;
    min-width: 3rem;
    transform: translate(0%, -3rem);

    z-index: 2;
  }

  .slick-prev:before {
    @media only screen and (min-width: 61.25rem) {
      font-size: 3.25rem;
    }
  }

  .slick-next:before {
    @media only screen and (min-width: 61.25rem) {
      font-size: 3.25rem;
    }
  }
`;

export const Image = styled.img`
  object-fit: contain;
`;
