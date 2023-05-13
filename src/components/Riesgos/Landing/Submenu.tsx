import './css/Base.css'
import './css/Submenu.css';
import riLogo from '../../../assets/riesgos/riesgos-logo.png'
import { Link } from 'react-router-dom';

export const Submenu = () => {

    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }
    function onGoTo () {
        const item = document.getElementById('riesgos-productos');
        item?.scrollIntoView()
    }
    return(
        <div className="submenu-riesgos">
            <div className='submenu-container'>
                <div className='logo'>
                    <img src={riLogo}></img>
                </div>
            {/* <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input> */}
            {/* <nav>
                <ul>
                    <li> <Link to="/riesgos">Inicio</Link></li>
                    <li> <Link to="/riesgos" onClick={onGoTo} >Productos</Link></li>
                    <li> <Link to="/riesgos">Oficinas</Link></li>
                    <li> <Link to="/riesgos">Soy Cliente</Link></li>
                    <li> <Link to="/riesgos">Nosotros</Link></li>
                    <li> <button className="btn-riesgos" onClick={onShowContactForm}>Contacto</button></li>
                </ul>
            </nav> */}
            {/* <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label> */}
            </div>
        </div>
    );
}