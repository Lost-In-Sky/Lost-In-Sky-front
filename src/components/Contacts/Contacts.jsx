import { useTranslation } from "react-i18next";
import { ContactsWrapper } from "./Contacts.style";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contacts() {
  const { t } = useTranslation();

  return (
    <ContactsWrapper>
      <p className="heading_primary">{t("our_contacts")}</p>
      <p>{t("village_yenokavan")}</p>
      <p>{t("district")}</p>

      <p>{t("call")}: +374 91 45 05 81</p>

      <p className="heading_primary">{t("follow")}</p>
      <div className="icons">
        <a
          href="https://www.facebook.com/profile.php?id=100088963574983"
          className="facebook-icon"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="18.000000pt"
            height="18.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="black"
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

        <a
          href="https://www.instagram.com/lost._in._sky._hotel/"
          className="instagram-icon"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className="map">
        <iframe
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=40.913829398205046,%2045.101543390785025&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </ContactsWrapper>
  );
}

export default Contacts;
