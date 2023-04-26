import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasContacto.css';
import fiContact from '../../assets/fianzas/fianzas-contact.png';
import fiCurveBk from '../../assets/general/curved-background.png'
export const FianzasContacto = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="contacto">

                <div className="contacto-content">
                    <h1>Contacto</h1>

                    <div className="contacto-content-detail">
                            <div className="contacto-box left-contact-box">
                                <img src={fiContact} className="contacto-girl-img"></img>
                                <img src={fiCurveBk} className="contacto-curved-img"></img>
                            </div>
                            <div className="contacto-box form-contact">
                            </div>
                    </div>
                </div>


            </section>
            <Footer />
        </>
    );
}