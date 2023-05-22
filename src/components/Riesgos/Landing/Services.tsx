import './css/Services.css'
import seServicesBk from '../../../assets/riesgos/riesgos-servicios-bk.jpg'
export const Services = ()=> {

    return (
        <div className='services-riesgos'>
            
            <div className='cover'></div>
            <img src={seServicesBk} className='img-bk'></img>

            <div className='content'>

                <div className='container'>
                    <h1>Asesoría Profesional en Riesgos</h1>
                    <p>En Impulsa tu seguridad y la de tu empresa son importantes, vamos a prevenir juntos.</p>
                </div>

            </div>

        </div>
    )
}