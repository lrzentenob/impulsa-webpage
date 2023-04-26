import { Link } from "react-router-dom";
import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/Base.css';
import './css/FianzasRequisitos.css';

export const FianzasRequisitos = () => {
    return (
        <>
        <Header />
        <Submenu />
        <section className="requisitos">
            <h1>Requisitos</h1>
            <div className="requisitos-content">
                <div className="requisitos-left">
                    <h2>Persona Física</h2>
                        <ul>
                            <li><p>Identificación Vigente con Foto del Representante Legal (INE, Pasaporte o Licencia)</p></li>
                            <li><p>Curriculum de Obras/Servicios de la Empresa</p></li>
                            <li><p>Comprobante de Domicilio Fiscal de la Empresa (No mayor a 3 Meses)</p></li>
                            <li><p>CURP</p></li>
                            <li><p>RFC y/o Constancia de Situación Fiscal</p></li>
                            <li><p>Declaración ISR y Acuse 2022</p></li>
                            <li><p>Balance General y Estado de Resultados Internos al 31 de Diciembre del 2022</p></li>
                            <li><p>Balance General y Estado de Resultados Parciales Internos 2023 (No mayores a 6 meses). Con Leyenda de validación (*Abajo citada). Deberán Estar en Papel Membretado y Firmados Por el Representante Legal y Contador Público, anexando copia de su Cédula Profesional</p></li>
                        </ul>
                    <div className="requisitos-actions">
                        <Link to="#" className="btn-fianzas">Imprimir</Link>
                        <Link to="#" className="btn-fianzas">Enviar por correo</Link>
                    </div> 
                </div>
                
                <div className="requisitos-right">
                    <h2>Sus obligados</h2>
                    <ul>
                        <li><p>Copia de Escrituras de Bienes Inmuebles Urbanos. Libres de Gravamen</p></li>
                        <li><p>Identificación Vigente con Foto (INE o Pasaporte)</p></li>
                        <li><p>Comprobante de Domicilio del Obligado Solidario (No mayor a 3 meses)</p></li>
                        <li><p>Boleta Predial del Año 2023</p></li>
                        <li><p>Certificado de Libertad o Gravamen del Año 2023</p></li>
                        <li><p>Acta de Matrimonio (En caso de ser Casado), Identificación con Fotografía (INE) del Cónyuge</p></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="requisitos-content">
                <div className="requisitos-left">
                    <h2>Persona Moral</h2>
                    <ul>
                        <li><p>Copia de Acta Constitutiva y Protocolizaciones</p></li>
                        <li><p>Identificación Vigente con Foto del Representante Legal (INE, Pasaporte o Licencia)</p></li>
                        <li><p>Curriculum de Obras/Servicios de la Empresa</p></li>
                        <li><p>Comprobante de Domicilio Fiscal de la Empresa (No mayor a 3 Meses)</p></li>
                        <li><p>RFC y/o Constancia de Situación Fiscal</p></li>
                        <li><p>Declaración ISR con Acuse 2022</p></li>
                        <li><p>Balance General y Estado de Resultados Internos al 31 de Diciembre del 2022</p></li>
                        <li><p>Balance General y Estado de Resultados Parciales Internos 2023 (No Mayor a 6 Meses). Con Leyenda de validacion (*Abajo citada). Deberán Estar en Papel Membretado y Firmados Por el Representante Legal y Contador Público, anexando copia de su Cedula Profesional</p></li>
                    </ul>
                    <div className="requisitos-actions">
                        <Link to="#" className="btn-fianzas">Imprimir</Link>
                        <Link to="#" className="btn-fianzas">Enviar por correo</Link>
                    </div> 
                </div>
                
                <div className="requisitos-right">
                    <h2>Sus obligados</h2>
                    <ul>
                        <li><p>Copia de Escrituras de Bienes Inmuebles Urbanos. Libres de Gravamen</p></li>
                        <li><p>Identificación Vigente con Foto (IFE o Pasaporte)</p></li>
                        <li><p>Comprobante de Domicilio del Obligado Solidario (No Mayor a 3 Meses)</p></li>
                        <li><p>Boleta Predial del Año 2023</p></li>
                        <li><p>Certificado de Libertad o Gravamen del Año 2023</p></li>
                        <li><p>Acta de Matrimonio (En caso de ser Casado), Identificación con Fotografía (INE) del Cónyuge</p></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <p className="legend-note"> * Leyenda de validación para Balance y Estado de Resultados:Bajo protesta de decir verdad, manifiesto que las cifras contenidas en este Estado Financiero son veraces y contienen toda la información referente a la situación financiera y/o los resultados de la empresa y afirmo que soy(somos) legalmente responsable (s) de la autenticidad y veracidad de la mismas, asumiendo asimismo, todo tipo de responsabilidad derivada de cualquier declaración en falso sobre las mismas.</p>

        </section>
        <Footer />

        </>
    );
}