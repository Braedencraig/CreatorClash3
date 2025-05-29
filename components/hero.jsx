import { useContext } from "react";
import Image from "next/image";
import bg from "../public/assets/cc3-hero.jpg";
import logo from "../public/assets/cc3-full.png";
import Button from "./button";
import { AppContext } from "../pages/_app";

export default function Hero() {

  const {setIsTicketModalOpen} = useContext(AppContext);

  return (
    <div className="new-hero">
      <Image priority={true} src={bg} alt="Creator Clash" className="new-hero-background" />
      <Image priority={true} src={logo} alt="Creator Clash" className="new-hero-logo" style={{ paddingLeft: '3%' }} />
      <div className="new-hero-content">
        <div className="new-hero-info pxglow">
          <h2>Saturday, October 25 2025</h2>
          <h2>Hollywood Palladium // Los Angeles, CA</h2>
        </div>
        <div className="new-hero-buttons">
          {/* <Button
            href="/#presale"
          >
            {'Sign up for presale >'}
          </Button> */}
          {/* <Button
            href="https://www.ticketmaster.com/creator-clash-3-tampa-florida-06-28-2025/event/0D00623B8E6E110A"
          >
            {'Event Tickets >'}
          </Button> */}
          <Button
            onClick={() => setIsTicketModalOpen(true)}
          >
            {'PPV Tickets >'}
          </Button>
        </div>
      </div>
    </div>
  );
}
