import './css/Submenu.css';
import fiLogo from '../../../assets/fianzas/fianzas-logo.png'
import { Link } from 'react-router-dom';

export const Submenu = () => {

    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }
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
                    <li> <button className="btn-fianzas" onClick={onShowContactForm}>Contacto</button></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label>

        </div>
    );
}