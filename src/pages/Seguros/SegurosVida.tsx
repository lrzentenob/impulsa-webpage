import { Header } from "../../components/Seguros/Landing/Header";
import { Submenu } from "../../components/Seguros/Landing/Submenu";
import { Footer } from "../../components/Seguros/Landing/Footer";

import seBackgroundCurved from "../../assets/general/curved-background.png";
import seSeguroIcono from "../../assets/seguros/general/seguros-vida-icono.png";
import seSegurosVidaPortrait from "../../assets/seguros/general/seguros-vida-portrait.png";
import seSegurosVidaWhatis from "../../assets/seguros/general/seguros-vida-whatis.png";

import "./css/SegurosVida.css";
import { Link } from "react-router-dom";

export const SegurosVida = () => {
  return (
    <>
      <Header />
      <Submenu />

      <section>
        <div className="seguros-vida">

          <div className="seguros-vida-block top">
            <div className="floating-portrait">
              <img src={seBackgroundCurved} className="curvedbk"></img>
              <img src={seSeguroIcono} className="seguros-vida-icon"></img>
            </div>

            <div className="paragraph">
              <h1>Seguro de Vida</h1>
              <p>
                Brinda protección ante posible eventualidad garantizando al
                asegurado y beneficiarios un respaldo económico. Garantiza la
                tranquilidad y plenitud de tu familia pase lo que pase.
              </p>
            </div>
          </div>

          <div className="seguros-vida-block">
            <div className="paragraph">
              <h2>¿Qué tipos de seguro existen?</h2>
              <p>
                <b>1. Vida Temporal:</b>
                <br />
                <br />
                Garantiza el capital contratado a los beneficiarios en caso de
                fallecimiento del asegurado, protegiéndolo por un periodo
                determinado.
                <br />
                <br />
                <b>2. Seguro Dotal:</b>
                <br />
                <br />
                Garantiza la compensación económica en vida del asegurado, no
                está sujeto solo a su fallecimiento.
                <br />
                <br />
                <b>3. Seguro Ordinario:</b>
                <br />
                <br />
                Cubre a partir de los 18 hasta los 99 años por riesgo de
                fallecimiento. Si el asegurado aún vive, se le entrega la suma
                asegurada.
                <br />
                <br />
                <b>4. Vida Educacional:</b>
                <br />
                <br />
                Con este seguro tus hijos podrán seguir adelante con sus planes
                profesionales ya que contarán con un respaldo económico que les
                permitirá continuar con su educación. El menor tiene un ahorro
                garantizado para el término del plan y el adulto puede quedar
                cubierto ante eventualidades como fallecimiento o invalidez.
                <br />
                <br />
              </p>
            </div>

            <div className="floating-portrait">
              <img src={seBackgroundCurved} className="curvedbk lg"></img>
              <img
                src={seSegurosVidaPortrait}
                className="seguros-vida-portrait"
              ></img>
            </div>
          </div>

          <div className="seguros-vida-block">
            

            <div className="single-image">
              <img src={seSegurosVidaWhatis}></img>
            </div>

            <div className="paragraph">
              <h2>¿Qué puede cubrir tu seguro?</h2>
              <p>
                <ul>
                    <li>Muerte accidental</li>
                    <li>Pérdidas orgánicas</li>
                    <li>Indemnización por invalidez total y permanente</li>
                    <li>Muerte colectiva</li>
                    <li>Gastos funerarios</li>
                </ul>
              </p>
              <h2>Recomendación</h2>
              <p>Es importante que antes de adquirir tu seguro consideres tus necesidades, presupuesto, coberturas, etc., ya que varía dependiendo de la Aseguradora. Te recomendamos comunicarte con nosotros para ayudarte a tomar la mejor decisión.</p>
            </div>

          </div>
          <div className="footnote">No esperes más para brindar seguridad y calma a tu familia, recuerda que estamos para apoyarte y esperamos que te acerques a nuestras <Link to='/seguros/oficinas'>oficinas de servicio</Link>.</div>

        </div>
      </section>

      <Footer />
    </>
  );
};
