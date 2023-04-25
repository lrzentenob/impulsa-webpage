import './css/Submenu.css';
import fiLogo from '../../../assets/fianzas/fianzas-logo.png'
export const Submenu = () => {

    return(
        <div className="submenu">
            <div className='logo'>
                <img src={fiLogo}></img>
            </div>
            <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
            <nav>
                <ul>
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Productos</a></li>
                    <li> <a href="#">Nosotros</a></li>
                    <li> <a href="#">Oficinas</a></li>
                    <li> <a href="#">Directorio</a></li>
                    <li> <a href="#" className="btn-fianzas">Contacto</a></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label>

        </div>
    );
}