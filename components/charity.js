import Image from "next/image";
import sutcLogo from "../public/assets/sutc.png";
import liveNationLogo from "../public/assets/live-nation.png";
import tiltifyLogo from "../public/assets/tiltify.png";
import veepsLogo from "../public/assets/veeps.png";
import Button from "./button";
import { Fragment } from "react";
// import charity1 from "../public/assets/charity1.webp";
// import charity2 from "../public/assets/charity2.png";
// import charity3 from "../public/assets/charity3.png";
// import charity4 from "../public/assets/charity4.png";
// import charity42 from "../public/assets/charity42.png";
// import charity5 from "../public/assets/charity5.png";
// import charity6 from "../public/assets/charity6.png";
// import charity7 from "../public/assets/charity7.png";
// import charity8 from "../public/assets/charity8.png";
// import charity9 from "../public/assets/longestday.svg";
// import charity10 from "../public/assets/parasport.png";
// import charity11 from "../public/assets/humane.png";
// import charity12 from "../public/assets/merrimack.jpeg";
// import charity13 from "../public/assets/ms.png";
// import charity14 from "../public/assets/horse.png";

export default function Charity() {
  const charities = [
    {
      link: "https://tiltify.com/su2c/creatorclash",
      img: sutcLogo,
    },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-nami",
    //   img: charity1,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-ablegamers",
    //   img: charity2,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-american-kidney-fund",
    //   img: charity3,
    // },
    // { link: "https://nicklauschildrens.org/", img: charity42 },
    // { link: "https://kidscancersf.org/", img: charity5 },
    // { link: "https://curesarcoma.org/", img: charity6 },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-american-heart-association",
    //   img: charity7,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-critical-role-foundation",
    //   img: charity8,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-alzheimers-association",
    //   img: charity9,
    // },
    // {
    //   link: "https://www.parasportsab.com/",
    //   img: charity10,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-humane-society-international",
    //   img: charity11,
    // },
    // {
    //   link: "https://merrimackhall.com/",
    //   img: charity12,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-ms-society",
    //   img: charity13,
    // },
    // {
    //   link: "https://tiltify.com/@realgoodtouring/creator-clash-x-healing-horse-therapy-center",
    //   img: charity14,
    // },
  ];

  const partners = [
    {
      link: "https://www.ticketmaster.com/creator-clash-3-tampa-florida-06-28-2025/event/0D00623B8E6E110A",
      img: liveNationLogo,
    },
    {
      link: "https://veeps.com/creatorclash/5fb45c04-f63e-40d5-b8b5-79d37e3c54b5?utm_source=artist&utm_medium=organic&utm_campaign=artist-creatorclash",
      img: veepsLogo,
    },
    {
      link: "https://tiltify.com/su2c/creatorclash",
      img: tiltifyLogo,
    },
  ];

  return (
    <div className="charity">
      <div className="charity-info">
        <h2 className="pxglow">A fundraiser for</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p> */}
      </div>
      <div className="charity-logos">
        {charities.map((charity, i) => {
          return (
            <Fragment key={i}>
              <a
                key={charity.link}
                href={charity.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image src={charity.img} alt={charity.link} style={{ marginBottom: '40px' }} />
                <Button onClick={() => {}}>{'Donate >'}</Button>
              </a>
            </Fragment>
          );
        })}
      </div>

      <div className="charity-info charity-partners-info">
        <h3 className="pxglow">With support from</h3>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p> */}
      </div>
      <div className="charity-logos charity-partners-logos">
        {partners.map((partner) => {
          return (
            <a
              key={partner.link}
              href={partner.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={partner.img} alt={partner.link} />
              {/* <p>Donate Here</p> */}
            </a>
          );
        })}
      </div>
    </div>
  );
}
