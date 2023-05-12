// Import Swiper React components
import { Autoplay } from 'swiper';
import fiAtlas from '../../../assets/fianzas/brands/atlas.png';
import fiBerkley from '../../../assets/fianzas/brands/berkley.png';
import fiCbi from '../../../assets/fianzas/brands/cbi.png';
import fiChub from '../../../assets/fianzas/brands/chubb.png';
import fiDoroma from '../../../assets/fianzas/brands/doroma.png';
import fiInsurgentes from '../../../assets/fianzas/brands/insurgentes.png';
import fiMapre from '../../../assets/fianzas/brands/mapfre.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './css/BrandSwiper.css';


export default () => {
  return (
    <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        speed={1000}
        autoplay={ {delay: 1000, waitForTransition: false }}
      className='brandswiper'
    >
      <SwiperSlide><div className='brand-container'><img src={fiAtlas}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiBerkley}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiCbi}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiChub}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiDoroma}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiInsurgentes}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={fiMapre}></img></div></SwiperSlide>

    </Swiper>
  );
};