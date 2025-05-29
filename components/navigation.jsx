/* eslint-disable react/jsx-key */
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Dropdown from "./dropdown";
import { useContext, useEffect, useState } from "react";
import logo from "../public/assets/cc3.png";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import youtube from "../public/assets/youtube.png";
import Button from "./button";
import { AppContext } from "../pages/_app";

export default function Navigation() {

  const {isMobileMenuOpen, setIsMobileMenuOpen, setIsTicketModalOpen} = useContext(AppContext);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="navigation">
      <ul className="navigation-links pxglow">
        <li>
          <Link href="/#charity">Donate</Link>
        </li>
        <li>
          <Link href="/#matchups">Matchups</Link>
        </li>
        {/* <li>
          <Link href="/media-credentials">Media Credentials</Link>
        </li> */}
        {/* <li>
          <Link href="/sponsorships">Sponsorships</Link>
        </li> */}
        {/* <li>
          <Link href="/faq">FAQ</Link>
        </li> */}
        <li>
          <Link href="/transparency">Transparency</Link>
        </li>
        {/* <li>
          <Link href="/#subscribe">Subscribe</Link>
        </li> */}
        {/* <li>
          <Link href="/contact">Contact</Link>
        </li> */}
        {/* <li>
          <a
            href="https://store.thecreatorclash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merch
          </a>
        </li> */}
      </ul>
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Creator Clash Two" />
        </Link>
      </div>
      <div className="navigation-tickets">
        <div className="cheeky-socials">
          <div className="fight-card-matchup-socials">
            <a
              href="https://www.tiktok.com/@creatorclashofficial"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={tiktok} alt={"Tik tok"} />
            </a>
            <a
              href="https://www.instagram.com/thecreatorclash"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={insta} alt={"Instagram"} />
            </a>
            <a
              href="https://twitter.com/TheCreatorClash"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt={"Twitter"} />
            </a>
            <a
              href="https://youtube.com/@thecreatorclash"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={youtube} alt={"YouTube"} />
            </a>
          </div>
        </div>
        <Dropdown
          open={isDropdownOpen}
          setOpenDropdown={setIsDropDownOpen}
          trigger={
            <Button>
              {'Tickets ˅'}
            </Button>
          }
          menu={[
            // <Button href="/#presale">
            //   {'Presale >'}
            // </Button>
            // <Button href="https://www.ticketmaster.com/creator-clash-3-tampa-florida-06-28-2025/event/0D00623B8E6E110A">
            //   {'Event Tickets >'}
            // </Button>,
            <Button onClick={() => setIsTicketModalOpen(true)}>
              {'PPV Tickets >'}
            </Button>,
          ]}
        />
      </div>
      <Hamburger toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} />
    </div>
  );
}
