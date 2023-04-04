import React from "react";
import { useState, useEffect, useMemo } from "react";
import logo from "../../assets/logo.png";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../../helpers/LanguageSelector";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { makeAxiosCall } from "../../helpers/api";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [showMenu, setShowMenu] = useState(false);
  const [btnColor, setBtnColor] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [lang, setLang] = useState(searchParams.get("lang") || "am");
  const { t, i18n } = useTranslation();
  const pathname = window.location.pathname;

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
    i18n.changeLanguage(lang);
  }, [showMenu, lang]);

  useEffect(() => {
    if (lang === "am") {
      navigate(pathname);
    } else navigate({ pathname, search: `lang=${lang}` });
  }, [lang]);

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
          {t("call_us")}: +374 91 45 05 81 <a href="tel:+37491450581" />
        </p>
      </UpperField>
      <StyledToolbar>
        {isMobile && (
          <MenuButton aria-label="menu" onClick={handleMenuButtonClick}>
            {showMenu ? <CloseIcon style={{ color: "white" }} /> : <MenuIcon />}
          </MenuButton>
        )}
        <LogoWrapper>
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
              setBtnColor(null);
            }}
          />
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
                navigate({
                  pathname: "/",
                  search: `${lang !== "am" ? `lang=${lang}` : ""}`,
                });
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
                navigate({
                  pathname: "/gallery",
                  search: `${lang !== "am" ? `lang=${lang}` : ""}`,
                });
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
                navigate({
                  pathname: "/booking",
                  search: `${lang !== "am" ? `lang=${lang}` : ""}`,
                });
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
                navigate({
                  pathname: "/contacts",
                  search: `${lang !== "am" ? `lang=${lang}` : ""}`,
                });
              }}
            >
              {t("contacts")}
            </StyledLink>
            <button onClick={makeAxiosCall}>SETULIKKKKKKKKKKKKKKKKKKKKKKKKKKKK</button>
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
