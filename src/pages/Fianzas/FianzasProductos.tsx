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
import { TipoFianzaModal } from "../../components/Fianzas/Landing/TipoFianzaModal/TipoFianzaModal";
import { useState } from "react";
export const FianzasProductos = () => {
    const [showFianzaType, setShowType] = useState('01');
    function onSelectTipoFianza (e:any) {
        
        const typeFromId = e.target.id.split('-');
        const modalWindow = document.getElementById('div-modal-tipo-fianza');
        modalWindow!.style.display = 'block';

        if ( typeFromId.length == 4 ){
            
            switch( typeFromId[3]) {
                case '01':
                    setShowType('01')
                    break;
                case '02':
                    setShowType('02');
                    break;
                case '03':
                    setShowType('03');
                    break;
                case '04':
                    setShowType('04');
                    break;
                default: 
                    break;
            }

        }
    }

    return (
        <>
        <TipoFianzaModal tipoFianza={showFianzaType}/>
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
                        <div className='service-box' onClick={onSelectTipoFianza} id='div-servicebox-tipofianza-01'>
                            <h2 id='h2-servicebox-tipofianza-01'>Para clientes, contratistas y proveedores</h2>
                        </div>
                        <div className='service-box' onClick={onSelectTipoFianza} id='div-servicebox-tipofianza-02'>
                            <h2 id='h2-servicebox-tipofianza-02'>Crédito</h2>
                        </div>
                        <div className='service-box' onClick={onSelectTipoFianza} id='div-servicebox-tipofianza-03'>
                            <h2 id='h2-servicebox-tipofianza-03'>Judiciales</h2>
                        </div>
                        <div className='service-box' onClick={onSelectTipoFianza} id='div-servicebox-tipofianza-04'>
                            <h2 id='h2-servicebox-tipofianza-04'>Fideicomiso de Garantia</h2>
                        </div>

                    </div>
                </div>
            </div>


        </div>
        
        <Footer />
        </>
    );
}