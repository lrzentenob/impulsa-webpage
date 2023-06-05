import { Header } from "../../components/Seguros/Landing/Header";
import { Submenu } from "../../components/Seguros/Landing/Submenu";
import { Footer } from "../../components/Seguros/Landing/Footer";

import seBackgroundCurved from "../../assets/general/curved-background.png";
import seSeguroIcono from "../../assets/seguros/general/seguro-gastos-medicos-icon.png";
import seSegurosVidaPortrait from "../../assets/seguros/general/seguro-gastos-medicos-portrait.png";
import seSegurosVidaWhatis from "../../assets/seguros/general/seguros-gastos-medicos-savings.png";

import "./css/SegurosGastosMedicos.css";
import { Link } from "react-router-dom";

export const SegurosGastosMedicos = () => {
  return (
    <>
      <Header />
      <Submenu />

      <section>
        <div className="seguros-gastos-medicos">

          <div className="seguros-gastos-medicos-block top">
            <div className="floating-portrait">
              <img src={seBackgroundCurved} className="curvedbk"></img>
              <img src={seSeguroIcono} className="seguros-vida-icon"></img>
            </div>

            <div className="paragraph">
              <h1>Seguro de gastos médicos</h1>
              <p>
              Pensando en tu salud hemos conjuntado una diversidad de seguros para adecuarlos perfectamente a tus necesidades.
              </p>
            </div>
          </div>

          <div className="seguros-gastos-medicos-block">
            <div className="floating-portrait">
              <img src={seBackgroundCurved} className="curvedbk lg"></img>
              <img
                src={seSegurosVidaPortrait}
                className="seguros-vida-portrait"
              ></img>
            </div>
            <div className="paragraph">
              <h2>¿Ya cuentas con Seguro de Gastos Médicos Mayores?</h2>
              <p>
                Tu seguro de gastos médicos mayores te brinda la tranquilidad y la seguridad financiera para hacer frente a los gastos hospitalarios, intervenciones quirúrgicas, honorarios médicos, medicinas, análisis clínicos y terapias físicas de rehabilitación en caso de accidente o enfermedades. <br/><br/>
                Si tu póliza actual te resulta muy cara o no tienes la seguridad de su cobertura, podemos asesorarte y ver diferentes opciones.
              </p>
            </div>

          </div>
          <div className="seguros-gastos-medicos-block">
            <div className="single-paragraph">
              <h2>¿Cómo funciona un seguro de gastos médicos?</h2>
              <p>El Seguro de Gastos Médicos Mayores tiene como función <b>proteger tu salud y tu patrimonio al mismo tiempo</b>, ante alguna enfermedad o accidente. Puede cubrir los gastos de atención médica, cirugías, medicina, análisis clínicos, entre otros servicios. Esto <b>siempre</b> dependerá de la aseguradora y del plan contratado.</p>
            </div>
          </div>

          <div className="seguros-gastos-medicos-block">
          
            <div className="single-image">
              <img src={seSegurosVidaWhatis}></img>
            </div>

            <div className="paragraph">
              <h2>¿Qué puede cubrir tu seguro?</h2>
              <p>
                <ul>
                    <li>Maternidad</li>
                    <li>Servicios de asistencia médica</li>
                    <li>Medicamentos, estudios y análisis</li>
                    <li>Eliminación de deducible por accidente</li>
                    <li>Emergencia en el extranjero</li>
                    <li>Indemnización por hospitalización</li>
                    <li>Indemnización por cáncer</li>
                    <li>Asistencia en viajes, etc.</li>
                </ul>
              </p>
            </div>

          </div>
          <div className="footnote">
            <p>
              ¿Tienes dudas? Nosotros te asesoramos
              <br />Comunícate al <b>800 902 3456</b></p>
            <p>
              No esperes más para brindar seguridad y calma a tu familia, recuerda que estamos para apoyarte y esperamos que te acerques a nuestras <Link to='/seguros/oficinas'>oficinas de servicio</Link>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};
