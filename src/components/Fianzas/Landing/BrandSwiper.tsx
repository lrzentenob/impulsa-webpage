// Import Swiper React components
import { Autoplay } from 'swiper';
import fiBrand01 from '../../../assets/fianzas/brands/1-aserta.jpg';
import fiBrand02 from '../../../assets/fianzas/brands/2-berkley.jpg';
import fiBrand03 from '../../../assets/fianzas/brands/3-chubb.jpg';
import fiBrand04 from '../../../assets/fianzas/brands/4-insurgentes.jpg';
import fiBrand05 from '../../../assets/fianzas/brands/5-doroma.jpg';
import fiBrand06 from '../../../assets/fianzas/brands/6-sofimex.jpg';
import fiBrand07 from '../../../assets/fianzas/brands/7-liberty.jpg';
import fiBrand08 from '../../../assets/fianzas/brands/8-fianzas-atlas.jpg';
import fiBrand09 from '../../../assets/fianzas/brands/9-cescemex.jpg';
import fiBrand10 from '../../../assets/fianzas/brands/10-fiducia.jpg';
import fiBrand11 from '../../../assets/fianzas/brands/11-mapfre.jpg';
import fiBrand12 from '../../../assets/fianzas/brands/12-avla.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './css/BrandSwiper.css';


export default () => {
  return (
    <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        speed={1500}
        loop={true}
        autoplay={ {delay: 500, waitForTransition: true }}
      className='brandswiper'
    >
      <SwiperSlide><div className='brand-container'><img src={fiBrand01}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand02}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand03}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand04}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand05}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand06}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand07}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand08}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand09}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand10}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand11}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBrand12}></img></div></SwiperSlide>

    </Swiper>
  );
};