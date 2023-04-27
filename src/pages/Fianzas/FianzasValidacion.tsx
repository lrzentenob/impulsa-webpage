import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasValidacion.css';

import fiCheck from '../../assets/fianzas/fianzas-check.png';
import fiCurvedBk from '../../assets/general/curved-background.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export const FianzasValidacion = () => {
    return (
        <>
            <Header />
            <Submenu />

            <section className="fianzas-valid">

                <div className="fianza-valid-content">

                    <div className="fianza-valid-portrait">
                        <div>
                            <img src={fiCheck} className="fianza-valid-check"></img>
                            <img src={fiCurvedBk} className="fianza-valid-curved-bk"></img>
                        </div>
                    </div>


                    <div className="fianza-valid-paragraph">
                        <h1>Valida tu fianza</h1>
                        <p>Verifica la autenticidad y vigencia de tus pólizas de fianzas, accediendo a nuestro listado de validación por afianzadora. Garantiza tranquilidad y seguridad en tus operaciones.</p>
                    </div>


                    <div className="fianza-valid-brands">
                    <ul>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Insurgentes</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Aserta</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Monterrey</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Liberty Fianzas</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Sofimex</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Berkley</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Fianzas Doroma</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Zurich Fianzas de Mexico</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Fudicia</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Cescemex </p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Chubb de México Compañía Afianzadora</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> Afianzadora Mapfre</p></li>
                    </ul>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </>
    );
}