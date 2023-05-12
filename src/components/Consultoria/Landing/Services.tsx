import './css/Services.css'
import seServicesBk from '../../../assets/seguros/seguros-services-bk.png'

import { Link } from 'react-router-dom';
export const Services = ()=> {

    return (
        <div className='services-consult'>

            <div className='services-upper-content'>
                <div className='cover'></div>
                <img src={seServicesBk}></img>
                    <div className='service-main'>
                        <div className='service-main-left'>
                        <div className='service-title'>
                            <h2>Servicios</h2>
                            <p>No tienes que caminar a ciegas en la creación de tus sueños, Impulsa te ayuda a formar tu empresa.</p>
                        </div>
                    </div>
                    <div className='service-main-right'>
                        
                        <div className='service-box'>
                        <Link to='/consultoria'><h4>Asesorías profesionales sobre empresas</h4></Link>
                            <p>Expertos capacitados que te acompañan paso a paso.</p>
                        </div>
                        
                        <div className='service-box'>
                        <Link to='/consultoria'><h4>Guía de normas fiscales y contables</h4></Link>
                            <p>Para que siempre estés informado y con tu empresa en regla.</p>
                        </div>
                        <div className='service-box'>
                            <Link to='/consultoria'><h4>Actualización constante de TI</h4></Link>
                            <p>Manteniendo tu empresa a la vanguardia.</p>
                        </div>
                        <div className='service-box'>
                            <Link to='/consultoria'><h4>Sitios de interés</h4></Link>
                            <p>Órganos y dependencias de consulta.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}