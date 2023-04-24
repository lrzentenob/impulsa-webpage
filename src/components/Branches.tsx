import '../css/Branches.css';
import curvedBk from '../assets/general/curved-background.png';
import fiMap from '../assets/fianzas/mapa.png';
export const Branches = () => {

    return (
            
        <div className="branches">
            <div className='cut-bkground'>
                <img src={curvedBk} alt='curved background'/>
            </div>
            <div className='branches-upper-content'>
                    <h1>Oficinas</h1>
                    <p>La experiencia de usuario y la cercanía con nuestros clientes es nuestra prioridad, por eso contamos con 9 oficinas en los estados de Chiapas, Tabasco, Estado de México y Ciudad de México.</p>
            </div>
            <div className='branches-lower-content'>
                <div className='branches-detail'>
                    <img src={fiMap} alt='mapa de sucursales'></img>
                </div>
                <div className='branches-detail'>
                    <ul>
                        <li><p>Afianzadora Insurgentes</p></li>
                        <li><p>Afianzadora Aserta</p></li>
                        <li><p>Afianzadora Monterrey</p></li>
                        <li><p>Liberty Fianzas</p></li>
                        <li><p>Afianzadora Sofimex</p></li>
                        <li><p>Afianzadora Berkley</p></li>
                        <li><p>Fianzas Doroma</p></li>
                        <li><p>Zurich Fianzas de Mexico</p></li>
                        <li><p>Fudicia</p></li>
                        <li><p>Afianzadora Cescemex </p></li>
                        <li><p>Chubb de México Compañía Afianzadora</p></li>
                        <li><p>Afianzadora Mapfre</p></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}