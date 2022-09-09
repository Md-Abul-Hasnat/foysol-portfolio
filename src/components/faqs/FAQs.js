import React from "react";
import "./faqs.css";
import { faqsData } from "../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <h1 className="heading">FAQs</h1>
      <h2 className="sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, vel.
        Accusantium autem quisquam enim distinctio?
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
