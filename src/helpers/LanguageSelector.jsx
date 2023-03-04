import { LngCont } from "../components/Navbar/Navbar.styles";

export const LanguageSelector = ({ onLanguageChange }) => {

  return (
    <LngCont>
      <p style={{ cursor: 'pointer'}} onClick={() => onLanguageChange("am")}>🇦🇲</p>
      <p style={{ cursor: 'pointer'}} onClick={() => onLanguageChange("en")}>🇺🇸</p>
      <p style={{ cursor: 'pointer'}} onClick={() => onLanguageChange("ru")}>🇷🇺</p>
    </LngCont>
  );
};
