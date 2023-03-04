import styled from "styled-components";

export const CardWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  height: 20rem;
  gap: 3rem;

  >div {
    @media (max-width:599px) {
        margin-right:unset;
    }
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
