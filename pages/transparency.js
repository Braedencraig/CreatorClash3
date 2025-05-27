import Footer from "../components/footer";
import Faq from "../components/faq";
import SEO from "../components/seo";

export default function TransparencyPage() {

  const faqs = [
    {
      q: "When and where is the updated Creator Clash 3 event taking place?",
      a: "Creator Clash 3 will now take place on Saturday, October 25th, 2025, at the Hollywood Palladium in Los Angeles, CA. It will be broadcast live on Veeps.",
      autop: true,
    },
    {
      q: "Why was the event moved to Los Angeles?",
      a: "Los Angeles is a larger market and home to a major portion of the creator community. Hosting the event in LA also helps us reduce overall production costs, allowing us to focus more on the broadcast and charitable goals.",
      autop: true,
    },
    {
      q: "What's happening with ticket refunds?",
      a: (
        <ul>
          <li>{"All in-person ticket holders will receive a full refund through Ticketmaster."}</li>
          <li>{"PPV tickets will still be honored for the new date."}</li>
          <li>{"If you'd prefer a refund instead, it will also be available for PPV ticket holders."}</li>
          <li>{"New tickets for the LA event will go on sale later in June."}</li>
        </ul>
      ),
    },
    {
      q: "Will all the original fighters still be competing?",
      a: "Not all fighters will be available for the new date. An updated fight card will be announced in the coming weeks.",
      autop: true,
    },
    {
      q: "Is the docuseries still happening?",
      a: "Yes, the docuseries is being postponed, but it will cover the full journey to Creator Clash 3 — including the departure of Ian and Anisa. The updated rollout schedule will be announced soon.",
      autop: true,
    },
    {
      q: "What's happening with fundraising and charity?",
      a: (
        <ul>
          <li>{"Fundraising efforts will continue and expand leading up to the new date."}</li>
          <li>{"Existing funds raised are secure and unaffected."}</li>
          <li>{"The broadcast will run as a charity stream, with Stand Up To Cancer (SU2C) remaining our exclusive beneficiary."}</li>
          <li>{"Funds raised through the Creator Clash campaign go directly to the charity."}</li>
        </ul>
      ),
    },
    {
      q: "Who are the official spokespeople for the event?",
      a: "The current spokespeople are Arin Hanson, Ethan Nestor, Alanah Pearce, and Justin Tracey.",
      autop: true,
    },
    {
      q: "Do the fighters get paid?",
      a: (
        <ul>
          <li>{"Yes. Each fighter receives a guaranteed purse to help cover training and preparation expenses."}</li>
          <li>{"In addition, "}<strong>{"20% of net profits"}</strong>{" from the event will be "}<strong>{"evenly split among all fighters"}</strong>{"."}</li>
          <li>{"A further "}<strong>{"34% profit share"}</strong>{", originally allocated to Ian and Anisa, is also being redistributed among the fighters following their departure."}</li>
        </ul>
      ),
    },
    {
      q: "Why did Ian and Anisa step away from Creator Clash?",
      a: "Ian and Anisa have officially stepped down from their roles in Creator Clash. This decision was made to allow the event to move forward under new leadership, with a renewed focus on transparency, fighter support, and charitable impact. All other partners remain the same.",
      autop: true,
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
