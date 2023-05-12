import './css/Base.css';
import './css/CentralSlider.css';
import riGirlBk from '../../../assets/riesgos/riesgos-girl-home.png';
import curvedBk from '../../../assets/general/curved-background.png';

import { Link } from 'react-router-dom';
export const CentralSlider = () => {

    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }

    return (
        <section className="centralslider">
            <div className='flex-content'>
                <div className='left-div'>
                    <div className='home-intro'>
                        <h1>Prevenir para sentirte tranquilo</h1>
                        
                        <p>Cuidamos de tu empresa con análisis de riesgos, para ofrecerte productos que te protejan.</p>
                        <div className='buttons-array'>
                            <button className='btn-riesgos' onClick={onShowContactForm}>Contáctanos</button>
                            {/* <a className='btn-fianzas-outline' href='/requisitos'>Requisitos</a>
                            <a className='btn-fianzas-outline' onClick={onShowContactForm}>Contáctanos</a> */}
                        </div>
                    </div>

                </div>
                <div className='right-div'>
                    <div className='curved-bk-img'>
                        <img src={riGirlBk} alt='fianzas girl' className='girl-img'/>
                        <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                    </div>

                </div>
            </div>
            
        </section>
    );
}