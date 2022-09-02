import React from "react";
import "./profile.css";
import foysolpassport from "../../images/foysol6.png";

const Profile = () => {
  return (
    <section class="profile">
      <h1 class="heading">About ME</h1>
      <h2 class="sub-heading">I'm a creative multitasking digital marketer</h2>
      <div class="profile-wrapper">
        <div class="profile-left">
          <h3>About me</h3>
          <p>
            I am an allround web developer. I am a senior programmer with good
            knowledge of front-end techniques. Vitae sapien pellentesque
            habitant morbi tristique senectus et. Aenean sed adipiscing diam
            donec adipiscing tristique risus.
          </p>
          <div class="socials">
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="profile-center">
          <img src={foysolpassport} alt="Foysol" />
        </div>
        <div class="profile-right">
          <h3>Details</h3>
          <h4>Name :</h4>
          <p>Foysol Ahmed</p>
          <h4>Age :</h4>
          <p>20 Years</p>
          <h4>Location :</h4>
          <p>'s-Hertogenbosch, The Netherlands, Earth</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
