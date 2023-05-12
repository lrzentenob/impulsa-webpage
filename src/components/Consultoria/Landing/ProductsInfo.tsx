import './css/ProductsInfo.css';

import seProduct01 from '../../../assets/consultoria/consultoria-productos01.png';
import seProduct02 from '../../../assets/consultoria/consultoria-productos02.png';
import seProduct03 from '../../../assets/consultoria/consultoria-productos03.png';
import seProduct04 from '../../../assets/consultoria/consultoria-productos04.png';

import { Link } from 'react-router-dom';

export const ProductsInfo = () =>{

    return (
        <div className="product-info-consult" id="consultoria-productos">
            <div className="product-upper-content">
                <div>
                    <h1>Productos Específicos</h1>
                    <p>Ofrecemos asesoría en seguros para:</p>
                </div>
            </div>
            <div className='products-container'>

                    <Link to='/consultoria'>
                        <div className='product-detail'>
                            <img src={seProduct01}></img>
                            <h5>Asesoría fiscal</h5>
                            <p>Análisis, revisión y resolución en materia fiscal.</p>
                        </div>
                    </Link>
                    <Link to='/consultoria'>
                        <div className='product-detail'>
                            <img src={seProduct02}></img>
                            <h5>Asesoría contable</h5>
                            <p>En proceso contable para aminorar costos.</p>
                        </div>
                    </Link>
                    <Link to='/consultoria'>
                        <div className='product-detail'>
                            <img src={seProduct03}></img>
                            <h5>Tecnología de la información</h5>
                            <p>Para automatizar y planificar de forma óptima las actividades.</p>

                        </div>
                    </Link>
                    <Link to='/consultoria'>
                        <div className='product-detail'>
                            <img src={seProduct04}></img>
                            <h5>Consolidación empresarial</h5>
                            <p>Desde la idea de tu empresa hasta su consolidación.</p>
                        </div>
                    </Link>

            </div>
            {/* <div className='products-action'>
                    <Link to="/seguros" className='btn-seguros'>Ver productos</Link>
            </div> */}
        </div>
    );

}