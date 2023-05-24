import './css/Services.css'
import seServicesBk from '../../../assets/consultoria/consultoria-servicios-bk.jpg'

import { Link } from 'react-router-dom';
export const Services = ()=> {

    return (
        <div className='services-consult'>
            <div className='services-upper-content'>

                <div className='cover'></div>
                <img src={seServicesBk} className='img-bk'></img>

                    <div className='service-main'>
                        <div className='service-main-left'>
                        <div className='service-title'>
                            <h1>Consultoría Profesional</h1>
                            <p>No tienes que caminar solo para que tu empresa se consolide, en Impulsa te ayudamos a lograrlo</p>
                        </div>
                    </div>

                    <div className='service-main-right'>
                        


                    </div>
                </div>
            </div>


        </div>
    )
}