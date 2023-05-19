import './css/Services.css'
import seServicesBk from '../../../assets/riesgos/riesgos-servicios-bk.jpg'
export const Services = ()=> {

    return (
        <div className='services-riesgos'>

            <div className='services-upper-content'>
                
                <div className='cover'></div>
                <img src={seServicesBk} className='services-bkimage'></img>

                    <div className='service-main'>
                        
                        <h1>Asesoría Profesional en Riesgos</h1>
                        <div className='services-container'>
                            <p>En Impulsa tu seguridad y la de tu empresa son importantes, vamos a prevenir juntos.</p>
                        </div>
                    </div>
            </div>


        </div>
    )
}