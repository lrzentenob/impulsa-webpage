import { Branches } from "../../components/Seguros/Landing/Branches";
import { CentralSlider } from "../../components/Seguros/Landing/CentralSlider";
import { Header } from "../../components/Seguros/Landing/Header";
import { ProductsInfo } from "../../components/Seguros/Landing/ProductsInfo";
import { Submenu } from "../../components/Seguros/Landing/Submenu";

export const Seguros = () => {

    return (
        <>
            <Header />
            <Submenu />
            <CentralSlider />
            <ProductsInfo />
            <Branches />
        </>
    );
}