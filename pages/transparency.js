import Footer from "../components/footer";
import Faq from "../components/faq";
import SEO from "../components/seo";

export default function TransparencyPage() {

  const faqs = [
    {
      q: "When and where is the updated Creator Clash 3 event taking place?",
      a: "Creator Clash 3 will now take place on Saturday, October 25th, 2025, at the Hollywood Palladium in Los Angeles, CA. Tickets will be available to attend the in-person event, and It will be broadcast live on Veeps.",
      autop: true,
    },
    {
      q: "Why was the event moved to Los Angeles?",
      a: "Los Angeles made the most sense. It's a much larger market, It's home to a lot of creators, and it helps us keep event and production costs down. That means we can put more focus on what matters: making the show great, raising money for charity, and giving fans the best experience possible, whether you're watching live or tuning in from home.",
      autop: true,
    },
    {
      q: "What's happening with ticket refunds?",
      a: (
        <ul>
          <li>{"All in-person ticket holders will receive a full refund through Ticketmaster."}</li>
          <li>{"PPV tickets will still be honored for the new date."}</li>
          <li>{"If you'd prefer a refund instead, those will be made available for all PPV ticket holders."}</li>
          <li>{"Information on event tickets for the LA Event will be announced in the coming weeks."}</li>
        </ul>
      ),
    },
    {
      q: "Will all of the original fighters still be competing?",
      a: "Not all fighters will be available for the new date. An updated fight card will be announced in July that will also include some fresh faces.",
      autop: true,
    },
    // {
    //   q: "Is the docuseries still happening?",
    //   a: "Yes, the docuseries is being postponed, but it will cover the full journey to Creator Clash 3 — including the departure of Ian and Anisa. The updated rollout schedule will be announced soon.",
    //   autop: true,
    // },
    {
      q: "What's happening with fundraising and charity?",
      a: (
        <>
          <p>{"Fundraising efforts will continue and expand in the lead-up to the new event date. All funds raised so far are secure and unaffected. The Creator Clash 3 broadcast will once again be run as a charity stream, with "}<strong>{"Stand Up To Cancer (SU2C)"}</strong>{" remaining our exclusive beneficiary."}</p>
          <p>{"Funds raised through the Creator Clash Tiltify campaign go "}<strong>{"directly to the Charity"}</strong>{". All donations and designated fundraising proceeds go to SU2C."}</p>
          <p>{"While Creator Clash is a traditionally promoted, for-profit event, the financial success of the event does not impact the amount raised for charity. This structure, separating charitable fundraising from business operations, is new to this year and was put in place after the setbacks and confusion that followed last year's event. It's part of our commitment to rebuild trust and keep our charitable mission clear, transparent, and protected."}</p>
        </>
      ),
    },
    {
      q: "Why did Ian and Anisa step away from Creator Clash?",
      a: "Ian and Anisa have stepped away from Creator Clash in every capacity as stakeholders, event managers, and creatives, to give the event space to grow under new leadership. They chose to step down to allow CC to separate itself from the ongoing controversy, allowing us to work towards rebuilding trust and refocusing on what the event was always meant to be: something that supports creators, entertains fans, and raises money for a good cause. All other partners remain the same.",
      autop: true,
    },
    {
      q: "Who are the official spokespeople for the event?",
      a: "Your hosts and spokespeople for Creator Clash 3 are Arin Hanson, Alanah Pearce, and Ethan Nestor.",
      autop: true,
    },
    {
      q: "Do the fighters get paid?",
      a: (
        <ul>
          <li>{"Yes. Each fighter receives a guaranteed "}<strong>{"purse"}</strong>{" to help cover training and preparation expenses."}</li>
          <li>{"In addition, "}<strong>{"20% of net profits"}</strong>{" from the event will be "}<strong>{"evenly split among all fighters"}</strong>{"."}</li>
          <li>{"A further "}<strong>{"34% profit share"}</strong>{", originally allocated to Ian and Anisa, is also being redistributed among the fighters following their departure."}</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <SEO title="Transparency Q&A | Creator Clash" description = "Transparency questions and answers pertaining to updates to Creator Clash, the production, and its ownership." />
      <div className="page-header">
        <div className="page-header-container">
          <h1 className="pxglow">{'Transparency Q&A'}</h1>
        </div>
      </div>
      <div id="faq">
        <Faq faqs={faqs} />
      </div>
      <Footer />
    </>
  );
}
