import styled from "styled-components";

export const CardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20rem;
  margin-right: 40rem;
  color: #777;
  @media (max-width: 599px) {
    margin: 0;
  }
`;
export const SliderWrapper = styled.div`
  width: 53rem;
  height: auto;
  margin-top: 4rem;
  margin: 0 > div {
    div {
      height: 30rem;
    }
  }

  @media (max-width: 599px) {
    width: 24.3rem;
    > div {
      div {
        height: 100%;
      }
    }
  }
`;

export const RoomName = styled.p`
  color: black;
  font-family: Playfair Display;
  font-size: 36px;
  line-height: 48px;
  margin: 30px 0 20px;
  float: left;
  @media (max-width: 599px) {
    margin-left: 2rem;
  }
`;

export const DekInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (max-width: 599px) {
    > h1 {
      margin-left: 2rem;
      font-size: 1.4rem;
    }
  }
`;
export const GenInfo = styled.div`
  width: 30rem;
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  @media (max-width: 599px) {
    width: 20rem;
    margin-left: 2rem;
  }
`;

export const BookBtn = styled.div`
  width: fit-content;
  align-self: center;
`;
