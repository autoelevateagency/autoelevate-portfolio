type FaqItem = {
  question: string;
  answer: string;
};

type FaqBlockProps = {
  eyebrow?: string;
  title: string;
  items: FaqItem[];
};

export const FaqBlock = ({
  eyebrow = "FAQ",
  title,
  items,
}: FaqBlockProps): React.ReactElement => (
  <section className="inner-section faq-section">
    <div className="inner-section-head">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="inner-h2">{title}</h2>
    </div>
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary className="faq-question">{item.question}</summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  </section>
);
