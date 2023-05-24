// Import Swiper React components
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import seBrand01 from '../../../assets/seguros/brands/ALLIANZ.png';
import seBrand02 from '../../../assets/seguros/brands/ZURICH.png';
import seBrand03 from '../../../assets/seguros/brands/TOKIOMARINE.png';
import seBrand04 from '../../../assets/seguros/brands/THONA.png';
import seBrand05 from '../../../assets/seguros/brands/SURA.png';
import seBrand06 from '../../../assets/seguros/brands/SATLAS.png';
import seBrand07 from '../../../assets/seguros/brands/Qualitas.png';
import seBrand08 from '../../../assets/seguros/brands/PREVEM.png';
import seBrand09 from '../../../assets/seguros/brands/PANAMERICAN.png';
import seBrand10 from '../../../assets/seguros/brands/METLIFE.png';
import seBrand11 from '../../../assets/seguros/brands/MAPFRE.png';
import seBrand12 from '../../../assets/seguros/brands/INSIGNIA.png';
import seBrand13 from '../../../assets/seguros/brands/INBURSA.png';
import seBrand14 from '../../../assets/seguros/brands/HDI.png';
import seBrand15 from '../../../assets/seguros/brands/GNP.png';
import seBrand16 from '../../../assets/seguros/brands/GMX.png';
import seBrand17 from '../../../assets/seguros/brands/GENERAL-SEGUROS.png';
import seBrand18 from '../../../assets/seguros/brands/CHUBB.png';
import seBrand19 from '../../../assets/seguros/brands/BXmas.png';
import seBrand20 from '../../../assets/seguros/brands/BUPA.png';
import seBrand21 from '../../../assets/seguros/brands/BERKLEY.png';
import seBrand22 from '../../../assets/seguros/brands/BANORTE.png';
import seBrand23 from '../../../assets/seguros/brands/AXXA.png';
import seBrand24 from '../../../assets/seguros/brands/ARGOS.png';
import seBrand25 from '../../../assets/seguros/brands/AIG.png';
import seBrand26 from '../../../assets/seguros/brands/AFIRME.png';
import seBrand27 from '../../../assets/seguros/brands/ACE.png';
import seBrand28 from '../../../assets/seguros/brands/ABA.png';



// Import Swiper styles
import 'swiper/css';
import './css/BrandSwiper.css'

export default () => {
  return (
    <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        speed={1500}
        loop={true}
        autoplay={ {delay: 500, waitForTransition: true }}
      className='brandswiper-seguros'
    >
      <SwiperSlide><div className='brand-container'><img src={seBrand01}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand02}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand03}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand04}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand05}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand06}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand07}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand08}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand09}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand10}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand11}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand12}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand13}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand14}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand15}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand16}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand17}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand18}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand19}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand20}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand21}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand22}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand23}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand24}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand25}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand26}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand27}></img></div></SwiperSlide>
      <SwiperSlide><div className='brand-container'><img src={seBrand28}></img></div></SwiperSlide>

    </Swiper>
  );
};