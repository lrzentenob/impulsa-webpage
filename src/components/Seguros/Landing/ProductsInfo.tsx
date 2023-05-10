import './css/ProductsInfo.css';

import seVidaAhorro from '../../../assets/seguros/seguros-vida-ahorro.png';
import seAuto from '../../../assets/seguros/seguros-auto-camion-moto.png';
import seGastosMedicos from '../../../assets/seguros/seguros-gastos-medicos.png';
import seDanosInmuebles from '../../../assets/seguros/seguros-dano-inmuebles.png';
import { Link } from 'react-router-dom';

export const ProductsInfo = () =>{

    return (
        <div className="product-info-seguros">
            <div className="product-upper-content">
                <div>
                    <h1>Productos Específicos</h1>
                    <p>Ofrecemos asesoría en seguros para:</p>
                </div>
            </div>
            <div className='products-container'>

                    <Link to='/seguros/vida'>
                        <div className='product-detail'>
                            <img src={seVidaAhorro}></img>
                            <h5>Vida y accidentes personales</h5>
                            <p>Protege económicamente a los familiares del asegurado en caso de fallecimiento.</p>
                        </div>
                    </Link>
                    <Link to='/seguros/auto'>
                        <div className='product-detail'>
                            <img src={seAuto}></img>
                            <h5>De Auto, Camión y Moto</h5>
                            <p>En caso de accidente, daños a terceros, al vehículo, gastos médicos y hasta por robo o pérdida total.</p>
                        </div>
                    </Link>
                    <Link to='/seguros/gastos-medicos'>
                        <div className='product-detail'>
                            <img src={seGastosMedicos}></img>
                            <h5>De Gastos Médicos</h5>
                            <p>Atención médica, intervenciones, gastos hospitalarios, estudios, etc, para ti y tus dependientes económicos.</p>

                        </div>
                    </Link>
                    <Link to='/seguros/hogar'>
                        <div className='product-detail'>
                            <img src={seDanosInmuebles}></img>
                            <h5>Hogar y empresariales</h5>
                            <p>Asegura tu patrimonio contra robo y desastres naturales.</p>
                        </div>
                    </Link>

            </div>
            {/* <div className='products-action'>
                    <Link to="/seguros" className='btn-seguros'>Ver productos</Link>
            </div> */}
        </div>
    );

}