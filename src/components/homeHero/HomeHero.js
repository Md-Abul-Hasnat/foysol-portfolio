import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./homehero.css";
import foysol from "../../images/foysol.png";

const HomeHero = () => {
  return (
    <>
      <Navbar />
      <section class="home-hero">
        <div class="home-hero-wrapper">
          <div class="home-hero-left">
            <img class="home-hero-img" src={foysol} alt="Foysal" />
          </div>
          <div class="home-hero-right">
            <h1>HELLO !!</h1>
            <h2>
              I'm Foysal Ahmed, <br />a digital marketer.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium amet eos, molestiae earum corporis ullam voluptatem
              nostrum possimus ad quos!
            </p>
            <a href="#"> Contact Me </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
