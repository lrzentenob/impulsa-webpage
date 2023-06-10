import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Branches } from "../../components/Seguros/Landing/Branches";
import BrandSwiper from "../../components/Seguros/Landing/BrandSwiper";
import { CentralSlider } from "../../components/Seguros/Landing/CentralSlider";
import { Footer } from "../../components/Seguros/Landing/Footer";
import { Header } from "../../components/Seguros/Landing/Header";
import { ProductsInfo } from "../../components/Seguros/Landing/ProductsInfo";
import { Services } from "../../components/Seguros/Landing/Services";
import { Submenu } from "../../components/Seguros/Landing/Submenu";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export const Seguros = () => {

    function onShowChat () {
        const modal = document.getElementById('chat-window-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
        
      }
    
    return (
        <>
            <Header />
            <Submenu />
            <CentralSlider />
            <BrandSwiper />
            <div className='chat-icon' onClick={onShowChat}>
              <FontAwesomeIcon icon={faMessage} size='2x' className='faicon-blue' />
            </div>
            <ProductsInfo />
            <Branches />
            <Services />
            <Footer />
        </>
    );
}