import './css/ProductsInfo.css';
import fiFidelidad from '../../../assets/fianzas/fianzas-fidelidad.png';
import fiGasolineras from '../../../assets/fianzas/fianzas-gasolineras.png';
import fiJudiciales from '../../../assets/fianzas/fianzas-judiciales-ic.png';
import fiNotario from '../../../assets/fianzas/fianzas-notario.png';

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

                    <div className='product-detail'>
                        <img src={fiJudiciales}></img>
                        <h5>Fianzas de Arrendamiento</h5>
                        <p>Garantiza cumplimiento de contrato entre inquilino y dueño del inmueble.</p>
                    </div>
                
                    <div className='product-detail'>
                        <img src={fiJudiciales}></img>
                        <h5>Fianzas Judiciales</h5>
                        <p>Pago de obligaciones de beneficios de libertidad provisional, preparatoria y condena condicional.</p>
                    </div>
                    <div className='product-detail'>
                        <img src={fiNotario}></img>
                        <h5>Fianzas de Notario</h5>
                        <p>Para cumplir con requisitos que marcan las leyes al inicio de tus funciones.</p>
                    </div>
                    <div className='product-detail'>
                        <img src={fiGasolineras}></img>
                        <h5>Fianzas a Gasolineras</h5>
                        <p>Crédito de suministro y garantía de pago en productos derivados del petróleo (gasolina,diesel, etc)</p>

                    </div>
                    <div className='product-detail'>
                        <img src={fiFidelidad}></img>
                        <h5>Fianzas de Fidelidad</h5>
                        <p>Garantizan al patrón la reparación del daño patrimonial derivado de delitos cometidos por uno o más empleados.</p>
                    </div>
            </div>
            <div className='products-action'>
                    <a href="#" className='btn-fianzas'>Ver productos</a>
            </div>
        </div>
    );

}