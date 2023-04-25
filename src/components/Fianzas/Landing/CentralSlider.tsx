import './css/Base.css';
import './css/CentralSlider.css';
import fiGirlBk from '../../../assets/fianzas/fianzas-girl-home.png';
import curvedBk from '../../../assets/general/curved-background.png';
import curvedFaded from '../../../assets/general/curved-faded.png';
export const CentralSlider = () => {

    return (
        <section className="centralslider">
            <div className='flex-content'>
                <div className='left-div'>
                    <div className='home-intro'>
                        <h1>Expertos en el ramo afianzador</h1>
                        
                        <p>La importancia de las fianzas y su inmediatez es algo que entendemos a la perfección, así que nos aseguramos de que tengas tu fianza en 24 horas.</p>
                        <div className='buttons-array'>
                            <a className='btn-fianzas'>¡Cotiza tu fianza!</a>
                            <a className='btn-fianzas-outline'>Requisitos</a>
                            <a className='btn-fianzas-outline'>Contáctanos</a>
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

        <img src={curvedFaded} className='curved-faded'></img>
        </section>
    );
}