import './css/Submenu.css';
import fiLogo from '../../../assets/fianzas/fianzas-logo.png'
import { Link } from 'react-router-dom';
export const Submenu = () => {

    return(
        <div className="submenu">
            <div className='logo'>
                <img src={fiLogo}></img>
            </div>
            <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
            <nav>
                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/productos">Productos</Link></li>
                    <li> <Link to="/requisitos">Requisitos</Link></li>
                    <li> <Link to="/oficinas">Oficinas</Link></li>
                    <li> <Link to="/nosotros">Nosotros</Link></li>
                    <li> <Link to="/contacto" className="btn-fianzas">Contacto</Link></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label>

        </div>
    );
}