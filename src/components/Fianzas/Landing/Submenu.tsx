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
            <div className='submenu-container'>
                <div className='logo'>
                    <img src={fiLogo}></img>
                </div>
                <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
                <nav>
                    <ul>
                        <li> <Link to="/fianzas">Inicio</Link></li>
                        <li> <Link to="/fianzas/productos">Productos</Link></li>
                        <li> <Link to="/fianzas/requisitos">Requisitos</Link></li>
                        <li> <Link to="/fianzas/oficinas">Oficinas</Link></li>
                        <li> <Link to="/fianzas/nosotros">Nosotros</Link></li>
                        <li> <button className="btn-fianzas" onClick={onShowContactForm}>Contacto</button></li>
                    </ul>
                </nav>
                <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                    <span></span>
                </label>
            </div>
        </div>
    );
}