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

                    <div className="tipo-fianza-box">
                        <div className="img-bk-container">
                            <img className="rounded-image" src={fiTipoJudicial}></img>
                            <img className="curved-bk" src={fiCurveBk}></img>
                        </div>

                    </div>
                    <div className="tipo-fianza-box">
                        <h1>Fianzas Judiciales:</h1>
                        <h2>Solidez y apoyo en situaciones legales complejas.</h2>
                        <p>Estas pólizas de fianzas garantizan el pago de las obligaciones que se relacionen o deriven de los beneficios de libertad provisional (bajo caución), de libertad preparatoria o condena condicional.<br /> Estas fianzas por su naturaleza se emiten bajo condiciones específicas y previo análisis de las áreas jurídicas de las afianzadoras; para determinar la viabilidad de la emisión de la póliza de fianza.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}