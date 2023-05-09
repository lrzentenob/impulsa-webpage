import './css/Services.css'
import fiCallcenter from '../../../assets/fianzas/fianzas-callcenter.jpg';
import { Link } from 'react-router-dom';
export const Services = ()=> {

    return (
        <div className='services'>

            <div className='services-upper-content'>
                <div className='cover'></div>
                <img src={fiCallcenter}></img>
                    <div className='service-main'>
                        <div className='service-main-left'>
                        <div className='service-title'>
                            <h2>Servicios</h2>
                            <p>Si buscas expertos en fianzas, Impulsa asesores es tu empresa de confianza.</p>
                        </div>
                    </div>
                    <div className='service-main-right'>
                        
                        <div className='service-box'>
                        <Link to='/validacion'><h4>Valida tu fianza</h4></Link>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        
                        <div className='service-box'>
                        <Link to='/cancelacion'><h4>Cancelaciones</h4></Link>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        <div className='service-box'>
                            <Link to='/guia-reclamos'><h4>Guía para Reclamos</h4></Link>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        <div className='service-box'>
                            <Link to='/programa-proveedores'><h4>Programa de Proveedores</h4></Link>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}