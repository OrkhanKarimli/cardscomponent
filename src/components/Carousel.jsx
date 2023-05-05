import React from "react";
import Carouselimg from "../image/carousel.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination,A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperNavButtons } from "./SwiperNavButtons";

const Carousel = () => {

  return (
   
     
        <div className="col-md-12 custom-slider-main">
          <Swiper
          
            modules={[Navigation,Pagination,A11y]}
            slidesPerView="auto"
          >
            <SwiperSlide className="restyle-carousel-item">
              <ul>
                <li className="re-carousel-img">
                  <img src={Carouselimg}></img>
                </li>
                <li className="re-carousel-name">
                  <p>Candice Wu</p>
                </li>
                <li className="re-carousel-text">
                  Product Manager, Logoipsum.com
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="restyle-carousel-item">
              <ul>
                <li className="re-carousel-img">
                  <img src={Carouselimg}></img>
                </li>
                <li className="re-carousel-name">
                  <p>Test2</p>
                </li>
                <li className="re-carousel-text">
                  Product Manager, Logoipsum.com
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="restyle-carousel-item">
              <ul>
                <li className="re-carousel-img">
                  <img src={Carouselimg}></img>
                </li>
                <li className="re-carousel-name">
                  <p>Test3</p>
                </li>
                <li className="re-carousel-text">
                  Product Manager, Logoipsum.com
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="restyle-carousel-item">
              <ul>
                <li className="re-carousel-img">
                  <img src={Carouselimg}></img>
                </li>
                <li className="re-carousel-name">
                  <p>Test4</p>
                </li>
                <li className="re-carousel-text">
                  Product Manager, Logoipsum.com
                </li>
              </ul>
            </SwiperSlide>
            <SwiperNavButtons/>
          </Swiper>

        </div>
  );
};

export default Carousel;
// swiper-button-next
