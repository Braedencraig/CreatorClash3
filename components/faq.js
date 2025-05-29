import Accordion from "./accordion";

export default function Faq({ faqs = [] }) {
  return (
    <div className="faq-bg">
      <div className="faq">
        {faqs.map((faq, i) => (
          <Accordion key={i} isFaq title={faq.q}>
            {faq.autop ? (
              <p>{faq.a}</p>
            ) : (
              <>{faq.a}</>
            )}
          </Accordion>
        ))}
      </div>
    </div>
  );
}
