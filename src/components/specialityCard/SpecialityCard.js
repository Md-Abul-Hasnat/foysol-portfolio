import React from "react";

const SpecialityCard = (props) => {
  return (
    <article>
      <img src={props.data.img} alt="social media marketing" />
      <h3> {props.data.title} </h3>
      <p> {props.data.text} </p>
      <a href="#"> View More</a>
    </article>
  );
};

export default SpecialityCard;
