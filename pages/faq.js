import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Faq from "../components/faq";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import youtube from "../public/assets/youtube.png";
import close from "../public/assets/close.png";
import cartBlack from "../public/assets/cartblack.png";
import SEO from "../components/seo";
import Button from "../components/button";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [open, setOpenDropdown] = useState(false);
  const [launchModal, setLaunchModal] = useState(false);

  const handleMenuOne = () => {
    window.open("https://www.ticketmaster.com/event/0D005E33DAC2E9EC");
  };

  const handleMenuTwo = () => {
    setLaunchModal(true);
  };

  return (
    <>
      <SEO title="FAQ | Creator Clash" description = "Frequently asked questions about Creator clash" />
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="pxglow">{'Frequently Asked Questions'}</h1>
        </div>
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </>
  );
}
