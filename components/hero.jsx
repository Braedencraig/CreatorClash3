import Image from "next/image";
import logo from "../public/assets/cc3-full.png"
import Button from "./button";

export default function Hero({ setLaunchModal }) {
  return (
    <div className="hero">
      <Image src={logo} alt="Creator Clash" className="hero-logo" />
      {/* <h1>Influencers will pay.</h1> */}
      <div className="info pxglow">
        <h2>Saturday, June 28 2025</h2>
        <h2>Amalie Arena // Tampa, FL</h2>
      </div>
      <div className="buttons">
        <Button
          href="/#presale"
        >
          {'Sign up for presale >'}
        </Button>
        {/* <Button
          href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC"
        >
          {'Event Tickets >'}
        </Button>
        <Button
          onClick={() => {
            setLaunchModal(true);
          }}
        >
          {'PPV Tickets >'}
        </Button> */}
      </div>
    </div>
  );
}
