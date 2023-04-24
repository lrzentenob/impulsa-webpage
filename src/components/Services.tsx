import '../css/Services.css'
import fiCallcenter from '../assets/fianzas/fianzas-callcenter.jpg';
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
                            <h4>Valida tu fianza</h4>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        <div className='service-box'>
                            <h4>Cancelaciones</h4>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        <div className='service-box'>
                            <h4>Guía para Reclamos</h4>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                        <div className='service-box'>
                            <h4>Programa de Proveedores</h4>
                            <p>Te ofrecemos una herramienta esencial para verificar la autenticidad y respaldo de tu póliza de fianza.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='services-lower-content'>
                <div className='service-title'>
                    <h2>Servicio Eficiente</h2>
                    <p>Coberturas a tu medida en el menor tiempo, con facilidades de pago y grandes beneficios.</p>
                </div>
                <div className='service-action'>
                    <a className='btn' href="#">Contáctanos</a>
                </div>
            </div>
        </div>
    )
}