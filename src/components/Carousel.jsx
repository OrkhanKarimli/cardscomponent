import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carouselimg from "../image/carousel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ReactComponent as Iconnext } from "../icons/ArrowRight.svg";
import { ReactComponent as Iconprev } from "../icons/ArrowLeft.svg";
const Carousel = () => {
  const swiper = useSwiper();
  return (
    <div className="container">
      <div className="row justify-center">
        <div className="col-md-6 custom-slider-main">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
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
          </Swiper>
          <div className="custom-button-next ">
            <Iconnext onClick={() => swiper.slideNext()} />
          </div>
          <div className="custom-button-prev">
            <Iconprev onClick={() =>swiper.slidePrev()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
// swiper-button-next
