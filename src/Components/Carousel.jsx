import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Carousel.css';
import {
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCreative,
  EffectCards,
} from "swiper";
import { Pagination, Navigation } from "swiper";
// const image =
//   "data:image/jpeg;base64,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";

const imaget =
  "https://marketplace.canva.com/EAFUdYqHyx0/1/0/1280w/canva-green-modern-customer-testimonials-instagram-post-p8RrhQOeAmc.jpg";
const image =
  "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp";

const companies = [
  {
    name: "Company A",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106120/buringTree/HDFC_logo_cjlf2d.svg",
  },
  {
    name: "Company B",
    image:
      "https://www.pngkit.com/png/full/967-9673227_cute-ideas-to-make-your-home-mehendi-function.png",
  },
  {
    name: "Company C",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106188/buringTree/logo_trrsgh.png",
  },
  {
    name: "Company D",
    image:
      "https://bookmyinteriorlead.com/wp-content/uploads/2020/08/300-X-110-LOGO-FOR-WHITE-BACKGROUND.png",
  },
  {
    name: "Company E",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d49e8c18ba68c00018ad207/1596589507890-LOJSBWNTQZY0IH779E97/Care+Connect+-+Logo+w+Tag+CMYK.png",
  },
  {
    name: "Company F",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687107071/buringTree/logo-ukraine-5e86fcda835fb7fe833446766436041f_s7pbt1.svg",
  },
  {
    name: "Company G",
    image: "https://img1.digitallocker.gov.in/assets/img/digiLocker-Large.png",
  },
  {
    name: "Company H",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106841/buringTree/primary_gaide4.svg",
  },
];

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // Set initial state here
//   }

//   componentDidMount() {}

//   render() {
export const Carousel=()=> {
  // reload on mediaQuery
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   function handleResize() {
//     const width = window.innerWidth;
//     if (width <= 300 || width <= 600 || width <= 900) {
//       window.location.reload(); // Reload the page
//     }
//   }
  return (
    <>
   
    
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 5,
            //10
            stretch: 30,
            depth: 120,
            //5
            modifier: 6,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[
            EffectCoverflow,
            EffectCube,
            EffectFade,
            EffectFlip,
            EffectCreative,
            EffectCards,
            Pagination,
            Navigation,
          ]}
          className="swiper_container"
          initialSlide={3}
        >
          <SwiperSlide>
            <h1>Project 1</h1>
            <img id="img1" className="image" src={image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <h1>Project 2</h1>
            <img src={image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <h1>Project 3</h1>
            <img src={image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <h1>Project 4</h1>
            <img src={image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <h1>Project 5</h1>
            <img src={image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <h1>Project 6</h1>
            <img src={image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <h1>Project 7</h1>
            <img src={image} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </>)}