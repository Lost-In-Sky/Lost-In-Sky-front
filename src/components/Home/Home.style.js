import styled from "styled-components";

export const CardWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  gap: 3rem;
  &:hover {
    box-shadow:  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
