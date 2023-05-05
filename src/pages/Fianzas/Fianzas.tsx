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
import { useEffect } from "react"

export const Fianzas  = () =>{

  function onShowChat () {
    const modal = document.getElementById('chat-window-component');
    const disp = modal?.style.display;
    modal!.style.display = disp === 'block' ? "none" : "block";
  }

  useEffect( ()=> {
    const modal = document.getElementById("impulsa-home-modal-window");
    console.log(modal);
    modal!.style.display = "block";
  },[])

    return (
        <>
        <Header />
        <Submenu />
        <CentralSlider />
        <BrandSwiper />
        <div className='chat-icon' onClick={onShowChat}>
          <FontAwesomeIcon icon={faMessage} size='2x' className='faicon' />
        </div>
        <ProductsInfo />
        <Services />
        <Footer/>
        
      </>         
    )
}