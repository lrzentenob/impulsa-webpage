import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BrandSwiper from "../../components/Fianzas/Landing/BrandSwiper"
import { CentralSlider } from "../../components/Fianzas/Landing/CentralSlider"
import { Header } from "../../components/Fianzas/Landing/Header"
import { Submenu } from "../../components/Fianzas/Landing/Submenu"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { ProductsInfo } from "../../components/Fianzas/Landing/ProductsInfo"
import { Services } from "../../components/Fianzas/Landing/Services"
import { Footer } from "../../components/Fianzas/Landing/Footer"
import '../../components/Fianzas/Landing/css/ChatIcon.css';

import { Branches } from "../../components/Fianzas/Landing/Branches"

export const Fianzas  = () =>{


    return (
        <>
        <Header />
        <Submenu />
        <CentralSlider />
        <BrandSwiper />
        <ProductsInfo />
        <Branches />
        <Services />
        <Footer/>
        
      </>         
    )
}