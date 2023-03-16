import styled from "styled-components";

export const MainWrapperCardPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #777;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;
export const SliderWrapper = styled.div`
  width: 53rem;
  height: auto;
  margin-top: 4rem;
  margin > div {
    div {
      height: 30rem;
    }
  }

  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
`;

export const DekInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    width: 20rem;
    margin-left: 2rem;
  }
`;

export const BookBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-self: center;
  align-items: center;
  @media (max-width: 1200px) {
    align-self: unset;
    margin-left: 2rem;
  }
`;

export const RoomsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  border-top: 1px solid #f0f0f0;
  justify-content: center;
`;
export const OtherRooms = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  color: #118acb;
  @media (max-width: 599px) {
    justify-content: center;
  }
`;
export const BottomCardWrapper = styled.div`
  display: flex;
  gap: 8rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BlueLine = styled.hr`
  border-bottom: 2px solid #118acb;
  width: 3rem;
  margin: 0;
`;
