import './css/Services.css'
import seServicesBk from '../../../assets/seguros/seguros-services-bk.png'
import seService01 from '../../../assets/seguros/general/seguros-services01.png';
import seService02 from '../../../assets/seguros/general/seguros-services02.png';
import seService03 from '../../../assets/seguros/general/seguros-services03.png';
import seService04 from '../../../assets/seguros/general/seguros-services04.png';
import seService05 from '../../../assets/seguros/general/seguros-services05.png';
import seService06 from '../../../assets/seguros/general/seguros-services06.png';
import { Link } from 'react-router-dom';
export const Services = ()=> {

    return (
        <div className='services-seguros'>

            <div className='services-upper-content'>
                
                <div className='cover'></div>
                <img src={seServicesBk} className='services-bkimage'></img>

                    <div className='service-main'>
                        
                        <h1>En Impulsa Asesores</h1>

                        <div className='services-container'>

                            <div className='services-box'>
                                <img src={seService01}></img>
                                <h4>Siempre contigo</h4>
                                <p>Manteniendo una atención personalizada.</p>
                            </div>

                            <div className='services-box'>
                                <img src={seService02}></img>
                                <h4>Gestionamos tus seguros</h4>
                                <p>Siempre en tiempos menores a los del mercado.</p>
                            </div>

                            <div className='services-box'>
                                <img src={seService03}></img>
                                <h4>Personaliza tu seguro</h4>
                                <p>Escoge las coberturas y la forma de pago que mejor se ajuste a tus necesidades.</p>
                            </div>

                            <div className='services-box'>
                                <img src={seService04}></img>
                                <h4>Seguimiento</h4>
                                <p>Te apoyamos en todo el proceso de tu siniestro.</p>
                            </div>

                            <div className='services-box'>
                                <img src={seService05}></img>
                                <h4>Las mejores aseguradoras</h4>
                                <p>Encontrarás el seguro adecuado con las principales compañías del país.</p>
                            </div>

                            <div className='services-box'>
                                <img src={seService06}></img>
                                <h4>Tus seguros en un solo lugar</h4>
                                <p>Descarga nuestra App Impulsa To Go y lleva tus seguros en la palma de la mano.</p>
                            </div>


                        </div>
                    </div>
            </div>


        </div>
    )
}