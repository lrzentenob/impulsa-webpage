import { Branches } from "../../components/Seguros/Landing/Branches";
import BrandSwiper from "../../components/Seguros/Landing/BrandSwiper";
import { CentralSlider } from "../../components/Seguros/Landing/CentralSlider";
import { Footer } from "../../components/Seguros/Landing/Footer";
import { Header } from "../../components/Seguros/Landing/Header";
import { ProductsInfo } from "../../components/Seguros/Landing/ProductsInfo";
import { Services } from "../../components/Seguros/Landing/Services";
import { Submenu } from "../../components/Seguros/Landing/Submenu";

export const Seguros = () => {

    return (
        <>
            <Header />
            <Submenu />
            <CentralSlider />
            <BrandSwiper />
            <ProductsInfo />
            <Branches />
            <Services />
            <Footer />
        </>
    );
}