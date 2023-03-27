import styled from "styled-components";

export const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17rem;
  margin-top: 6rem;
  @media (max-width: 1200px) {
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
`;
export const BookingTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  width: fit-content;
`;

export const TextContent = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #777;
  > p {
    text-align: center;
  }
  .react-calendar {
    right: 50px;
  }
`;

