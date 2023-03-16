import styled from "styled-components";

export const MainReservWrapper = styled.div`
  display: ${(props) => (props.openReservRoom ? "flex" : "none")};
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 2rem;
  align-self: center;
  flex-wrap: wrap;
  align-content: center;
  @media (max-width: 1200px) {
    margin: 0;
    width: 100%;
  }
`;

export const ReservetionCard = styled.div`
  display: flex;
  width: 40rem;
  color: white;
  height: 20rem;
  background: black;
  @media (max-width: 1200px) {
    width: 23rem;
  }
`;
