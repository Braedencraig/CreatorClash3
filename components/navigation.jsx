/* eslint-disable react/jsx-key */
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Dropdown from "./dropdown";
import { useEffect } from "react";
import logo from "../public/assets/cc3.png";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import chevron from "../public/assets/chevron.png";
import Button from "./button";

export default function Navigation({
  isOpen,
  setOpen,
  open,
  setOpenDropdown,
  launchModal,
  setLaunchModal,
}) {
  const handleMenuOne = () => {
    window.open("https://www.ticketmaster.com/event/0D005E33DAC2E9EC");
  };

  const handleMenuTwo = () => {
    setLaunchModal(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setLaunchModal(false);
    }
  }, [isOpen]);

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
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
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
        <Dropdown
          open={open}
          setOpenDropdown={setOpenDropdown}
          trigger={
            <Button>
              {'Tickets ˅'}
            </Button>
          }
          menu={[
            <Button href="/#presale" onClick={console.info}>
              {'Presale >'}
            </Button>
            // <Button onClick={handleMenuOne}>{'Event Tickets >'}</Button>,
            // <Button onClick={handleMenuTwo}>
            //   {'PPV Tickets >'}
            // </Button>,
          ]}
        />
      </div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
}
