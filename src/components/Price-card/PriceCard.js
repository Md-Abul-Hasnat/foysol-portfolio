import React from "react";
import { Link } from "react-router-dom";
import "./priceCard.css";

const PriceCard = (props) => {
  const {
    price,
    cetagory,
    project,
    storage,
    dataTransfer,
    bandwith,
    security,
    btn,
  } = props.data;
  return (
    <section className="price-card">
      <h1>
        <span>$</span> {price}
      </h1>
      <p className="cetagory"> {cetagory} </p>
      <p> {project} </p>
      <p> {storage} </p>
      <p> {dataTransfer} </p>
      <p> {bandwith} </p>
      <p> {security} </p> <br />
      <Link className="price-btn" to="/">
        {btn}
      </Link>
    </section>
  );
};

export default PriceCard;
