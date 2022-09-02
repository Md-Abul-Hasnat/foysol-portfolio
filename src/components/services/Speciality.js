import React from "react";
import "./speciality.css";
import seo from "../../images/seo.png";
import yt from "../../images/yt-monitization.png";
import sm from "../../images/social-marketing.jpg";
import pr from "../../images/page-ranking.png";
import SpecialityCard from "../serviceCard/SpecialityCard";

const Speciality = () => {
  const specialityCardData = [
    {
      img: seo,
      title: "Search Engine Optimaization",
      text: `
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            tenetur repellendus perspiciatis veniam cumque, accusamus architecto
            doloremque vitae enim consequuntur?`,
    },
    {
      img: yt,
      title: "Youtube Marketing",
      text: `
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
              tenetur repellendus perspiciatis veniam cumque, accusamus architecto
              doloremque vitae enim consequuntur?`,
    },
    {
      img: sm,
      title: "Social Media Marketing",
      text: `
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
              tenetur repellendus perspiciatis veniam cumque, accusamus architecto
              doloremque vitae enim consequuntur?`,
    },
    {
      img: pr,
      title: "Page Ranking",
      text: `
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
              tenetur repellendus perspiciatis veniam cumque, accusamus architecto
              doloremque vitae enim consequuntur?`,
    },
  ];

  return (
    <section id="services" class="special-section">
      <h1 class="heading">My Services</h1>
      <h2 class="sub-heading">
        Want to boost your business growth ? <br />
        Solution is here
      </h2>
      <div class="special-wrapper">
        {specialityCardData.map((data) => (
          <SpecialityCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default Speciality;
