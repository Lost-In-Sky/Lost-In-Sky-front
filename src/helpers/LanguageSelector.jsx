import { LngCont } from "../components/Navbar/Navbar.styles";
import { useTranslation } from "react-i18next";

export const LanguageSelector = ({ onLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <LngCont>
      <p onClick={() => onLanguageChange("am")}>🇦🇲</p>
      <p onClick={() => onLanguageChange("en")}>🇺🇸</p>
      <p onClick={() => onLanguageChange("ru")}>🇷🇺</p>
    </LngCont>
  );
};
