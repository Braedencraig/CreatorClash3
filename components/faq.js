import React from "react";
import Accordion from "./accordion";
import Link from "next/link";

export default function Faq() {

  const faqs = [
    {
      q: "When does Creator Clash 3 go on sale?",
      a: "Wednesday, February 5, 2025 - Live Nation and Real Good Touring Presale\n\nFriday, February 7, 2025 - Public On Sale.",
    },
    {
      q: "Where do I purchase event tickets to CC3?",
      a: <>{"To attend CC3 in person, you can purchase tickets to the event"} <Link href="/">here</Link>{"."}</>,
    },
    {
      q: "I'm having trouble purchasing event tickets on ticketmaster. What do I do?",
      a: "Please reference Ticketmaster's FAQ for assistance with purchasing event tickets. If you require further assistance, please contact Ticketmaster fan support directly.",
    },
    {
      q: "What does my event ticket purchase include?",
      a: <>{"Event tickets include admission to the Creator Clash 3 live event on June 28, 2025 at Amalie Arena in Tampa, Florida.\n\nCan't make it to Tampa? Purchase pay-per-view tickets for access to the livestream hosted by VEEPS"} <Link href="/">here</Link>{"."}</>,
    },
    {
      q: "Where do I purchase PPV tickets?",
      a: <>{"Pay-per-view tickets may be purchased"} <Link href="/">here</Link>{".\n\n*Please note - pay-per-view tickets do not include admission to the in-person event at Amalie Arena. Event tickets sold separately."}</>,
    },
    {
      q: "I'm having trouble purchasing PPV tickets/accessing the broadcast. What do I do?",
      a: <>{"Please reference"} <Link href="https://support.veeps.com/" target="_blank" rel="noopener noreferrer">VEEPS Support</Link> {"for assistance troubleshooting any issues."}</>,
    },
    {
      q: "Where will Creator Clash 3 take place?",
      a: "CC3 will take place at Amalie Arena in Tampa, Florida.",
    },
    {
      q: "When is Creator Clash 3?",
      a: "CC3 event and livestream will take place on Saturday, June 28th, 2025.",
    },
    {
      q: "Will x-item be allowed in the arena?",
      a: <>{"Please reference"} <Link href="https://www.amaliearena.com/arena-info" target="_blank" rel="noopener noreferrer">{"Amalie Arena's arena info guide"}</Link> {"for further information regarding the venue's policies & procedures."}</>,
    },
    {
      q: "Who is Creator Clash fundraising for?",
      a: <>{"CC3 is fundraising for Stand Up To Cancer. For more information on the charity,"} <Link href="https://standuptocancer.org/" target="_blank" rel="noopener noreferrer">click here</Link>{"."}</>,
    },
    {
      q: "How can I donate?",
      a: <>{"You can donate directly to Stand Up To Cancer"} <Link href="https://standuptocancer.org/donate" target="_blank" rel="noopener noreferrer">here</Link>{"."}</>,
    },
    {
      q: "I can't donate, but I'd like to run my own fundraiser. How can I do that?",
      a: <>{"Learn how to launch your own fundraiser through Tiltify"} <Link href="https://tiltify.com" target="_blank" rel="noopener noreferrer">here</Link>{"."}</>,
    },
  ];
  return (
    <div className="faq-bg">
      <div className="faq">
        {faqs.map((faq, i) => (
          <Accordion key={i} isFaq title={faq.q}>
            <p>{faq.a}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
