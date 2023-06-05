import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiGuiaReclamos from '../../assets/fianzas/fianzas-programa-proveedores.png';
import fiGuiaReclamosP from '../../assets/fianzas/fianzas-programa-proveedores-img.png';
import fiCurvedBk from '../../assets/general/curved-background.png';

export const FianzasProgramaProveedores = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section>
            <div className="guiareclamos-content">
                
                <div className="row">
                    <div className="logo-curvebk">
                        <img src={fiCurvedBk} className="bk"></img>
                        <img src={fiGuiaReclamos} className="icon"></img>
                    </div>

                    <div className="paragraph vertical-centered">
                        <div className="top">
                            <h1>Programa de Proveedores</h1>
                            <p>Garantiza el cumplimiento de contratos y órdenes de compra con terceros, evaluando su solvencia técnica y financiera, y brindando apoyo en el proceso de reclamación en caso de incumplimiento.</p>
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="single-img">
                        <img src={fiGuiaReclamosP}></img>
                    </div> 
                    <div className="paragraph vertical-centered">
                        <div className="mid">
                            <h2>Garantía en Contratación de Proveedores</h2>
                            <p>Usted va a contratar a un tercero para que le realice un trabajo o una venta por medio de un contrato. Usted necesita una Fianza de Proveedores. <br/><br/>El Programa de Fianzas a Proveedores, garantiza a nuestros clientes que se vuelven beneficiarios de las pólizas, que sus Contratos u órdenes de compra que efectúen con terceros, se encuentren debidamente garantizados. Desde la entrega del Anticipo, el cumplimiento del contrato y hasta la garantía de Buena Calidad o Vicios Ocultos.</p>
                        </div>
                    </div>            
                </div>

                <div className="row">
                    <div className="text-note">
                        <h2>Para lograr eso, hacemos la siguiente labor</h2>                        
                        <ul>
                            <li><b>Calificamos a sus Proveedores.</b></li><br/>
                            <li><b>Revisamos la solvencia técnica y financiera de los mismos.</b></li><br/>
                            <li><b>Tramitamos la fianza y se las entregamos para que ustedes continúen con el control.</b></li><br/>
                            <li><b>En caso de reclamación, apoyamos en el proceso de reclamación.</b></li><br/>
                        </ul>
                       
                    </div>
                </div>

            </div>
            
            <hr className="hr-orange"></hr>
            <div className="text-titles-container">
                <div className="case2">
                    <h2>¿Cómo funciona?</h2>
                    <p>El Beneficiario y la afianzadora establecen un texto de fianza para las diversas coberturas que se van a garantizar. La afianzadora genera una póliza global, donde se establecen las condiciones de las coberturas. Los contratistas o proveedores entregaran una inclusión a la póliza global, en el cual se hace mención de las características de las obligaciones contratadas. Previo a la emisión de la inclusión para algún contratista o proveedor, el análisis será realizado por Impulsa Asesores dando una seguridad al beneficiario que su contratista o proveedor tiene la capacidad técnica, económica y moral para cumplir con sus obligaciones contraídas.</p>
                </div>
            </div>
            <hr className="hr-orange"></hr>
            <div className="text-titles-container">
                <div className="case2">
                    <h2>¿Qué necesita?</h2>
                    <p>El beneficiario necesita el deseo de quitarse la preocupación que los terceros con los que contrata llegasen a incumplir sus obligaciones pactadas. <br/>El acreedor cuenta con la asesoría de Impulsa Asesores para establecer el “Programa de Proveedores”. Este se puede establecer con una o varias afianzadoras, con la finalidad de dar mayores opciones a sus contratistas y proveedores.</p>
                </div>
            </div>
            <hr className="hr-orange"></hr>
            <br/><br/>

 
            </section>
            <Footer />
        </>
    );
}