import React from 'react';
import './Slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
//importing images
import car1 from '../../../assets/cars/car1.jpg';
import car3 from '../../../assets/cars/car3.jpg';
import car4 from '../../../assets/cars/car4.jpg';
import car5 from '../../../assets/cars/car5.jpg';


const Slider = () => {
    return (
        <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      className='swiper-main-container swiper-slide'
    >
      <SwiperSlide className=''>
        <img className='slider-image' src={car1} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={car3} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={car4} alt='Slider Car' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slider-image' src={car5} alt='Slider Car' />
      </SwiperSlide>
    </Swiper>
    );
};

export default Slider;