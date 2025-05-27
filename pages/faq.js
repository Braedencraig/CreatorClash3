import Footer from "../components/footer";
import Faq from "../components/faq";
import SEO from "../components/seo";
import Link from "next/link";

export default function FaqPage() {

  const faqs = [
    {
      q: "When does Creator Clash 3 go on sale?",
      a: "Wednesday, February 5, 2025 - Live Nation and Real Good Touring Presale\n\nFriday, February 7, 2025 - Public On Sale.",
      autop: true,
    },
    {
      q: "Where do I purchase event tickets to CC3?",
      a: <>{"To attend CC3 in person, you can purchase tickets to the event"} <Link href="/">here</Link>{"."}</>,
      autop: true,
    },
    {
      q: "I'm having trouble purchasing event tickets on ticketmaster. What do I do?",
      a: "Please reference Ticketmaster's FAQ for assistance with purchasing event tickets. If you require further assistance, please contact Ticketmaster fan support directly.",
      autop: true,
    },
    {
      q: "What does my event ticket purchase include?",
      a: <>{"Event tickets include admission to the Creator Clash 3 live event on June 28, 2025 at Amalie Arena in Tampa, Florida.\n\nCan't make it to Tampa? Purchase pay-per-view tickets for access to the livestream hosted by VEEPS"} <Link href="/">here</Link>{"."}</>,
      autop: true,
    },
    {
      q: "Where do I purchase PPV tickets?",
      a: <>{"Pay-per-view tickets may be purchased"} <Link href="/">here</Link>{".\n\n*Please note - pay-per-view tickets do not include admission to the in-person event at Amalie Arena. Event tickets sold separately."}</>,
      autop: true,
    },
    {
      q: "I'm having trouble purchasing PPV tickets/accessing the broadcast. What do I do?",
      a: <>{"Please reference"} <Link href="https://support.veeps.com/" target="_blank" rel="noopener noreferrer">VEEPS Support</Link> {"for assistance troubleshooting any issues."}</>,
      autop: true,
    },
    {
      q: "Where will Creator Clash 3 take place?",
      a: "CC3 will take place at Amalie Arena in Tampa, Florida.",
      autop: true,
    },
    {
      q: "When is Creator Clash 3?",
      a: "CC3 event and livestream will take place on Saturday, June 28th, 2025.",
      autop: true,
    },
    {
      q: "Will x-item be allowed in the arena?",
      a: <>{"Please reference"} <Link href="https://www.amaliearena.com/arena-info" target="_blank" rel="noopener noreferrer">{"Amalie Arena's arena info guide"}</Link> {"for further information regarding the venue's policies & procedures."}</>,
      autop: true,
    },
    {
      q: "Who is Creator Clash fundraising for?",
      a: <>{"CC3 is fundraising for Stand Up To Cancer. For more information on the charity,"} <Link href="https://tiltify.com/su2c/creatorclash" target="_blank" rel="noopener noreferrer">click here</Link>{"."}</>,
      autop: true,
    },
    {
      q: "How can I donate?",
      a: <>{"You can donate directly to Stand Up To Cancer"} <Link href="https://tiltify.com/su2c/creatorclash" target="_blank" rel="noopener noreferrer">here</Link>{"."}</>,
      autop: true,
    },
    {
      q: "I can't donate, but I'd like to run my own fundraiser. How can I do that?",
      a: <>{"Learn how to launch your own fundraiser through Tiltify"} <Link href="https://tiltify.com" target="_blank" rel="noopener noreferrer">here</Link>{"."}</>,
      autop: true,
    },
  ];

  return (
    <>
      <SEO title="FAQ | Creator Clash" description = "Frequently asked questions about Creator clash" />
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="pxglow">{'Frequently Asked Questions'}</h1>
        </div>
      </div>
      <div id="faq">
        <Faq faqs={faqs} />
      </div>
      <Footer />
    </>
  );
}
