import './css/Base.css';
import './css/CentralSlider.css';
import fiGirlBk from '../../../assets/fianzas/fianzas-girl-home.png';
import curvedBk from '../../../assets/general/curved-background.png';

import { BackgroundImages } from './BackgroundImages';
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
                        <h1>Expertos en el ramo afianzador</h1>
                        
                        <p>La importancia de las fianzas y su inmediatez es algo que entendemos a la perfección, así que nos aseguramos de que tengas tu fianza en 24 horas.</p>
                        <div className='buttons-array'>
                            <a className='btn-fianzas' href='/cotizacion'>¡Cotiza tu fianza!</a>
                            <a className='btn-fianzas-outline' href='/requisitos'>Requisitos</a>
                            <a className='btn-fianzas-outline' onClick={onShowContactForm}>Contáctanos</a>
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
            <BackgroundImages />
        </section>
    );
}