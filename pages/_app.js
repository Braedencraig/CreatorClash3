import { createContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import vhs from "../public/assets/vhs-texture.png"
import close from "../public/assets/close.png"
import tiktok from "../public/assets/tiktok.png"
import insta from "../public/assets/insta.png"
import twitter from "../public/assets/twitter.png"
import youtube from "../public/assets/youtube.png"
import TrackingCodes from "../components/tracking-codes";
import Button from "../components/button";
import Navigation from "../components/navigation";
import Head from "next/head";
import "../styles/globals.css";

export const AppContext = createContext({
  isTicketModalOpen: false,
  isMobileMenuOpen: false,
  setIsTicketModalOpen: () => {},
  setIsMobileMenuOpen: () => {},
});

export default function App({ Component, pageProps }) {

  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TrackingCodes />
      <div>
        <AppContext.Provider value={{ isTicketModalOpen, isMobileMenuOpen, setIsTicketModalOpen, setIsMobileMenuOpen }}>
          <Navigation />
          <Component {...pageProps} />
        </AppContext.Provider>
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src={close} width={20} height={20} alt="Close" />
              </button>
            </div>
            <ul className="mobile-menu-list">
              <li>
                <Link
                  href="/#charity"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pxglow"
                >
                  {'Donate'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#matchups"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pxglow"
                >
                  {'Matchups'}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pxglow"
                >
                  {'FAQ'}
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pxglow"
                >
                  {'Transparency'}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#subscribe"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pxglow"
                >
                  {'Subscribe'}
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pxglow"
                >
                  {'Contact'}
                </Link>
              </li> */}
            </ul>
            <div className="mobile-menu-buttons">
              {/* <Button
                href="/#presale"
              >
                {'Sign up for presale >'}
              </Button> */}
              <Button
                href="https://www.ticketmaster.com/creator-clash-3-tampa-florida-06-28-2025/event/0D00623B8E6E110A"
              >
                {'Event Tickets >'}
              </Button>
              <Button
                onClick={() => setIsTicketModalOpen(true)}
              >
                {'PPV Tickets >'}
              </Button>
            </div>
            <div className="mobile-menu-socials">
              <a
                href="https://www.tiktok.com/@creatorclashofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={tiktok} alt={"Tik tok"} />
              </a>
              <a
                href="https://www.instagram.com/thecreatorclash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={insta} alt={"Instagram"} />
              </a>
              <a
                href="https://twitter.com/TheCreatorClash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt={"Twitter"} />
              </a>
              <a
                href="https://youtube.com/@thecreatorclash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtube} alt={"YouTube"} />
              </a>
            </div>
          </div>
        )}
        {isTicketModalOpen && (
          <div className="ticket-modal">
            <div className="ticket-modal-surface">
              <div className="ticket-modal-header">
                <h2 className="ticket-modal-title pxglow">{'Heads Up!'}</h2>
                <button className="ticket-modal-close" onClick={() => setIsTicketModalOpen(false)}>
                  <Image src={close} width={20} height={20} alt="Close" />
                </button>
              </div>
              <div className="ticket-modal-content">
                <h3 className="pxglow" style={{ marginBottom: '16px' }}>
                  {'This is not an event ticket'}
                </h3>
                <ul style={{ marginLeft: '1em'}}>
                  <li>{'A PPV ticket is for the livestream only.'}</li>
                  <li>{'It does not grant you access to the in-person event.'}</li>
                  <li>{'If you would like to attend the event, please purchase an event ticket.'}</li>
                </ul>
              </div>
              <div className="ticket-modal-footer">
                <Button
                  href="https://veeps.events/creatorclash"
                  onClick={() => setIsTicketModalOpen(false)}
                >
                  {'PPV Ticket >'}
                </Button>
                <Link
                  className="pxglow"
                  href="https://www.ticketmaster.com/creator-clash-3-tampa-florida-06-28-2025/event/0D00623B8E6E110A"
                  onClick={() => setIsTicketModalOpen(false)}
                >
                  {'Actually, I want an event ticket >'}
                </Link>
              </div>
            </div>
          </div>
        )}
        <Image className="vhs-texture" src={vhs} alt="VHS Texture" priority={true} />
      </div>
    </>
  );
}
