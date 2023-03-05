import React from "react";
import { useState, useEffect, useMemo } from "react";
import logo from "../../assets/logo.png";
import { useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../../helpers/LanguageSelector";
import {
  StyledAppBar,
  StyledToolbar,
  StyledNav,
  StyledLink,
  MenuButton,
  ItemsWrapper,
  LogoWrapper,
  UpperField,
  LngCont,
} from "./Navbar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [showMenu, setShowMenu] = useState(false);
  const [btnColor, setBtnColor] = useState(null);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "am");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
    i18n.changeLanguage(lang);
  }, [showMenu, lang]);

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const HeandleBtnCollor = (index) => {
    setBtnColor(index);
  };
  const handleLanguageChange = useMemo(
    () => (language) => {
      setLang(language);
    },
    []
  );

  return (
    <StyledAppBar
      position="static"
      style={{ color: "black", background: "white" }}
    >
      <UpperField>
        <p>
          {t("call")}: +374 91 45 05 81 <a href="tel:+37491450581" />
        </p>
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
              onClick={() => {
                closeMenu();
                HeandleBtnCollor(1);
              }}
            >
              {t("home")}
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 2}
              onClick={() => {
                closeMenu();
                HeandleBtnCollor(2);
              }}
            >
              {t("gallery")}
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 3}
              onClick={() => {
                closeMenu();
                HeandleBtnCollor(3);
              }}
            >
              {t("booking")}
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 4}
              onClick={() => {
                closeMenu();
                HeandleBtnCollor(4);
              }}
            >
              {t("contacts")}
            </StyledLink>
            <StyledLink
              href="#"
              showMenu={showMenu}
              btnColor={btnColor === 5}
              onClick={() => {
                closeMenu();
                HeandleBtnCollor(5);
              }}
            >
              {t("about")}
            </StyledLink>
            <LngCont>
              <LanguageSelector onLanguageChange={handleLanguageChange} />
            </LngCont>
          </ItemsWrapper>
        </StyledNav>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
