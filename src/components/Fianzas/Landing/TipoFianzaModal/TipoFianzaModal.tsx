import { Link } from "react-router-dom";
import "./TipoFianzaModal.css";
import {  useState } from "react";

export const TipoFianzaModal: React.FC< { tipoFianza: string }> = ( { tipoFianza}) => {
  
  return (
    <div id="div-modal-tipo-fianza" className="modal-tipo-fianza">
      { contentRenderer(tipoFianza)}

    </div>
  );
};

export const contentRenderer = ( tipoFianza: string) => {
  const [showMore, setShowMore] = useState(true);
    function onCloseModal() {
        const modalWindow = document.getElementById("div-modal-tipo-fianza");
        modalWindow!.style.display = "none";

        const modalWindowContent = document.getElementById("tipo-fianza-content-element");
        modalWindowContent!.style.top = "50%";
        modalWindowContent!.style.left = "50%";
        modalWindowContent!.style.transform = "translate(-50%,-50%)";
        
        setShowMore(true);  
      }

      function onSeeMore () {
        const modalWindowContent = document.getElementById("tipo-fianza-content-element");
        modalWindowContent!.style.top = "0%";
        modalWindowContent!.style.left = "0%";
        modalWindowContent!.style.transform = "translate(0%,0%)";
        
        setShowMore(false);
        
    
    }
    
    switch( tipoFianza) {
        case '01':
            return (
            <div className="tipo-fianza-content" id='tipo-fianza-content-element'>
                <h2> Para clientes, contratistas y proveedores</h2>
                <p>
                  Son aquellas fianzas que garantizan cualquier obligación, válida,
                  legal y de contenido económico, celebrada entre entidades del gobierno
                  federal y los particulares. Existen Fianzas de: <br />
                  <br />
                  <ul>
                    <li> <p>1. Concurso o Licitación</p></li>    
                    <li><p>2. Buen Uso de Anticipo</p></li>
                    <li><p>3. Cumplimiento</p></li>
                    <li><p>4. Buena Calidad</p></li>
                    <li><p>5. Permisos y Concesiones</p></li>
                  </ul>
                  <br />
                </p>
                <button onClick={onCloseModal} className="btn-fianzas"> Cerrar </button>
              </div>
            );
        case '02':
            return (
            <div className="tipo-fianza-content" id='tipo-fianza-content-element'>
                <h2>Crédito</h2>
                <p>
                  La fianza de crédito garantiza ante personas morales, el cumplimiento de obligaciones de carácter crediticio contraídas por personas físicas o morales, relacionadas con el pago de una determinada suma de dinero. Existen Fianzas de: 
                  <br />
                  <ul>
                    <li> <p>1. Suministro</p></li>    
                    <li><p>2. Compra Venta y Distribución Mercantil</p></li>
                    <li><p>3. Financieras.</p></li>
                  </ul>
                  <br />
                </p>
                <button onClick={onCloseModal} className="btn-fianzas"> Cerrar </button>
              </div>
            );

        case '03':
            return (
            <div className="tipo-fianza-content" id='tipo-fianza-content-element'>
                <h2>Judiciales</h2>
                <p>La fianza Judicial es aquella que garantiza el cumplimiento de obligaciones específicas solicitadas por particulares dentro de un procedimiento judicial o bien que el juez o la ley obliguen a un particular a garantizar un acto procesal concreto. Existen Fianzas:<br/>
                  <ul>
                    <li><p>1. Judiciales Penales</p></li>    
                    <li><p>2. Libertad Provisional</p></li>    
                    <li><p>3. Libertad Condicional (de condena)</p></li>    
                    <li><p>4. Libertad Preparatoria</p></li>    
                    <li><p>5. Judiciales Civiles</p></li>    
                    <li><p>6. Providencia Precautoria</p></li>    
                    <li><p>7. Levantamiento de Providencia Precautoria</p></li>    
                    <li><p>8. Judicial de Amparo</p></li>    
                    <li><p>9. Pensión Alimenticia</p></li>    
                    <li><p>10. Gestor Judicial, Síndico o Manejo como Albacea</p></li>    
                  </ul>
                  <br/>
                </p>
                <button onClick={onCloseModal} className="btn-fianzas"> Cerrar </button>
              </div>
            );
        case '04':
            return (
            <div className="tipo-fianza-content" id='tipo-fianza-content-element'>
                <h2>Fideicomisos de Garantía</h2>

                <div>
                  
                    <p><b>Qué es un Fideicomiso</b></p>
                    
                    <p>En la práctica lo definimos como un “Contrato en virtud del cual una persona física o moral transmite la titularidad de bienes y/o derechos al fiduciario, para que éste, como consecuencia de la obligación que adquiere en el acto constitutivo, disponga de los mismos con el objeto de realizar los fines para los cuales fue creado, en beneficio de la misma persona que transmitió los bienes, o de terceros previamente designados”.</p> <br/>
                  
                  
                    <p><b>Partes que integran un contrato de fideicomiso</b></p>
                    <p> Fideicomiente Persona física o moral que constituye un fideicomiso, y quién hace la afectación de los bienes o derechos de los cuales será titular el fiduciario, para la realización de los fines que se establezcan en el contrato de fideicomiso. Quién tiene que contar con la capacidad jurídica para obligarse y disponer de los bienes y/o derechos.
                        Fiduciario Institución Afianzadora, aseguradora, de crédito o casa de bolsa que tenga autorización de la Secretaría de Hacienda y Crédito Público para actuar como tal.
                        Fideicomisario Persona física o moral que habrá de recibir los beneficios del fideicomiso, a quién también se le conoce como beneficiario. Designado por el fideicomitente, en cuyo provecho o beneficio se constituye el fideicomiso, designándose en el acto constitutivo del mismo o en sus modificaciones.
                    {!showMore && 
                      <p>
                        <br/>
                        <b>Tipos de fideicomiso que manejamos</b><br/>

                        Existen tres tipos de Fideicomiso:<br/>

                        <b>De Garantía</b>. Tiene como finalidad la aportación de bienes y/o derechos por parte del fideicomitente al patrimonio del Fideicomiso, con el propósito de garantizar una prestación anterior o futura a su cargo o a cargo de terceros que éste determine a favor del Fideicomisario, por lo que tales Fideicomisos tienen el carácter de irrevocables.<br/>

                        <b>De Administración</b> (Este tipo de Fideicomiso no está disponible y sólo se muestra para propósitos informativos).<br/>

                        <b>De Inversión</b> (Este tipo de Fideicomiso no está disponible y sólo se muestra para propósitos informativos).<br/>

                        <br/><b>¿Qué tipo de bienes y/o derechos se pueden aportar a fideicomiso como patrimonio?</b><br/>

                        El patrimonio de los fideicomisos puede constituirse con cualquier clase de bienes que se encuentren dentro del comercio o cualquier derecho que no sea de ejercicio personal e intransmisible por su propia naturaleza.

                        Estos bienes o derechos tendrán que estar libres de cualquier tipo de prenda.
                        <ul>
                          <li><p>Bienes Inmuebles. Ej. Casas, edificios, etc.</p></li>
                          <li><p>Bienes Muebles. Ej. Aviones, maquinaria y equipo, barcos, etc.</p></li>
                          <li><p>Valores. Ej. Acciones bursátiles, no bursátiles e inversiones de recursos líquidos.</p></li>
                          <li><p>Derechos. Ej. De cobro, títulos de crédito, contratos de servicio, derechos litigiosos, cartera vencida, pólizas de seguro, etc.</p></li>
                        </ul>
                      </p>    
                    }
                    {showMore && <Link to='' onClick={onSeeMore}>...Ver más</Link>}
                    </p>
                  

                  
                </div>
                <div>
                  <br/>
                  <button onClick={onCloseModal} className="btn-fianzas"> Cerrar </button>
                </div>
              </div>
            );


    }

}
