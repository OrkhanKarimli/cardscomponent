import React from 'react'
import { ReactComponent as Iconnext } from "../icons/ArrowRight.svg";
import { ReactComponent as Iconprev } from "../icons/ArrowLeft.svg";
import { useSwiper } from "swiper/react";
export const SwiperNavButtons = () => {
    const swiper = useSwiper();
  return (
    <>
        <div className="custom-button-next  swiper-button-next">
    <Iconnext onClick={()=>swiper.slideNext()} />
  </div>
  <div className="custom-button-prev swiper-button-prev">
    <Iconprev onClick={() =>swiper.slidePrev()} />
  </div>
    </>

  )
}

