import { FooterContainer, Wrapper } from "./Footer.style"
import { useTranslation } from "react-i18next";
import InstagramLogo from '../../assets/instagram.png'
function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="400"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=40.91375829434,%2045.1015119243227&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
          </iframe>
          <Wrapper>
            <p>{t("call")}: <a href="tel:+37491450581">+374 91 45 05 81</a></p>
            <a href="https://www.instagram.com/lost._in._sky._hotel/">
              <img src={InstagramLogo} alt='instagram' />
            </a>
          </Wrapper>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer