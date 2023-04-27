import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasInformacion.css';

export const FianzasInformaciono = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="fianzas-informacion">

                <div className="fianzas-informacion-content">
                        <h1>Fianzas</h1>
                        <div>
                            <p></p>
                        </div>

                </div>

            </section>
            
            <Footer />
        </>
    );
}