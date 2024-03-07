import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/pc.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const MainBanner = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper mainSwiper-slide "
        id="position"
      >
        <SwiperSlide className="mainbanner01"></SwiperSlide>
        <SwiperSlide className="mainbanner02"></SwiperSlide>
        <SwiperSlide className="mainbanner03"></SwiperSlide>
        <SwiperSlide className="mainbanner04"></SwiperSlide>
      </Swiper>
    </>
  );
};
