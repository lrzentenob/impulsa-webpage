import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../components/Seguros/Landing/Footer";
import { Header } from "../../components/Seguros/Landing/Header";
import { Submenu } from "../../components/Seguros/Landing/Submenu";
import curvedImageBk from '../../assets/general/curved-background.png';

import './css/SegurosOficinas.css';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const SegurosOficinas = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="oficinas oficinas-seguros">

            <div className="curved-titled">
                <div className="h-container">   
                    <h1 className="title-text">Oficinas</h1>
                    <div className="image-content">
                        <img src={curvedImageBk} className="image-background"></img>
                    </div>
                </div>
            </div>
                            
            <div className="oficinas-content">
                <div className="oficina-box">
                    <div className="address">
                        <h2>Ciudad de México</h2>
                        <p>Av. Cuauhtemoc 1233 Oficina 207,<br/>Col. Santa Cruz Atoyac<br/>Delegacion Benito Juarez C.P. 03310, Ciudad de México</p>
                    </div>
                        <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='https://goo.gl/maps/HpU4E5s7AKVXdE219' target="_blank">Ver mapa</Link></p>
                        <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(55) 53 60 69 75</strong></p>
                        <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:cdmexico@impulsaasesores.mx'>cdmexico@impulsaasesores.mx</Link></p>
                </div>
                <div className="oficina-box">
                    <div className="address">
                        <h2>Tuxtla Gutiérrez</h2>
                        <p>13a Poniente Norte #174 Col. Moctezuma, C.P. 29030<br/>Tuxtla Gutiérrez, Chiapas.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='https://goo.gl/maps/CvStnsNexHD2' target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(961) 60 2 50 88</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:tuxtla@impulsaasesores.mx'>tuxtla@impulsaasesores.mx</Link></p>

                </div>
                
                <div className="oficina-box">
                    <div className="address">
                        <h2>Ocosingo</h2>
                        <p>1a. Avenida Norte #22 Local 3<br/>Barrio Centro; C.P. 29950<br/>Ocosingo, Chiapas.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://www.google.com/maps/place/16%C2%B054'41.0%22N+92%C2%B005'50.3%22W/@16.911377,-92.097305,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d16.911377!4d-92.097305?ll=16.911377,-92.097305&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&q=16%C2%B054%2741.0%22N+92%C2%B005%2750.3%22W@16.911377,-92.09730499999999"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(919) 67 3 06 47</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:ocosingo@impulsaasesores.mx'>ocosingo@impulsaasesores.mx</Link></p>

                </div>
            </div>
            <hr></hr>
            <div className="oficinas-content">
                <div className="oficina-box">
                    <div className="address">
                        <h2>Estado de México</h2>
                        <p>Calle Paris No. 43<br/>Col. Jardines de Bellavista C.P. 54054<br/>Tlalnepantla, Estado De México.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://goo.gl/maps/3Zn5FkE9LdK8yjiw5"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(55) 53 60 69 75</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:edomexico@impulsaasesores.mx'>edomexico@impulsaasesores.mx</Link></p>

                </div>
                <div className="oficina-box">
                    <div className="address">
                        <h2>San Cristobal</h2>
                        <p>Av. Crescencio Rosas Esq. José M. Morelos #12<br/>Barrio San Diego C.P. 29286<br/>San Cristóbal, Chiapas.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://www.google.com/maps/place/16%C2%B044'04.6%22N+92%C2%B038'19.7%22W/@16.734605,-92.6388,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d16.734605!4d-92.6388?ll=16.734605,-92.6388&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&q=16%C2%B044%2704.6%22N+92%C2%B038%2719.7%22W@16.734605,-92.63879999999999"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(967) 67 4 03 06</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:sancristobal@impulsaasesores.mx'>sancristobal@impulsaasesores.mx</Link></p>

                </div>
                
                <div className="oficina-box">
                    <div className="address">
                        <h2>Tapachula</h2>
                        <p>Calle Central Poniente y 10a. Av. Norte S/N,<br/>Col. Centro; C.P. 30700<br/>Tapachula, Chiapas.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://goo.gl/maps/4jxp76ZTg2c3F69U9"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(962) 62 6 77 05</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:tapachula@impulsaasesores.mx'>tapachula@impulsaasesores.mx</Link></p>

                </div>
            </div>
            <hr></hr>
            <div className="oficinas-content">
                <div className="oficina-box">
                    <div className="address">
                        <h2>Villahermosa</h2>
                        <p>Calle Vía 3 Núm. 126 Local 7, Plaza Farole Col. La Hacienda. Tabasco 2000 C.P. 86035,<br/>Villahermosa, Tabasco.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://goo.gl/maps/JaCeiLp6X7PdonRA9"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(993) 316 0115</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:villahermosa@impulsaasesores.mx'>villahermosa@impulsaasesores.mx</Link></p>
                </div>
                <div className="oficina-box">
                    <div className="address">
                        <h2>Comitán</h2>
                        <p>C. Central Poniente Benito Juárez #36<br/>Col. Centro, C.P. 30020<br/>Comitán, Chiapas.</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://www.google.com/maps/place/16%C2%B015'10.1%22N+92%C2%B008'09.6%22W/@16.252809,-92.136004,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d16.252809!4d-92.136004?hl=es-ES"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(963) 63 2 18 57</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:comitan@impulsaasesores.mx'>comitan@impulsaasesores.mx</Link></p>

                </div>
                
                <div className="oficina-box">
                    <div className="address">
                        <h2>Veracruz</h2>
                        <p>Calle Nicolas Bravo No. 520<br/>Col. Centro; C.P. 91700<br/>Veracruz Veracruz</p>
                    </div>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to={"https://goo.gl/maps/WwXR8xeFQUQR2WPR6"} target="_blank">Ver mapa</Link></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faPhone}/> <strong>(229) 932 53 63</strong></p>
                    <p><FontAwesomeIcon className="iconfa" icon={faLocationDot}/> <Link to='mailto:veracruz@impulsaasesores.mx'>veracruz@impulsaasesores.mx</Link></p>

                </div>
            </div>
            <hr></hr>
        </section>
            <Footer />

        </>
    );
}