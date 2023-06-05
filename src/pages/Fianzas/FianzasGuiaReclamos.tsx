import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiGuiaReclamos from '../../assets/fianzas/fianzas-guia-reclamos.png';
import fiGuiaReclamosP from '../../assets/fianzas/fianzas-guia-reclamos-paragraph.png';
import fiCurvedBk from '../../assets/general/curved-background.png';

import './css/FianzasGuiaReclamos.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
export const FianzasGuiaReclamos = () => {

    const [showItemOne, setShowItemOne] = useState(false);
    const [showItemTwo, setShowItemTwo] = useState(false);
    

    const [gobSwitchTableView, setGobSwitchTableView]  = useState<boolean>(false);
    const [privSwitchTableView, setPrivSwitchTableView]  = useState<boolean>(false);

    function onOpenObraGob() {
        setGobSwitchTableView(false);
    }
    function onOpenProvideGob () {
        setGobSwitchTableView(true);
    }

    function onOpenObraPriv (){
        setPrivSwitchTableView(false);
    }
    function onOpenProvidePriv () {
        setPrivSwitchTableView(true);
    }

    function onShowHideItemOne() {
        setShowItemOne(!showItemOne);
    }
    function onShowHideItemTwo() {
        setShowItemTwo(!showItemTwo);
    }
    return (
        <>
            <Header />
            <Submenu />
            <section className="guia-reclamos">

                
                <div className="guiareclamos-content">
                
                    <div className="row">
                        <div className="logo-curvebk">
                            <img src={fiCurvedBk} className="bk"></img>
                            <img src={fiGuiaReclamos} className="icon"></img>
                        </div>

                        <div className="paragraph vertical-centered">
                            <div className="top">
                                <h1>Guía para Reclamos</h1>
                                <p>Reclamación de Fianzas: Conoce tus derechos como beneficiario y aprende cómo ejercerlos en caso de incumplimiento de la obligación garantizada. Revisa el proceso y requisitos esenciales para una reclamación exitosa.</p>
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <div className="single-img">
                            <img src={fiGuiaReclamosP}></img>
                        </div> 
                        <div className="paragraph vertical-centered">
                            <div className="mid">
                                <h2>Reclamación</h2>
                                <p>Es el derecho que tiene el acreedor (beneficiario) de exigir que se cumpla con la obligación asumida por el deudor (fiado) o a ser indemnizado por parte del fiador (afianzadora).</p>
                                <h2>¿Cómo Reclamar una Fianza?</h2>
                                <p>El procedimiento de reclamación, se encuentra regulado en La Ley de Instituciones de Seguros y de Fianzas así como en la Ley de Defensa al Usuario De Servicios Financieros.</p>                            
                            </div>
                        </div>            
                    </div>


                    <div className="row">
                        <div className="text-note">
                            <h2>Requisitos Esenciales de una Reclamación</h2>                        
                            <ol>
                                <li>Los beneficiarios deberán presentar sus reclamaciones en la institución de fianzas, entendiendo como tal a las oficinas principales, sucursales u oficinas de servicio.</li><br/>
                                <li>La reclamación debe hacerse por escrito y acompañando la documentación y demás elementos que sean necesarios para demostrar la existencia y exigibilidad de la obligación garantizada por la fianza.</li><br/>
                                <li>La institución de fianzas cuenta con un plazo de 15 días naturales a partir de la presentación de la reclamación para solicitar al beneficiario todo tipo de información o documentación que sean necesarias relacionadas con la fianza motivo de la reclamación.</li><br/>
                            </ol>
                        </div>
                    </div>
    
                </div>
                
                <hr className="hr-orange"></hr>
                <div className="text-titles-container">
                    <div className="case1">
                        <h2 onClick={onShowHideItemOne}> 
                            { showItemOne ? <FontAwesomeIcon icon={faSquareMinus}/> :<FontAwesomeIcon icon={faSquarePlus}/> }&nbsp; 
                            Sector Gobierno
                        </h2>
                        <div className="actions">
                            <Link to='' className="btn-fianzas" onClick={onOpenObraGob}>Obra</Link>
                            <Link to='' className="btn-fianzas-outline" onClick={onOpenProvideGob}>Proveeduría</Link>
                        </div>
                    </div>
                </div>
                { showItemOne &&
                    <div className="table-container">
                    { !gobSwitchTableView ? 
                        <table>
                                <tr>
                                    <th><b>Para Obra:</b></th>
                                    <th>Anticipo</th>
                                    <th>Cumplimiento</th>
                                    <th>Buena Calidad</th>
                                </tr>
                                <tr>
                                    <td>Producto</td>
                                    <td>Anticipo (Sector Gobierno)</td>
                                    <td>Cumplimiento (Sector Gobierno)</td>
                                    <td>Buena Calidad (Sector Gobierno)</td>
                                </tr>
                                <tr>
                                    <td>Plazo para presentar su reclamación:</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>                            
                                </tr>
                                <tr>
                                    <td>Artículos de la Ley relacionados con su fianza:</td>
                                    <td>Art. 95 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 95 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 95 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                </tr>
                                <tr>
                                    <td>Documentación adicional para presentar su reclamación:</td>
                                    <td>
                                        <div className="ol-container">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato de Obra y/o prestación de servicios ó el respectivo.</li>
                                                <li>Documentación que se haya firmado al contrato a la recepción del anticipo, cheque póliza contable y estado de cuenta.</li>
                                                <li>Documentos pagados por el Beneficiario donde se compruebe las amortizaciones realizadas.</li>
                                                <li>Cuantificaron de los intereses respectivos.</li>
                                                <li>Liquidación.</li>
                                                <li>Peritaje y Bitácora.</li>
                                                <li>Oficio de Remisión</li>
                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Acta Circunstancia del estado general que guarda el contrato.</li>
                                                <li>Documento de modificación al fiado del Incumplimiento ó la rescisión del contrato.</li>
                                                <li>Liquidación.</li>
                                                <li>Peritaje y Bitácoras.</li>
                                                <li>Oficio de Remisión para Obra Pública.</li>
                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato de Obra y/o prestación de servicios ó el respectivo.</li>
                                                <li>Documento que acredite la existencia de Vicios Ocultos ó Defectos y cuantificación Peritaje.</li>
                                                <li>Copia de algún escrito en el cual el beneficiario reclame al contratista ó prestador de servicios la reparación de los defectos ó vicios.</li>
                                                <li>Peritaje que acredite la existencia de los Vicios Ocultos.</li>
                                                <li>Liquidación.</li>
                                                <li>Acta de Incumplimiento.</li>
                                                <li>Oficio de Remisión</li>
                                            </ol>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                    :
                        <table>
                                <tr>
                                    <th><b>Para Proveduría:</b></th>
                                    <th>Anticipo</th>
                                    <th>Cumplimiento</th>
                                    <th>Buena Calidad</th>
                                </tr>
                                <tr>
                                    <td>Producto</td>
                                    <td>Anticipo (Sector Gobierno)</td>
                                    <td>Cumplimiento (Sector Gobierno)</td>
                                    <td>Buena Calidad (Sector Gobierno)</td>
                                </tr>
                                <tr>
                                    <td>Plazo para presentar su reclamación:</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>                            
                                </tr>
                                <tr>
                                    <td>Artículos de la Ley relacionados con su fianza:</td>
                                    <td>Art. 95 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 95 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 95 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                </tr>
                                <tr>
                                    <td>Documentación adicional para presentar su reclamación:</td>
                                    <td>
                                        <div className="ol-container">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato de Obra y/o prestación de servicios ó el respectivo.</li>
                                                <li>Documentación que se haya firmado al contrato a la recepción del anticipo, cheque póliza contable y estado de cuenta.</li>
                                                <li>Documentos pagados por el Beneficiario donde se compruebe las amortizaciones realizadas.</li>
                                                <li>Cuantificaron de los intereses respectivos.</li>
                                                <li>Liquidación.</li>
                                                <li>Peritaje y Bitácora.</li>
                                                <li>Oficio de Remisión.</li>
                                                <li>Acta de Incumplimiento.</li>
                                            </ol>
                                    </div>
                                    </td>
                                    <td>
                                        <div className="ol-container">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Acta Circunstancia del estado general que guarda el contrato.</li>
                                                <li>Documento de modificación al fiado del Incumplimiento ó la rescisión del contrato.</li>
                                                <li>Liquidación.</li>
                                                <li>Peritaje y Bitácora.</li>
                                                <li>Oficio de Remisión para Obra Pública.</li>
                                                <li>Liquidación.</li>
                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Documento que acredite la existencia de Vicios Ocultos ó Defectos y cuantificación Peritaje.</li>
                                                <li>Copia de algún escrito en el cual el beneficiario reclame al contratista ó prestador de servicios la reparación de los defectos ó vicios.</li>
                                                <li>Peritaje que acredite la existencia de los Vicios Ocultos.</li>
                                                <li>Liquidación.</li>
                                                <li>Acta de Incumplimiento</li>
                                                <li>Oficio de Remisión.</li>
                                            </ol>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                    }
                </div>}

                <hr className="hr-orange"></hr>
                <div className="text-titles-container">
                    <div className="case1">
                        <h2 onClick={onShowHideItemTwo}>
                            {showItemTwo ? <FontAwesomeIcon icon={faSquareMinus}/> :<FontAwesomeIcon icon={faSquarePlus}/> }&nbsp;
                            Sector Privado
                        </h2>
                        <div className="actions">
                            <Link to='' className="btn-fianzas" onClick={onOpenObraPriv}>Obra</Link>
                            <Link to='' className="btn-fianzas-outline" onClick={onOpenProvidePriv}>Proveeduría</Link>
                        </div>
                    </div>
                </div>

                {   showItemTwo &&
                    <div className="table-container">
                { !privSwitchTableView ? 
                        <table>
                                <tr>
                                    <th><b>Para Obra:</b></th>
                                    <th>Anticipo</th>
                                    <th>Cumplimiento</th>
                                    <th>Buena Calidad</th>
                                </tr>
                                <tr>
                                    <td>Producto</td>
                                    <td>Anticipo (Sector Privado)</td>
                                    <td>Cumplimiento (Sector Privado)</td>
                                    <td>Buena Calidad (Sector Privado)</td>
                                </tr>
                                <tr>
                                    <td>Plazo para presentar su reclamación:</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>                            
                                </tr>
                                <tr>
                                    <td>Artículos de la Ley relacionados con su fianza:</td>
                                    <td>Art. 93 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 93 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 93 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                </tr>
                                <tr>
                                    <td>Documentación adicional para presentar su reclamación:</td>
                                    <td>
                                        <div className="ol-container height2">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato de Obra y/o prestación de servicios ó el respectivo.</li>
                                                <li>Documentación que se haya firmado al contrato a la recepción del anticipo, cheque póliza contable y estado de cuenta.</li>
                                                <li>Documentos pagados por el Beneficiario donde se compruebe las amortizaciones realizadas.</li>
                                                <li>Cuantificaron de los intereses respectivos.</li>
                                                <li>Liquidación.</li>
                                                <li>Peritaje y Bitácora.</li>

                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container height2">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Acta Circunstancia del estado general que guarda el contrato.</li>
                                                <li>Documento de modificación al fiado del Incumplimiento ó la rescisión del contrato.</li>
                                                <li>Liquidación.</li>
                                                <li>Peritaje y Bitácoras.</li>
                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container height2">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Documento que acredite la existencia de Vicios Ocultos ó Defectos y cuantificación Peritaje.</li>
                                                <li>Copia de algún escrito en el cual el beneficiario reclame al contratista ó prestador de servicios la reparación de los defectos ó vicios.</li>
                                                <li>Peritaje que acredite la existencia de los Vicios Ocultos.</li>
                                            </ol>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                    :
                        <table>
                                <tr>
                                    <th><b>Para Proveduría:</b></th>
                                    <th>Anticipo</th>
                                    <th>Cumplimiento</th>
                                    <th>Buena Calidad</th>
                                </tr>
                                <tr>
                                    <td>Producto</td>
                                    <td>Anticipo (Sector Privado)</td>
                                    <td>Cumplimiento (Sector Privado)</td>
                                    <td>Buena Calidad (Sector Privado)</td>
                                </tr>
                                <tr>
                                    <td>Plazo para presentar su reclamación:</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>
                                    <td>180 días a partir del incumplimiento y del inicio de exigibilidad de la obligación afianzada.</td>                            
                                </tr>
                                <tr>
                                    <td>Artículos de la Ley relacionados con su fianza:</td>
                                    <td>Art. 93 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 93 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                    <td>Art. 93 de la Ley Federal De Instituciones de Fianzas Para Autoridades del Gobierno Federal ó Local.</td>
                                </tr>
                                <tr>
                                    <td>Documentación adicional para presentar su reclamación:</td>
                                    <td>
                                        <div className="ol-container height2">                                        
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato de Obra y/o prestación de servicios ó el respectivo.</li>
                                                <li>Documentación que se haya firmado al contrato a la recepción del anticipo, cheque póliza contable y estado de cuenta.</li>
                                                <li>Documentos pagados por el Beneficiario donde se compruebe las amortizaciones realizadas.</li>
                                                <li>Cuantificaron de los intereses respectivos.</li>
                                                <li>Peritaje y Bitácora.</li>
                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container height2">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Acta Circunstancia del estado general que guarda el contrato.</li>
                                                <li>Documento de modificación al fiado del Incumplimiento ó la rescisión del contrato.</li>
                                                <li>Peritaje y Bitácora.</li>
                                            </ol>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ol-container height2">
                                            <ol>
                                                <li>Póliza de Fianza</li>
                                                <li>Contrato Garantizado.</li>
                                                <li>Documento que acredite la existencia de Vicios Ocultos ó Defectos y cuantificación Peritaje.</li>
                                                <li>Copia de algún escrito en el cual el beneficiario reclame al contratista ó prestador de servicios la reparación de los defectos ó vicios.</li>
                                                <li>Peritaje que acredite la existencia de los Vicios Ocultos.</li>
                                            </ol>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                    }
                </div>}

                <hr className="hr-orange"></hr>

            <div className="text-footer-notes vertical-centered">
                <p>
                    En caso de que su reclamación sea para otro ramo y/o tipo de fianza, podrá recibir orientación telefónica en cualquiera de nuestras <Link to='/fianzas/oficinas'>oficinas de servicio</Link>.
                </p>
            </div>


                


            </section>
            <Footer />
        </>
    );
}