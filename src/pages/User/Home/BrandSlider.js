import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { ContainerHeader } from "../../../components/user/ContainerHeader";

export const BrandSlider = () => {
  return (
    <div className="container mx-auto mt-8 mb-12">
      <ContainerHeader title="Popular Brands" />
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper w-full h-[200px]"
      >
        <SwiperSlide>
          <img
            src="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/06/amozone.png"
            alt="Amazon"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://telecomtalk.info/wp-content/uploads/2019/08/flipkart-video-streaming-service.jpg.webp"
            alt="Flipkart"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://startuptrak.com/wp-content/uploads/2021/11/nykaa.jpg"
            alt="Nykaa"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.wired.com/photos/65e87bef436ea899e9efa852/4:3/w_2664,h_1998,c_limit/realme.jpg"
            alt="Realme"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i0.wp.com/androidguys.com/wp-content/uploads/2020/07/OnePlus-Logo.png?resize=1068%2C712&ssl=1"
            alt="OnePlus"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.99logos.in/img/blog/Milton-Main-Baner.jpg"
            alt="Milton"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
