import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import testImg from '../../assets/fianzas/fianzas-callcenter.jpg'
import './css/FianzasCotizacion.css';

export const FianzasCotizacion = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section>
                <div className="fianzas-quote">
                    
                    <img className='test-background-image' src={testImg}></img>
                    <div className="image-cover-blur"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}