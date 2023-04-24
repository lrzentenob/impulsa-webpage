// Import Swiper React components
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../css/BrandSwiper.css';


export default () => {
  return (
    <Swiper
        modules={[Autoplay]}
        slidesPerView={10}
        speed={1000}
        autoplay={ {delay: 500, waitForTransition: false }}
      
      className='brandswiper'
    >
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
      <SwiperSlide>Slide 11</SwiperSlide>
      <SwiperSlide>Slide 12</SwiperSlide>
      <SwiperSlide>Slide 13</SwiperSlide>
      <SwiperSlide>Slide 14</SwiperSlide>
      <SwiperSlide>Slide 15</SwiperSlide>
      <SwiperSlide>Slide 16</SwiperSlide>
      <SwiperSlide>Slide 17</SwiperSlide>
      <SwiperSlide>Slide 18</SwiperSlide>
      <SwiperSlide>Slide 19</SwiperSlide>
      <SwiperSlide>Slide 20</SwiperSlide>
      
    </Swiper>
  );
};