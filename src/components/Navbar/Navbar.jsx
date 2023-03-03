import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useTheme } from "@material-ui/core/styles";
import {
  StyledAppBar,
  StyledToolbar,
  StyledNav,
  StyledLink,
  MenuButton,
  ItemsWrapper,
  LogoWrapper,
  UpperField,
} from "./Navbar.styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [showMenu, setShowMenu] = useState(false);
  const [btnColor, setBtnColor] = useState(null);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [showMenu]);

  const handleMenuButtonClick = () => {

    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);

  };

  const HeandleBtnCollor = (index) => {
    setBtnColor(index)
  }

  return (
    <StyledAppBar
      position="static"
      style={{ color: "black", background: "white" }}
    >
      <UpperField>
        <p>Call Us: +374 96 20 19 71</p>
      </UpperField>
      <StyledToolbar>
        {isMobile && (
          <MenuButton aria-label="menu" onClick={handleMenuButtonClick}>
            {showMenu ? <CloseIcon style={{ color: "white" }} /> : <MenuIcon />}
          </MenuButton>
        )}
        <LogoWrapper>
          <img src={logo} alt="logo" />
        </LogoWrapper>
        <StyledNav showMenu={showMenu} isMobile={isMobile}>
          <ItemsWrapper>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 1}
              onClick={() => { closeMenu(); HeandleBtnCollor(1) }}
            >
              Home
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 2}
              onClick={() => { closeMenu(); HeandleBtnCollor(2) }}
            >
              Gallery
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 3}
              onClick={() => { closeMenu(); HeandleBtnCollor(3) }}
            >
              Booking
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 4}
              onClick={() => { closeMenu(); HeandleBtnCollor(4) }}
            >
              Contacts
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 5}
              onClick={() => { closeMenu(); HeandleBtnCollor(5) }}
            >
              About
            </StyledLink>
          </ItemsWrapper>
        </StyledNav>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
