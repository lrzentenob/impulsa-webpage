import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import fiTipoJudicial from '../../assets/fianzas/judicial-fianza-tipo.png';
import fiCurveBk from '../../assets/general/curved-background.png';

export const FianzaJudicial = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="tipo-fianza">
                <div className="tipo-fianza-content">

                    <div className="tipo-fianza-box left-box-tipo-fianza">
                        <img src={fiTipoJudicial} className="fianza-tipo-photo"></img>
                        <img src={fiCurveBk} className="fianza-tipo-curved-image"></img>
                    </div>
                    <div className="tipo-fianza-box">
                        <h2>Fianzas Judiciales</h2>
                        <h3>Solidez y apoyo en situaciones legales complejas.</h3>
                        <p>Estas pólizas de fianzas garantizan el pago de las obligaciones que se relacionen o deriven de los beneficios de libertad provisional (bajo caución), de libertad preparatoria o condena condicional.<br /> Estas fianzas por su naturaleza se emiten bajo condiciones específicas y previo análisis de las áreas jurídicas de las afianzadoras; para determinar la viabilidad de la emisión de la póliza de fianza.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}