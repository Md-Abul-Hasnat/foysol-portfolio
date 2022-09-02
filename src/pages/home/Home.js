import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import HomeHero from "../../components/homeHero/HomeHero";
import Pricing from "../../components/pricing/Pricing";
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
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
