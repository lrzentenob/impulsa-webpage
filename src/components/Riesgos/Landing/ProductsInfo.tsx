import './css/ProductsInfo.css';

import riProducts01 from '../../../assets/riesgos/services-option01.png';
import riProducts02 from '../../../assets/riesgos/services-option02.png';
import riProducts03 from '../../../assets/riesgos/services-option03.png';
import riProducts04 from '../../../assets/riesgos/services-option04.png';
import riProducts05 from '../../../assets/riesgos/services-option05.png';

import { Link } from 'react-router-dom';

export const ProductsInfo = () =>{

    return (
        <div className="product-info-riesgos" id="riesgos-productos">
            <div className="product-upper-content">
                <div>
                    <h1>Protegemos tu infraestructura</h1>
                    <p>Brindamos protección personalizada para empresas, sus activos, sus responsabilidades y su fuerza de trabajo.</p>
                </div>
            </div>
            <div className='products-container'>

                    <Link to='/seguros/vida'>
                        <div className='product-detail'>
                            <img src={riProducts01}></img>
                            <h5>Inmuebles</h5>
                        </div>
                    </Link>
                    <Link to='/seguros/auto'>
                        <div className='product-detail'>
                            <img src={riProducts02}></img>
                            <h5>Anuncios</h5>
                        </div>
                    </Link>
                    <Link to='/seguros/gastos-medicos'>
                        <div className='product-detail'>
                            <img src={riProducts03}></img>
                            <h5>Robo</h5>
                        </div>
                    </Link>
                    <Link to='/seguros/hogar'>
                        <div className='product-detail'>
                            <img src={riProducts04}></img>
                            <h5>Responsabilidad Civil</h5>
                        </div>
                    </Link>
                    <Link to='/seguros/hogar'>
                        <div className='product-detail'>
                            <img src={riProducts05}></img>
                            <h5>Dinero y Valores</h5>
                        </div>
                    </Link>

            </div>
            {/* <div className='products-action'>
                    <Link to="/seguros" className='btn-seguros'>Ver productos</Link>
            </div> */}
        </div>
    );

}