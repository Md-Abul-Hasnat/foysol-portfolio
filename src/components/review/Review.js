import React from "react";
import "./review.css";
import review1 from "../../images/review1.png";
import review2 from "../../images/review2.png";
import review3 from "../../images/review3.png";
import review4 from "../../images/review4.jpg";
import review5 from "../../images/review5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";

const Review = () => {
  const reviewData = [
    {
      id: 1,
      img: review1,
      name: "Abul Hasnat",
      country: "Bangladesh",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus totam libero commodi placeat nesciunt unde. Hic, iusto libero? Quisquam deleniti nihil esse est natus. Velit quia, maxime minus eum aliquid deserunt error quaerat, eaque similique ipsum assumenda exercitationem dolor!`,
    },
    {
      id: 2,
      img: review2,
      name: "Foysal Ahmed",
      country: "USA",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus totam libero commodi placeat nesciunt unde. Hic, iusto libero? Quisquam deleniti nihil esse est natus. Velit quia, maxime minus eum aliquid deserunt error quaerat, eaque similique ipsum assumenda exercitationem dolor!`,
    },
    {
      id: 3,
      img: review3,
      name: "Abul Bashar",
      country: "India",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus totam libero commodi placeat nesciunt unde. Hic, iusto libero? Quisquam deleniti nihil esse est natus. Velit quia, maxime minus eum aliquid deserunt error quaerat, eaque similique ipsum assumenda exercitationem dolor!`,
    },
    {
      id: 4,
      img: review4,
      name: "Abdur Rahim",
      country: "United Kingdom",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus totam libero commodi placeat nesciunt unde. Hic, iusto libero? Quisquam deleniti nihil esse est natus. Velit quia, maxime minus eum aliquid deserunt error quaerat, eaque similique ipsum assumenda exercitationem dolor!`,
    },
    {
      id: 5,
      img: review5,
      name: "Abul Hasan",
      country: "Turkey",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus totam libero commodi placeat nesciunt unde. Hic, iusto libero? Quisquam deleniti nihil esse est natus. Velit quia, maxime minus eum aliquid deserunt error quaerat, eaque similique ipsum assumenda exercitationem dolor!`,
    },
    {
      id: 6,
      img: review3,
      name: "Abul Bashar",
      country: "India",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus totam libero commodi placeat nesciunt unde. Hic, iusto libero? Quisquam deleniti nihil esse est natus. Velit quia, maxime minus eum aliquid deserunt error quaerat, eaque similique ipsum assumenda exercitationem dolor!`,
    },
  ];

  return (
    <section className="review">
      <h1 className="heading">What Client's Say</h1>
      <h2 className="sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, est rerum.
        Exercitationem labore deserunt laudantium.
      </h2>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="review-wrapper"
      >
        {reviewData.map((data) => {
          return (
            <SwiperSlide className="review-card">
              <img src={data.img} alt="client" />
              <h2> {data.name} </h2>
              <h3> {data.country} </h3>
              <i class="fa-solid fa-quote-left"></i>
              <p> {data.text} </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
