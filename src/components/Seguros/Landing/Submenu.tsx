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
    function onGoTo () {
        const item = document.getElementById('seguros-productos');
        item?.scrollIntoView()
    }
    return(
        <div className="submenu-seguros">
            <div className='logo'>
                <img src={seLogo}></img>
            </div>
            <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
            <nav>
                <ul>
                    <li> <Link to="/seguros">Inicio</Link></li>
                    <li> <Link to="/seguros/oficinas">Oficinas</Link></li>
                    <li> <Link to="/seguros/soycliente">Soy Cliente</Link></li>
                    <li> <Link to="/seguros/nosotros">Nosotros</Link></li>
                    <li> <button className="btn-seguros" onClick={onShowContactForm}>Contacto</button></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label>

        </div>
    );
}