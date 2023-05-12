import { Branches } from "../../components/Consultoria/Landing/Branches";
import { CentralSlider } from "../../components/Consultoria/Landing/CentralSlider";
import { Footer } from "../../components/Consultoria/Landing/Footer";
import { Header } from "../../components/Consultoria/Landing/Header";
import { ProductsInfo } from "../../components/Consultoria/Landing/ProductsInfo";
import { Services } from "../../components/Consultoria/Landing/Services";
import { Submenu } from "../../components/Consultoria/Landing/Submenu";

export const Consultoria = () => {
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