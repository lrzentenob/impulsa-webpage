import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasNosotros.css'
import fiFianzasNosostros from '../../assets/fianzas/fianzas-nosotros.png';

export const FianzasNosotros = () => {
    return (
        <>
        <Header />
        <Submenu />
        <section className="nosotros">
            <div className="nosotros-content">

                <h1>Nosotros</h1>
                
                <div className="nosotros-about">

                    <div className="nosotros-box">
                        <img src={fiFianzasNosostros}></img>
                    </div>

                    <div className="nosotros-box">
                        <h2>Contamos con más de 42 años de experiencia</h2>
                        <p> Impulsa Asesores nace en junio de 2006, gracias a la visión de agentes comprometidos con la calidad y el servicio. Contamos con la experiencia que nos dan 36 años en el ramo afianzador, y un equipo de trabajo altamente capacitado con sistemas tecnológicos de vanguardia que permiten ofrecer una asesoría personalizada y un servicio al cliente de excelencia. La amplia experiencia por parte de sus principales accionistas y el empuje de un equipo joven de profesionistas, se combinan para brindar a nuestros clientes soluciones que apoyan al desarrollo de sus negocios.
                            <br/>
                            Gracias a esto, contamos con oficinas de servicio en Tuxtla Gutiérrez, San Cristóbal, Comitán, Tapachula, Ocosingo, Villahermosa y Estado de México.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <Footer />
        </>
    );
}