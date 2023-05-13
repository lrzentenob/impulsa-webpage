import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import '../../index.css'
// import '../../components/Fianzas/Landing/css/Services.css';
import './css/FianzasProductos.css';

import fiProductos from '../../assets/fianzas/productos/fianzas-productos-que-es.png';
import fiProductsBackground from '../../assets/fianzas/productos/fianzas-productos-background.jpg';
import { BackgroundImages } from "../../components/Fianzas/Landing/BackgroundImages";
import curvedImageBk from '../../assets/general/curved-background.png';
export const FianzasProductos = () => {


    return (
        <>
        <Header />
        <Submenu />
        <section className="productos">
            <div className="productos-content">

            <div className="curved-titled">
                <div className="h-container">   
                    <h1 className="title-text">Productos</h1>
                    <div className="image-content">
                        <img src={curvedImageBk} className="image-background"></img>
                    </div>
                </div>
            </div>

                <div className="products-whatis-container">
                    <div className="whatis-left">
                        <img src={fiProductos}></img>
                    </div>
                    <div className="whatis-right">
                        <div>
                            <h2>¿Qué es una fianza?</h2>
                            <p> Las fianzas son contratos que garantizan el cumplimiento de obligaciones entre dos partes, principalmente derivadas de otros contratos, convenios o leyes; las cuales deban ser garantizadas por su seguridad y confianza mutua.  <br/>Existen diferentes tipos de fianzas dependiendo de la obligación que se desee garantizar.                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundImages />
        </section> 
        <div className='services'>

            <div className='services-upper-content'>
                <div className='cover'></div>
                <img src={fiProductsBackground}></img>
                    <div className='service-main'>

                    <div className='service-main-left'>
                        <div className='service-title'>
                            <h2>Tipos de Fianza</h2>
                            <p>Conoce los detalles de la fianza que necesitas.</p>
                        </div>
                    </div>
                    <div className='service-main-right'>
                        <div className='service-box'>
                            <h2>Para clientes, contratistas y proveedores</h2>
                        </div>
                        <div className='service-box'>
                            <h2>Crédito</h2>
                        </div>
                        <div className='service-box'>
                            <h2>Judiciales</h2>
                        </div>
                        <div className='service-box'>
                            <h2>Fideicomiso de Garantia</h2>
                        </div>

                    </div>
                </div>
            </div>


        </div>



        
        <Footer />
        </>
    );
}