import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasCotizacion.css';

export const FianzasCotizacion = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section>
                <div className="fianzas-quote">
                    <h1>Cotiza tu fianzas</h1>                    
                </div>
            </section>
            <Footer />
        </>
    );
}