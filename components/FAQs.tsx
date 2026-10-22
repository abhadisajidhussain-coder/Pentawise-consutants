
"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How do I start my study abroad process with Pentawise?",
    answer:
      "Simply book a free consultation with our experts. We'll assess your goals, help you choose the right country and university, and guide you through the next steps.",
  },
  {
    question: "Which countries can I apply to through Pentawise?",
    answer:
      "Pentawise provides guidance for study opportunities across 20+ countries, helping you explore universities that match your academic goals.",
  },
  {
    question: "Do you help with scholarships?",
    answer:
      "Yes, our team can guide you in exploring scholarship opportunities and understanding the eligibility criteria and application requirements.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Requirements vary by university and country. Common documents include academic transcripts, certificates, a passport, English-language test results, and other supporting documents.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <section className="faqs-section" aria-labelledby="faqs-heading">
      <div className="faqs-container">
        <div className="faqs-heading">
          <h2 id="faqs-heading">
            Your Questions,
            <br />
            Our Answers
          </h2>
        </div>

        <div className="faqs-list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-active" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span>
                    {index + 1}. {item.question}
                  </span>

                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
