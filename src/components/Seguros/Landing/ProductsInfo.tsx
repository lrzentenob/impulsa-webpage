import './css/ProductsInfo.css';

import seVidaAhorro from '../../../assets/seguros/seguros-vida-ahorro.png';
import seAuto from '../../../assets/seguros/seguros-auto-camion-moto.png';
import seGastosMedicos from '../../../assets/seguros/seguros-gastos-medicos.png';
import seDanosInmuebles from '../../../assets/seguros/seguros-dano-inmuebles.png';
import seRespCivil from '../../../assets/seguros/seguros-responsabilidad-civil.png';
import { Link } from 'react-router-dom';

export const ProductsInfo = () =>{

    return (
        <div className="product-info-seguros">
            <div className="product-upper-content">
                <div>
                    <h1>Productos Específicos</h1>
                    <p>Cubrimos lo que necesitas!</p>
                </div>
            </div>
            <div className='products-container'>

                    <Link to='/arrendamiento'>
                        <div className='product-detail'>
                            <img src={seVidaAhorro}></img>
                            <h5>De Vida y Ahorro</h5>
                            <p>Protege económicamente a los familiares del asegurado en caso de fallecimiento.</p>
                        </div>
                    </Link>
                    <Link to='/fidelidad'>
                        <div className='product-detail'>
                            <img src={seAuto}></img>
                            <h5>De Auto, Camión y Moto</h5>
                            <p>En caso de accidente, daños a terceros, al vehículo, gastos médicos y hasta por robo o pérdida total.</p>
                        </div>
                    </Link>
                    <Link to='/fiscal'>
                        <div className='product-detail'>
                            <img src={seGastosMedicos}></img>
                            <h5>De Gastos Médicos</h5>
                            <p>Atención médica, intervenciones, gastos hospitalarios, estudios, etc, para ti y tus dependientes económicos.</p>

                        </div>
                    </Link>
                    <Link to='/judicial'>
                        <div className='product-detail'>
                            <img src={seDanosInmuebles}></img>
                            <h5>De Daños a Inmuebles</h5>
                            <p>Por pérdida o daños materiales en viviendas o propiedades, así como robo de bienes muebles.</p>
                        </div>
                    </Link>
                    
                    <Link to='/notario'>
                        <div className='product-detail'>
                            <img src={seRespCivil}></img>
                            <h5>De Responsabilidad Civil</h5>
                            <p>Para cubrir gastos ocasionados a terceros por actividades realizadas u omitidas por el asegurado.</p>
                        </div>
                    </Link>


            </div>
            <div className='products-action'>
                    <Link to="/seguros" className='btn-seguros'>Ver productos</Link>
            </div>
        </div>
    );

}