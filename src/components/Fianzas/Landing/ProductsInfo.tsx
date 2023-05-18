import './css/ProductsInfo.css';

import fiFidelidad from '../../../assets/fianzas/fianza-fidelidad.png';
import fiArrendamiento from '../../../assets/fianzas/fianza-arrendamiento.png';
import fiFiscal from '../../../assets/fianzas/fianza-fiscal.png';
import fiJudicial from '../../../assets/fianzas/fianza-judicial.png';
import fiNotario from '../../../assets/fianzas/fianza-notario.png';
import { Link } from 'react-router-dom';

export const ProductsInfo = () =>{

    return (
        <div className="product-info">
            <div className="product-upper-content">
                <div>
                    <h1>Productos Específicos</h1>
                    <p>¡Cotiza, conoce y libera!</p>
                </div>
            </div>
            <div className='products-container'>

                    <Link to='/fianzas/arrendamiento'>
                        <div className='product-detail'>
                            <img src={fiArrendamiento}></img>
                            <h5>Fianzas de Arrendamiento</h5>
                            <p>Garantiza cumplimiento de contrato entre inquilino y dueño del inmueble.</p>
                        </div>
                    </Link>
                    <Link to='/fianzas/fidelidad'>
                        <div className='product-detail'>
                            <img src={fiFidelidad}></img>
                            <h5>Fianzas de Fidelidad</h5>
                            <p>Protege patrimonio empresarial de delitos cometidos por empleados.</p>
                        </div>
                    </Link>
                    <Link to='/fianzas/fiscal'>
                        <div className='product-detail'>
                            <img src={fiFiscal}></img>
                            <h5>Fianzas Fiscales</h5>
                            <p>Garantiza obligaciones fiscales ante Secretaría de Hacienda y Crédito Público.</p>

                        </div>
                    </Link>
                    <Link to='/fianzas/judicial'>
                        <div className='product-detail'>
                            <img src={fiJudicial}></img>
                            <h5>Fianzas Judiciales</h5>
                            <p>Garantiza pago de obligaciones en beneficios de libertad condicional.</p>
                        </div>
                    </Link>
                    
                    <Link to='/fianzas/notario'>
                        <div className='product-detail'>
                            <img src={fiNotario}></img>
                            <h5>Fianzas de Notario</h5>
                            <p>Cumple requisitos legales para inicio de funciones notariales.</p>
                        </div>
                    </Link>


            </div>
            <div className='products-action'>
                    <a href="#" className='btn-fianzas'>Ver productos</a>
            </div>
        </div>
    );

}