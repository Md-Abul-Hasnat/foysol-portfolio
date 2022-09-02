import React from "react";
import PriceCard from "../Price-card/PriceCard";
import "./pricing.css";
import { pricing } from "../data";

const Pricing = () => {
  return (
    <section id="pricing" className="price">
      <h1 className="heading"> PRICING TABLES</h1>
      <h2 className="sub-heading">
        We take a consultative approach to every client engagement and find
        actionable solutions that will help your organization achieve the best
        outcomes.
      </h2>
      <div className="price-main">
        {pricing.map((price) => (
          <PriceCard data={price} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
