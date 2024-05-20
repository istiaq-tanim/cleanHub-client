"use client";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import img1 from "../../../../../public/02-home-2.jpg";
import img2 from "../../../../../public/03.jpg";
import img3 from "../../../../../public/images.jpg";
const Banner = () => {
  return (
    <div className="relative -top-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        modules={[Navigation]}
        className="mySwiper group overflow-hidden relative w-full h-[600px]"
      >
        <SwiperSlide>
          <Image src={img1} fill={true} alt="banner" className="object-fill" />
          <div className="absolute flex items-center justify-center w-full h-full left-0 top-0">
            <div className="w-10/12 max-w-7xl text-[#1d96b4] mx-auto space-y-2 lg:pl-0 pl-2">
              <h1 className="text-3xl lg:text-3xl font-serif">
                Stop working. Spare some time for real life.
              </h1>
              <p className="semibold">
                Our cleaning product does the job right the first time.
              </p>
              <button className="bg-[#5EBED6] hover:bg-[#1d96b4]  text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image fill={true} alt="banner" className="object-fill" src={img3} />
          <div className="absolute flex items-center justify-center w-full h-full left-0 top-0 ">
            <div className="w-10/12 max-w-7xl text-[#1d96b4] mx-auto space-y-2 lg:pl-0 pl-2">
              <h1 className="text-3xl lg:text-3xl font-serif">
                Explore Our Top Picks
              </h1>
              <p className="semibold">
                From multi-surface cleaners to eco-friendly options, <br /> find
                everything you need to keep your space spotless.
              </p>
              <button className="bg-[#5EBED6] hover:bg-[#1d96b4]  text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="object-fill" fill={true} src={img2} alt="banner" />
          <div className="absolute flex items-center justify-center w-full h-full left-0 top-0">
            <div className="w-10/12 max-w-7xl text-[#1d96b4] mx-auto space-y-2 lg:pl-0 pl-2">
              <h1 className="text-3xl lg:text-3xl font-serif">
                Natural Cleaning Products
              </h1>
              <p className="semibold">
                Clean your home sustainably with our range of eco-friendly
                cleaning products,
                <br /> safe for you and the planet.
              </p>
              <button className="bg-[#5EBED6] hover:bg-[#1d96b4]  text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <div className="btn-next z-10 top-[50%] duration-500 absolute group-hover:left-0 -left-[25rem] w-[40px] h-[40px] bg-[#1d96b4] grid place-items-center text-white">
          <HiOutlineArrowNarrowLeft></HiOutlineArrowNarrowLeft>
        </div>
        <div className="btn-prev z-10 top-[50%] duration-500 absolute group-hover:right-0 -right-[25rem] w-[40px] h-[40px] bg-[#1d96b4] grid place-items-center text-white">
          <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
