import Image from "next/image";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import footerRgt from "../public/assets/footer-rgt.png";

export default function Footer() {

  return (
    <div className="footer">
      <div className="desktop-bottom">
        <div className="desktop-images">
          <Image src={footerRgt} alt={"Real Good Touring"} />
        </div>
        <div className="cheeky-socials">
          <div className="fight-card-matchup-socials">
            <a
              href="https://www.tiktok.com/@creatorclashofficial?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={tiktok} alt={"Tik tok"} />
            </a>
            <a
              href="https://www.instagram.com/thecreatorclash/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={insta} alt={"Instagram"} />
            </a>
            <a
              href="https://twitter.com/TheCreatorClash?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt={"Twitter"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
