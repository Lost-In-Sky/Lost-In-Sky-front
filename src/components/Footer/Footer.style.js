import styled from "styled-components";

export const FooterContainer = styled.footer`
  a{
    text-decoration: none;
    color: white;
  }
  width: 100%;

  .mapouter {
    background-color: #a9a9a9 ;
    color: white;
  }

  .gmap_canvas {
    gap: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
