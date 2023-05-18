import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasValidacion.css';

import fiCheck from '../../assets/fianzas/fianzas-check.png';
import fiCurvedBk from '../../assets/general/curved-background.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Insurgentes</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Aserta</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Monterrey</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Liberty Fianzas</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Sofimex</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Berkley</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Fianzas Doroma</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Zurich Fianzas de Mexico</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Fudicia</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Cescemex</Link> </p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Chubb México</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Afianzadora Mapfre</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to=''>Tokio Marine</Link></p></li>
                    </ul>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </>
    );
}