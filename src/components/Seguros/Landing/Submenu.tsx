import './css/Base.css'
import './css/Submenu.css';
import seLogo from '../../../assets/seguros/seguros-logo.png'
import { Link } from 'react-router-dom';

export const Submenu = () => {

    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }
    return(
        <div className="submenu-seguros">
            <div className='logo'>
                <img src={seLogo}></img>
            </div>
            <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
            <nav>
                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/productos">Productos</Link></li>
                    <li> <Link to="/requisitos">Requisitos</Link></li>
                    <li> <Link to="/oficinas">Oficinas</Link></li>
                    <li> <Link to="/nosotros">Nosotros</Link></li>
                    <li> <button className="btn-seguros" onClick={onShowContactForm}>Contacto</button></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label>

        </div>
    );
}