// Import Swiper React components
import { Autoplay } from 'swiper';
import fiBrand01 from '../../../assets/fianzas/brands/1-aserta.png';
import fiBrand02 from '../../../assets/fianzas/brands/2-berkley.png';
import fiBrand03 from '../../../assets/fianzas/brands/3-chubb.png';
import fiBrand04 from '../../../assets/fianzas/brands/4-insurgentes.png';
import fiBrand05 from '../../../assets/fianzas/brands/5-doroma.png';
import fiBrand06 from '../../../assets/fianzas/brands/6-sofimex.png';
import fiBrand07 from '../../../assets/fianzas/brands/7-liberty.png';
import fiBrand08 from '../../../assets/fianzas/brands/8-fianzas-atlas.png';
import fiBrand09 from '../../../assets/fianzas/brands/9-cescemex.png';
import fiBrand10 from '../../../assets/fianzas/brands/10-fiducia.png';
import fiBrand11 from '../../../assets/fianzas/brands/11-mapfre.png';
import fiBrand12 from '../../../assets/fianzas/brands/12-avla.png';
import fiBrand13 from '../../../assets/fianzas/brands/13-toki-marine.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './css/BrandSwiper.css';


export default () => {
  return (
    
    <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        speed={1500}
        allowTouchMove={true}
        loop={true}
        autoplay={{ delay: 500, disableOnInteraction: false } }
        className='brandswiper-fianzas'
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
      <SwiperSlide><div className='brand-container'><img src={fiBrand13}></img></div></SwiperSlide>

    </Swiper>
    
  );
};