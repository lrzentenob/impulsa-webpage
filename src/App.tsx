
import { Routes, Route, Link } from 'react-router-dom';
import { Fianzas } from './pages/Fianzas/Fianzas';
import { FianzasProductos } from './pages/Fianzas/FianzasProductos';
import { FianzasRequisitos } from './pages/Fianzas/FianzasRequisitos';
import { FianzasOficinas } from './pages/Fianzas/FianzasOficinas';
import { FianzasNosotros } from './pages/Fianzas/FianzasNosotros';
import { FianzaArrendamiento } from './pages/Fianzas/FianzaArrendamiento';
import { FianzaFidelidad } from './pages/Fianzas/FianzaFidelidad';
import { FianzaFiscal } from './pages/Fianzas/FianzaFiscal';
import { FianzaJudicial } from './pages/Fianzas/FianzaJudicial';
import { FianzaNotario } from './pages/Fianzas/FianzaNotario';


function App() {
  return ( 

      <Routes>
        <Route path="/" element={<Fianzas/>}></Route>
        <Route path="/productos" element={<FianzasProductos/>}></Route>
        <Route path="/requisitos" element={<FianzasRequisitos/>}></Route>
        <Route path="/oficinas" element={<FianzasOficinas/>}></Route>
        <Route path="/nosotros" element={<FianzasNosotros/>}></Route>

        <Route path="/arrendamiento" element={<FianzaArrendamiento/>}></Route>
        <Route path="/fidelidad" element={<FianzaFidelidad/>}></Route>
        <Route path="/fiscal" element={<FianzaFiscal/>}></Route>
        <Route path="/judicial" element={<FianzaJudicial/>}></Route>
        <Route path="/notario" element={<FianzaNotario/>}></Route>
        

        <Route path="/seguros" element={<Fianzas/>}></Route>
        <Route path="/consultoria" element={<Fianzas/>}></Route>
        <Route path="/riesgos" element={<Fianzas/>}></Route>

      </Routes>
    
)
}

export default App
