import React from "react";

const ServiceCard = (props) => {
  return (
    <article>
      <img src={props.data.img} alt="social media marketing" />
      <h3> {props.data.title} </h3>
      <p> {props.data.text} </p>
    </article>
  );
};

export default ServiceCard;
