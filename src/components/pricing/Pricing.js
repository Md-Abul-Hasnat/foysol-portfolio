import React from "react";
import PriceCard from "../Price-card/PriceCard";
import "./pricing.css";
import { pricing } from "../data";

const Pricing = () => {
  return (
    <section className="price">
      <h1 className="heading">OUR PRICING TABLES</h1>
      <h2 className="sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et
        aspernatur sit distinctio .
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
