import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #111;
  margin-top: 2rem;
  height: auto;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  img {
    margin-top: 2rem;
    width: 15rem;
    height: 5rem;
  }
  h3 {
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 0.7rem;
  }

  .phone {
    text-decoration: none;
    color: white;

    span {
      vertical-align: super;
    }
  }

  .instagram-icon {
    a {
      color: white;
    }
  }
`;

export const Wrapper = styled.div`
  a {
    color: white;
    text-decoration: none;

    :hover {
      color: #ccc;
    }
  }
`;
