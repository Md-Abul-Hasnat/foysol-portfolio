import React from "react";
import "./faqs.css";
import { faqsData } from "../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <h1 className="heading">FAQs</h1>
      <h2 className="sub-heading">
        Some question's and answer's you might want to know.
      </h2>
      <div className="faqs-wrapper">
        {faqsData.map((faqData) => (
          <FAQ key={faqData.id} data={faqData} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
