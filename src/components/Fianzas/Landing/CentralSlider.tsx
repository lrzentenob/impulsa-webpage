import './css/Base.css';
import './css/CentralSlider.css';
import fiGirlBk from '../../../assets/fianzas/fianzas-girl-home.png';
import sliderRequisitos from '../../../assets/fianzas/fianzas-slider-requisitos.png';
import sliderExpertosEnElRamo from '../../../assets/fianzas/fianzas-slider-expertos.png';
import slide3girl from '../../../assets/fianzas/slider/slide3-girl.png';
import curvedBk from '../../../assets/general/curved-background.png';

import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CentralSlider = () => {
    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }

    return (

        <section className="centralslider">
            <Swiper navigation={true} modules={[Autoplay, Navigation]} speed={500} autoplay={ {delay: 5000, waitForTransition: true }} className="central-swiper" >
                    <SwiperSlide className='slide'>
                        <div className='flex-content'>
                            <div className='left-div'>
                                <div className='home-intro'>
                                    <h1>Cotiza tu fianza</h1>
                                    
                                    <p>Si desea saber el costo aproximado de su fianza con gusto se lo proporcionamos.</p>
                                    <div className='buttons-array'>
                                        <Link className='btn-fianzas' to='/fianzas/cotizacion'>¡Cotiza ya!</Link>                            
                                    </div>
                                </div>

                            </div>
                            <div className='right-div'>
                                <div className='curved-bk-img'>
                                    <img src={fiGirlBk} alt='fianzas girl' className='girl-img'/>
                                    <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                                </div>

                            </div>                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <div className='flex-content'>
                            <div className='left-div'>
                                <div className='home-intro'>
                                    <h1>Requisitos</h1>
                                    
                                    <p>¿Necesita una Fianza?, consulte los requisitos que debe cumplir.</p>
                                    <div className='buttons-array'>
                                        <Link className='btn-fianzas-outline' to='/fianzas/requisitos'>Requisitos</Link>                            
                                    </div>
                                </div>

                            </div>
                            <div className='right-div'>
                                <div className='curved-bk-img'>
                                    <img src={sliderRequisitos} alt='fianzas girl' className='girl-img'/>
                                    <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                                </div>

                            </div>                            
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='slide'>
                        <div className='flex-content'>
                            <div className='left-div'>
                                <div className='home-intro'>
                                    <h1>Contáctanos</h1>
                                    
                                    <p>La urgencia de las Fianzas es algo que entendemos a la perfección, así que nos aseguramos de que tenga su fianza en 24 horas.</p>
                                    <div className='buttons-array'>
                                        <Link className='btn-fianzas' to='' onClick={onShowContactForm}>Contáctanos</Link>                            
                                    </div>
                                </div>

                            </div>
                            <div className='right-div'>
                                <div className='curved-bk-img'>
                                    <img src={slide3girl} alt='fianzas girl' className='girl-img'/>
                                    <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                                </div>

                            </div>                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <div className='flex-content'>
                            <div className='left-div'>
                                <div className='home-intro'>
                                    <h1>Expertos en el ramo afianzador</h1>
                                    
                                    <p>Con más de 41 años de experiencia usted recibirá siempre la mejor asesoría del mercado.</p>
                                    <div className='buttons-array'>
                                        <Link className='btn-fianzas' to='/fianzas/oficinas'>Ubícanos</Link>                            
                                    </div>
                                </div>

                            </div>
                            <div className='right-div'>
                                <div className='curved-bk-img'>
                                    <img src={sliderExpertosEnElRamo} alt='fianzas girl' className='girl-img'/>
                                    <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                                </div>

                            </div>                            
                        </div>

                    </SwiperSlide>

            </Swiper> 

            {/* <Swiper
                    modules={[Autoplay,Navigation,Pagination]}
                    navigation
                    slidesPerView={1}
                    speed={5000}
                    autoplay={ {delay: 5000, waitForTransition: false }}
                    className='central-swiper' >
                <SwiperSlide>
                        <div className='brand-container'>
                            
                            <p>Brand 1</p>
                            <div className="swiper-button-next"></div>
                        </div>
                    </SwiperSlide>
                <SwiperSlide><div className='brand-container'><p>Brand 2</p></div></SwiperSlide>
                <SwiperSlide><div className='brand-container'><p>Brand 3</p></div></SwiperSlide>

            </Swiper>
  */}


            
            
        </section>
    );
}