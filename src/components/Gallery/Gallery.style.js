import styled from "styled-components";

export const GalleryWrapper = styled.div`
margin:2rem;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
    cursor: pointer;
  }

  .slick-right {
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    &:before{
      content: '→';
      font-family: 'slick';
      font-size: 3.5rem;
      line-height: 1;
      opacity: .75;
      color: white;
      -webkit-font-smoothing: antialiased;
    }
  }
`;
