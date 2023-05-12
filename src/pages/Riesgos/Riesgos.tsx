import { Branches } from "../../components/Riesgos/Landing/Branches";
import { CentralSlider } from "../../components/Riesgos/Landing/CentralSlider";
import { Footer } from "../../components/Riesgos/Landing/Footer";
import { Header } from "../../components/Riesgos/Landing/Header";
import { ProductsInfo } from "../../components/Riesgos/Landing/ProductsInfo";
import { Services } from "../../components/Riesgos/Landing/Services";
import { Submenu } from "../../components/Riesgos/Landing/Submenu";

export const Riesgos = () => {

    return (
        <>
            <Header />
            <Submenu />
            <CentralSlider />
            <ProductsInfo />
            <Branches />
            <Services />
            <Footer />
        </>
    );
}