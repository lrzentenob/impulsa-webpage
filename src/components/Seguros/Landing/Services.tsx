import './css/Services.css'
import seServicesBk from '../../../assets/seguros/seguros-services-bk.jpg'
import seService01 from '../../../assets/seguros/general/seguros-services01.png';
import seService02 from '../../../assets/seguros/general/seguros-services02.png';
import seService03 from '../../../assets/seguros/general/seguros-services03.png';
import seService04 from '../../../assets/seguros/general/seguros-services04.png';
import seService05 from '../../../assets/seguros/general/seguros-services05.png';
import seService06 from '../../../assets/seguros/general/seguros-services06.png';

export const Services = ()=> {

    return (
        <div className='services-seguros'>
            
            <div className='cover'></div>
            <img src={seServicesBk} className='servicios-seguros-img'></img>

            <div className='content'>
                <h1>En Impulsa Asesores</h1>

                <div className='container'>

                    <div className='box'>
                        <img src={seService01}></img>
                        <p className='subtitle'>Siempre contigo</p>
                        <p className='note'>Manteniendo una atención personalizada.</p>
                    </div>

                    <div className='box'>
                        <img src={seService02}></img>
                        <p className='subtitle'>Gestionamos tus seguros</p>
                        <p className='note'>Siempre en tiempos menores a los del mercado.</p>
                    </div>

                    <div className='box'>
                        <img src={seService03}></img>
                        <p className='subtitle'>Personaliza tu seguro</p>
                        <p className='note'>Escoge las coberturas y la forma de pago que mejor se ajuste a tus necesidades.</p>

                    </div>

                    <div className='box'>
                        <img src={seService04}></img>
                        <p className='subtitle'>Seguimiento</p>
                        <p className='note'>Te apoyamos en todo el proceso de tu siniestro.</p>

                    </div>

                    <div className='box'>
                        <img src={seService05}></img>
                        <p className='subtitle'>Las mejores aseguradoras</p>
                        <p className='note'>Encontrarás el seguro adecuado con las principales compañías del país.</p>

                    </div>

                    <div className='box'>
                    <img src={seService06}></img>
                        <p className='subtitle'>Tus seguros en un solo lugar</p>
                        <p className='note'>Descarga nuestra App Impulsa To Go y lleva tus seguros en la palma de la mano.</p>
                    </div>


                </div>

            </div>

        </div>
    )
}