import { Footer } from "../../components/Seguros/Landing/Footer";
import { Header } from "../../components/Seguros/Landing/Header";
import { Submenu } from "../../components/Seguros/Landing/Submenu";
import seNosotrosImage from '../../assets/seguros/general/seguros-nosotros-single01.png'
import seBackgroundCurved from "../../assets/general/curved-background.png";

import './css/SegurosNosotros.css';
export const SegurosNosotros = () =>{
    return (
        <>
            <Header />
            <Submenu />
            <section>
                <div className="seguros-nosotros">

                    <div className="seguros-nosotros-block">
                        <div className="curved-title">
                            <img src={seBackgroundCurved} className="curvedbk"></img>
                            <h1>Nosotros</h1>
                        </div>
                    </div>

                    <div className="seguros-nosotros-block">
                        <div className="single-image">
                            <img src={seNosotrosImage}></img>
                        </div>
                        <div className="paragraph">
                            <h2>Contamos con más de 42 años de experiencia</h2>
                            <p>Impulsa Asesores nace en junio de 2006, gracias a la visión de agentes comprometidos con la calidad y el servicio. Contamos con la experiencia que nos dan 36 años en el ramo afianzador, y un equipo de trabajo altamente capacitado con sistemas tecnológicos de vanguardia que permiten ofrecer una asesoría personalizada y un servicio al cliente de excelencia.
                                La amplia experiencia por parte de sus principales accionistas y el empuje de un equipo joven de profesionistas, se combinan para brindar a nuestros clientes soluciones que apoyan al desarrollo de sus negocios.<br/><br/>

                                Gracias a esto, contamos con oficinas de servicio en Tuxtla Gutiérrez, San Cristóbal, Comitán, Tapachula, Ocosingo, Villahermosa, Monterrey y Estado de México.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}