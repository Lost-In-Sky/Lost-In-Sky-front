import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;