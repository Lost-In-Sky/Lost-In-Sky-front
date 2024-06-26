import { FooterContainer, Wrapper } from "./Footer.style";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import bottomLogo from "../../assets/logo-footer.png";

function Footer() {
  return (
    <FooterContainer>
      <img src={bottomLogo} />
      <ul className="socials">
        <li className="instagram-icon">
          <a href="https://www.instagram.com/lost._in._sky._hotel/">
            <InstagramIcon />
          </a>
        </li>
        <li className="facebook-icon">
          <a href="https://www.facebook.com/profile.php?id=100088963574983">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000pt"
              height="20.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path
                  d="M2960 5104 c-394 -57 -704 -271 -868 -599 -118 -238 -142 -383 -142
                -876 l0 -349 -339 0 c-188 0 -351 -4 -364 -9 -14 -6 -35 -20 -46 -32 -21 -22
                -21 -29 -21 -483 0 -422 2 -463 18 -482 34 -43 47 -44 406 -44 l346 0 0 -1080
                0 -1080 29 -32 29 -33 466 -3 c411 -2 470 -1 497 13 62 32 59 -18 59 1150 l0
                1065 400 0 c288 0 406 3 425 12 55 25 55 29 55 517 l0 451 -29 32 -29 33 -412
                3 -411 3 3 323 3 322 30 59 c33 64 88 107 162 127 21 6 169 12 328 14 160 3
                301 7 313 10 13 3 35 17 48 31 l24 26 0 432 c0 424 0 432 -21 454 -11 12 -32
                26 -46 32 -40 15 -801 9 -913 -7z"
                />
              </g>
            </svg>
          </a>
        </li>

        <li>
          <a href="tel:+37491450581" className="phone">
            <PhoneIcon /> <span>+374 91 45 05 81</span>
          </a>
        </li>
      </ul>
      <Wrapper>
        &copy; <a href="http://lostinsky.am/">lostinsky.am</a> 2023
      </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
