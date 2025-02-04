import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import { useState } from "react";
import Link from "next/link";
import Matchups from "../components/matchups";
// import Announcers from "../components/announcers";
import Charity from "../components/charity";
// import Prices from "../components/prices";
import Footer from "../components/footer";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import youtube from "../public/assets/youtube.png";
import close from "../public/assets/close.png";
import cartBlack from "../public/assets/cartblack.png";
import SEO from "../components/seo";
import SignUpForm from "../components/sign-up-form";
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
      <SEO title="Creator Clash" description="Welcome to the official home of Creator Clash!" />
      <div
        onClick={() => {
          if (open) {
            setOpenDropdown(false);
          }
        }}
        className={`${styles.main} ${isOpen && styles.overlay}`}
      >
        <Navigation
          open={open}
          setOpenDropdown={setOpenDropdown}
          isOpen={isOpen}
          setOpen={setOpen}
          launchModal={launchModal}
          setLaunchModal={setLaunchModal}
        />
        {isOpen && (
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <div className={styles.center}>
                <ul className={styles.overlayList}>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/#charity" className="pxglow">Donate</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/#matchups" className="pxglow">Matchups</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/faq" className="pxglow">FAQ</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/contact" className="pxglow">Contact</Link>
                  </li>
                  <li onClick={() => setOpen(false)} style={{ margin: "60px 0" }}>
                    <Button href="/#presale" className="pxglow">{"Presale >"}</Button>
                  </li>
                </ul>
                {/* <div className="navigation-tickets-mobile">
                  <Dropdown
                    open={open}
                    setOpenDropdown={setOpenDropdown}
                    trigger={
                      <button>
                        Tickets{" "}
                        <span>
                          <Image src={chevron} alt="navigation chevron" />
                        </span>
                      </button>
                    }
                    menu={[
                      <button key={1} onClick={handleMenuOne}>
                        Event Tickets
                      </button>,
                      <button
                        key={2}
                        className="inverted"
                        onClick={handleMenuTwo}
                      >
                        PPV Tickets
                      </button>,
                    ]}
                  />
                </div> */}
                <div className="mobile-socials">
                  <div className="mobile-socials-container">
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
              </div>
            </div>
          </div>
        )}
        {launchModal && (
          <div className={styles.overlay}>
            <div className={`${styles.overlayContent} ${styles.modalOverlay}`}>
              <div className={styles.center}>
                <div className="warning">
                  <Image
                    onClick={() => {
                      setLaunchModal(false);
                      setOpen(false);
                    }}
                    className="close"
                    src={close}
                    alt="Close modal"
                  />
                  <div className="warning-info">
                    <h3>Heads Up!</h3>
                    <h3>This is not an event ticket</h3>
                    <div className="text">
                      <p className="bold">
                        A PPV ticket is for the livestream only.
                      </p>
                      <p>
                        It does not grant you access to the in-person event.
                      </p>
                      <span>
                        If you would like to attend the event, please purchase
                        an event ticket.
                      </span>
                    </div>
                    <div className="buttons">
                      <button
                        onClick={() => {
                          setLaunchModal(false);
                          window.open(
                            "https://www.moment.co/creatorclash/creatorclash-creator-clash2"
                          );
                        }}
                      >
                        <span>
                          <Image src={cartBlack} alt="shopping cart" />
                        </span>
                        PPV Ticket
                      </button>
                      <a href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC">
                        Actually, I want an event ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Hero setLaunchModal={setLaunchModal} />
      </div>
      <div id="matchups">
        <Matchups />
      </div>
      <div id="presale">
        <SignUpForm />
      </div>
      {/* <Announcers /> */}
      {/* <Prices /> */}
      <div id="charity">
        <Charity />
      </div>
      <Footer />
    </>
  );
}
