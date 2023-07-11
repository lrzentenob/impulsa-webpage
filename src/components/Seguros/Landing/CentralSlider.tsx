import './css/Base.css';
import './css/CentralSlider.css';
import seGirlBk from '../../../assets/seguros/seguros-girl-home.png';
import seAutoPhoto from '../../../assets/seguros/seguros-auto-foto.png';
import slider01Girl from '../../../assets/seguros/slider/slide01-girl.png';
import curvedBk from '../../../assets/seguros/general/seguros-curvedbk.png';
import seSoycliPortrait01 from '../../../assets/seguros/general/seguros-soycli-portrait01.png';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from 'swiper';
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
    function onGoTo () {
        const item = document.getElementById('seguros-productos');
        item?.scrollIntoView()
    }
    return (
        <section className="centralslider">
            <Swiper navigation={true} modules={[Autoplay,Navigation]} speed={500} autoplay={ {delay: 5000, waitForTransition: true }} className="central-swiper">
            
                <SwiperSlide>            
                    <div className='flex-content'>
                        <div className='left-div'>
                            <div className='home-intro'>
                                <h1>En Impulsa Asesores nos interesa</h1>
                                <p>Satisfacer tus necesidades de protección, tanto personales como patrimoniales. Para lograrlo te proponemos el mejor programa de protección considerando las coberturas adecuadas, en un marco de responsabilidad, calidad y oportuno servicio.</p>
                                <div className='buttons-array'>
                                    <button className='btn-seguros' onClick={onGoTo}>Ver Más</button>
                                    {/* <a className='btn-fianzas-outline' href='/requisitos'>Requisitos</a>
                                    <a className='btn-fianzas-outline' onClick={onShowContactForm}>Contáctanos</a> */}
                                </div>
                            </div>

                        </div>
                        <div className='right-div'>
                            <div className='curved-bk-img'>
                                <img src={slider01Girl} alt='fianzas girl' className='girl-img-size2'/>
                                <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
    
                <SwiperSlide>            
                    <div className='flex-content'>
                        <div className='left-div'>
                            <div className='home-intro'>
                                <h1>Protección para tu salud, hogar y auto.</h1>
                                
                                <p>Nosotros te asesoramos para que elijas el seguro que más te conviene.</p>
                                <div className='buttons-array'>
                                    <button className='btn-seguros' onClick={onShowContactForm}>Contáctanos</button>
                                    {/* <a className='btn-fianzas-outline' href='/requisitos'>Requisitos</a>
                                    <a className='btn-fianzas-outline' onClick={onShowContactForm}>Contáctanos</a> */}
                                </div>
                            </div>
                            
                        </div>
                        <div className='right-div'>
                            <div className='curved-bk-img'>
                                <img src={seAutoPhoto} alt='fianzas girl' className='girl-img auto-seguros-photo'/>
                                <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                {/*<SwiperSlide>            
                    <div className='flex-content'>
                        <div className='left-div'>
                            <div className='home-intro'>
                                <h1>Descarga nuestra App</h1>
                                
                                <p>Podrás reportar de inmediato tu siniestro. Conoce los beneficios de contratar tu seguro con nosotros.</p>
                                <div className='buttons-array'>
                                    <Link className='btn-seguros' to='/seguros/soycliente' >Ver Más</Link>
                                    {/* <a className='btn-fianzas-outline' href='/requisitos'>Requisitos</a>
                                    <a className='btn-fianzas-outline' onClick={onShowContactForm}>Contáctanos</a> }
                                </div>
                            </div>

                        </div>
                        <div className='right-div'>
                            <div className='curved-bk-img'>
                                <img src={seSoycliPortrait01} alt='fianzas girl' className='girl-img-size2'/>
                                <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                            </div>

                        </div>
                    </div>
                                </SwiperSlide>*/}


            </Swiper>
        </section>
    );
}