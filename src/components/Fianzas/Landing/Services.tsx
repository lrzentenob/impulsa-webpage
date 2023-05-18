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
                        
                        <Link to='/fianzas/validacion'><div className='service-box'>
                        <h4>Valida tu fianza</h4>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        </Link>

                        <Link to='/fianzas/cancelacion'>
                        <div className='service-box'>
                        <h4>Cancelaciones</h4>
                            <p>Cancela tus pólizas de fianzas y libera tu capacidad de afianzamiento con facilidad.</p>
                        </div>
                        </Link>
                        
                        <Link to='/fianzas/guia-reclamos'>
                        <div className='service-box'>
                            <h4>Guía para Reclamos</h4>
                            <p>Derecho del acreedor para que el deudor cumpla con la obligación asumida.</p>
                        </div>
                        </Link>
                        <Link to='/fianzas/programa-proveedores'>
                        <div className='service-box'>
                            <h4>Programa de Proveedores</h4>
                            <p>Órganos y dependencias de consulta.</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}