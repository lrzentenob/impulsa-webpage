import './css/Base.css';
import './css/CentralSlider.css';
import cnGirlHome from '../../../assets/consultoria/consult-girl-home.png';
import curvedBk from '../../../assets/general/curved-background.png';

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
                        <h1>Impulsamos tu crecimiento</h1>
                        
                        <p>Te brindamos asesorías contables, fiscales y de tecnología de la información.</p>
                        <div className='buttons-array'>
                            <button className='btn-consult' onClick={onShowContactForm}>Contáctanos</button>
                            {/* <a className='btn-fianzas-outline' href='/requisitos'>Requisitos</a>
                            <a className='btn-fianzas-outline' onClick={onShowContactForm}>Contáctanos</a> */}
                        </div>
                    </div>

                </div>
                <div className='right-div'>
                    <div className='curved-bk-img'>
                        <img src={cnGirlHome} alt='fianzas girl' className='girl-img'/>
                        <img src={curvedBk} alt='curved background' className='curvedbk-img'/>
                    </div>

                </div>
            </div>
            
        </section>
    );
}