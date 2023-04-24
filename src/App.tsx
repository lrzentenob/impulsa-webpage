
import { CentralSlider } from './components/CentralSlider';
import { Header } from './components/Header';
import { Submenu } from './components/Submenu';
import BrandSwiper from './components/BrandSwiper';
import { ProductsInfo } from './components/ProductsInfo';
import { Branches } from './components/Branches';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

function App() {
  
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

export default App
