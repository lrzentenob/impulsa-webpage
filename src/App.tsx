
import { Routes, Route } from 'react-router-dom';
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
import { FianzasValidacion } from './pages/Fianzas/FianzasValidacion';
import { FianzasProgramaProveedores } from './pages/Fianzas/FianzasProgramaProveedores';
import { FianzasCancelacion } from './pages/Fianzas/FianzasCancelacion';
import { FianzasGuiaReclamos } from './pages/Fianzas/FianzasGuiaReclamos';
import { FianzasCotizacion } from './pages/Fianzas/FianzasCotizacion';
import { Seguros } from './pages/Seguros/Seguros';
import { SegurosVida } from './pages/Seguros/SegurosVida';
import { SegurosGastosMedicos } from './pages/Seguros/SegurosGastosMedicos';
import { SegurosAuto } from './pages/Seguros/SegurosAuto';
import { SegurosHogar } from './pages/Seguros/SegurosHogar';
import { SegurosSoyCliente } from './pages/Seguros/SegurosSoyCliente';
import { SegurosOficinas } from './pages/Seguros/SegurosOficinas';
import { SegurosNosotros } from './pages/Seguros/SegurosNosotros';
import { Consultoria } from './pages/Consultoria/Consultoria';
import { Riesgos } from './pages/Riesgos/Riesgos';
import { RiesgosOficinas } from './pages/Riesgos/RiesgosOficinas';


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

        <Route path="/cotizacion" element={<FianzasCotizacion/>}></Route>
        <Route path="/validacion" element={<FianzasValidacion/>}></Route>
        <Route path="/cancelacion" element={<FianzasCancelacion/>}></Route>
        <Route path="/guia-reclamos" element={<FianzasGuiaReclamos/>}></Route>
        <Route path="/programa-proveedores" element={<FianzasProgramaProveedores/>}></Route>
        

        <Route path="/seguros" element={<Seguros/>}></Route>
        <Route path="/seguros/vida" element={<SegurosVida/>}></Route>
        <Route path="/seguros/gastos-medicos" element={<SegurosGastosMedicos/>}></Route>
        <Route path="/seguros/auto" element={<SegurosAuto/>}></Route>
        <Route path="/seguros/hogar" element={<SegurosHogar/>}></Route>
        <Route path="/seguros/soycliente" element={<SegurosSoyCliente/>}></Route>
        <Route path="/seguros/oficinas" element={<SegurosOficinas/>}></Route>
        <Route path="/seguros/nosotros" element={<SegurosNosotros/>}></Route>

        <Route path="/consultoria" element={<Consultoria/>}></Route>
        
        <Route path="/riesgos" element={<Riesgos/>}></Route>
        <Route path="/riesgos/oficinas" element={<RiesgosOficinas/>}></Route>

      </Routes>
    
)
}

export default App
