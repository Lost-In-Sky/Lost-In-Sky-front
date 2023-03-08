import styled from "styled-components";
import { AppBar, Toolbar, IconButton } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  background-color: white;
  color: #000000;
  height: 8rem;
  justify-content: center;
`;

export const StyledToolbar = styled(Toolbar)`
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    left: ${(props) => (props.showMenu ? "0" : "-100%")};
    width: 18rem;
    height: 100% !important;
    align-items: flex-start;
    z-index: 11;
    transition: all 0.3s ease-in-out;
  }
`;

export const StyledLink = styled.div`
  font-size: 20px;
  height: 2rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  color: ${(props) => (props.btnColor ? "#118acb" : "black")};
  text-decoration: none;
  margin: 0 20px;
  position: relative;
  text-transform: uppercase;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 599px) {
    display: block;
    color: white;
    margin: 20px;
  }
`;

export const MenuButton = styled(IconButton)`
  display: none;
  z-index: 110;
  @media (max-width: 599px) {
    display: block;
  }
`;
export const ItemsWrapper = styled.div`
  display: flex;

  @media (max-width: 599px) {
    margin-top: 8rem;
    flex-direction: column;
  }
  @media (min-width: 850px) {
    margin-right: 10rem;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  > img {
    width: 13rem;
    height: 13rem;
  }
  @media (max-width: 599px) {
    align-self: center;
  }
`;

export const UpperField = styled.div`
  display: flex;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  align-self: center;
  width: 80%;
  height: 3rem;
  font-weight: 700;
  font-size: 13px;
  color: #777;
  font-family: Poppins;
  > p {
    cursor: pointer;
  }
  @media (max-width: 599px) {
    justify-content: center;
  }
`;

export const LngCont = styled.div`
  display: flex;
  gap: 1rem;
  height: 2rem;
  font-size: 20px;
  > p {
    margin: unset;
  }
  @media (max-width: 599px) {
    margin-left: 10px;
  }
`;
