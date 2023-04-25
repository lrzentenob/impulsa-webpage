
import { Routes, Route, Link } from 'react-router-dom';
import { Fianzas } from './pages/Fianzas/Fianzas';
import { FianzasProductos } from './pages/Fianzas/FianzasProductos';
import { FianzasRequisitos } from './pages/Fianzas/FianzasRequisitos';
import { FianzasOficinas } from './pages/Fianzas/FianzasOficinas';
import { FianzasNosotros } from './pages/Fianzas/FianzasNosotros';
import { FianzasContacto } from './pages/Fianzas/FianzasContacto';

function App() {
  return ( 

      <Routes>
        <Route path="/" element={<Fianzas/>}></Route>
        <Route path="/productos" element={<FianzasProductos/>}></Route>
        <Route path="/requisitos" element={<FianzasRequisitos/>}></Route>
        <Route path="/oficinas" element={<FianzasOficinas/>}></Route>
        <Route path="/nosotros" element={<FianzasNosotros/>}></Route>
        <Route path="/contacto" element={<FianzasContacto/>}></Route>

        <Route path="/seguros" element={<Fianzas/>}></Route>
        <Route path="/consultoria" element={<Fianzas/>}></Route>
        <Route path="/riesgos" element={<Fianzas/>}></Route>

      </Routes>
    
)
}

export default App
