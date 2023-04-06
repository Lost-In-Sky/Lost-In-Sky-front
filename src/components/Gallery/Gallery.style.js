import styled from "styled-components";

export const GalleryWrapper = styled.div`
  margin: 2rem;
`

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  img {
    height: 600px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 1320px) {
      max-width: 95%;
      margin-left: 2.5%;
    }
  }
`;

export const SelectedImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .selected {
    max-height: 90vh;
    max-width: 90vw;
    object-fit: contain;
    border-radius: 8px;
  }

  .slick-right, .slick-left {
    position: absolute;
    top: 50%;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    &:before{
      font-family: 'slick';
      font-size: 55px;
      line-height: 1;
      opacity: .75;
      color: white;
      -webkit-font-smoothing: antialiased;

      @media (max-width: 599px) {
        font-size: 42px;
      }
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }

  .slick-right {
    right: 7%;

    &:before {
      content: '→';
    }
  }

  .slick-left {
    left: 7%;

    &:before {
      content: '←';
    }
  }
`;
