import { Link } from "react-router-dom";
import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/Base.css';
import './css/FianzasRequisitos.css';
import curvedImageBk from '../../assets/general/curved-background.png';

export const FianzasRequisitos = () => {
    return (
        <>
        <Header />
        <Submenu />
        <section className="fianzas-requisitos">

            <div className="curved-titled">
                    <div className="h-container">   
                        <h1 className="title-text">Requisitos</h1>
                        <div className="image-content">
                            <img src={curvedImageBk} className="image-background"></img>
                        </div>
                    </div>
            </div>

            <div className="fianzas-requisitos-content">
                <hr className="hr-orange"></hr>

                <div className="requisitos-row">

                    <div className="requisitos-col left vertical-centered">
                        <h2>Persona Moral</h2>
                    </div>
                    
                    <div className="requisitos-col mid">
                        <ul>
                            <li><p>1. Copia de Acta Constitutiva y Protocolizaciones.</p></li>
                            <li><p>2. Identificación Vigente con Foto del Representante Legal (INE, Pasaporte o Licencia).</p></li>
                            <li><p>3. Curriculum de Obras/Servicios de la Empresa.</p></li>
                            <li><p>4. Comprobante de Domicilio Fiscal de la Empresa (No mayor a 3 Meses).</p></li>
                            <li><p>5. RFC y/o Constancia de Situación Fiscal.</p></li>
                            <li><p>6. Declaración ISR con Acuse 2022.</p></li>
                            <li><p>7. Balance General y Estado de Resultados Internos al 31 de Diciembre del 2022.</p></li>
                            <li><p>8. Balance General y Estado de Resultados Parciales Internos 2023 (No Mayor a 6 Meses). Con Leyenda de validacion (*Abajo citada). Deberán Estar en Papel Membretado y Firmados Por el Representante Legal y Contador Público, anexando copia de su Cedula Profesional.</p></li>
                        </ul>
                        <h3>Sus obligados</h3>
                        <ul>
                            <li><p>1. Copia de Escrituras de Bienes Inmuebles Urbanos. Libres de Gravamen.</p></li>
                            <li><p>2. Identificación Vigente con Foto (IFE o Pasaporte).</p></li>
                            <li><p>3. Comprobante de Domicilio del Obligado Solidario (No Mayor a 3 Meses).</p></li>
                            <li><p>4. Boleta Predial del Año 2023.</p></li>
                            <li><p>5. Certificado de Libertad o Gravamen del Año 2023.</p></li>
                            <li><p>6. Acta de Matrimonio (En caso de ser Casado), Identificación con Fotografía (INE) del Cónyuge.</p></li>
                        </ul>
                        <div className="actions">
                            <button className="btn-fianzas">Imprimir</button>
                            <button className="btn-fianzas">Enviar por correo</button>
                        </div>
                    </div>

                </div>
                <hr className="hr-orange"></hr>
                <div className="requisitos-row">

                    <div className="requisitos-col left vertical-centered">
                        <h2>Persona Física</h2>
                    </div>
                    
                    <div className="requisitos-col mid">
                        <ul>
                            <li><p>1. Identificación Vigente con Foto del Representante Legal (INE, Pasaporte o Licencia).</p></li>
                            <li><p>2. Curriculum de Obras/Servicios de la Empresa.</p></li>
                            <li><p>3. Comprobante de Domicilio Fiscal de la Empresa (No mayor a 3 Meses).</p></li>
                            <li><p>4. CURP.</p></li>
                            <li><p>5. RFC y/o Constancia de Situación Fiscal.</p></li>
                            <li><p>6. Declaración ISR y Acuse 2022.</p></li>
                            <li><p>7. Balance General y Estado de Resultados Internos al 31 de Diciembre del 2022.</p></li>
                            <li><p>8. Balance General y Estado de Resultados Parciales Internos 2023 (No mayores a 6 meses). Con Leyenda de validación (*Abajo citada). Deberán Estar en Papel Membretado y Firmados Por el Representante Legal y Contador Público, anexando copia de su Cédula Profesional.</p></li>

                        </ul>
                        <h3>Sus obligados</h3>
                        <ul>
                            <li><p>1. Copia de Escrituras de Bienes Inmuebles Urbanos. Libres de Gravamen.</p></li>
                            <li><p>2. Identificación Vigente con Foto (INE o Pasaporte).</p></li>
                            <li><p>3. Comprobante de Domicilio del Obligado Solidario (No mayor a 3 meses).</p></li>
                            <li><p>4. Boleta Predial del Año 2023.</p></li>
                            <li><p>5. Certificado de Libertad o Gravamen del Año 2023.</p></li>
                            <li><p>6. Acta de Matrimonio (En caso de ser Casado), Identificación con Fotografía (INE) del Cónyuge</p></li>
                        </ul>

    
    
    
    
    
    

                        <div className="actions">
                            <button className="btn-fianzas">Imprimir</button>
                            <button className="btn-fianzas">Enviar por correo</button>
                        </div>
                    </div>

                </div>
                <hr className="hr-orange"></hr>
            </div>
            
        </section>
        <Footer />

        </>
    );
}