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


export const Fianzas  = () =>{

    return (
        <>
        <Header />
        <Submenu />
        <CentralSlider />
        <BrandSwiper />
        <div className='chat-icon'>
          <FontAwesomeIcon icon={faMessage} size='2x' className='faicon' />
        </div>
        <ProductsInfo />
        <Services />
        <Footer/>
      </>         
    )
}