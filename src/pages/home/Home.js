import React from "react";
import HomeHero from "../../components/homeHero/HomeHero";
import Profile from "../../components/profile/Profile";
import Review from "../../components/review/Review";
import Speciality from "../../components/services/Speciality";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Profile />
      <Speciality />
      <Review />
    </>
  );
};

export default Home;
