import './css/Base.css'
import './css/Submenu.css';
import seLogo from '../../../assets/consultoria/consult-logo.png'
import { Link } from 'react-router-dom';

export const Submenu = () => {

    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }
    function onGoTo () {
        const item = document.getElementById('consultoria-productos');
        item?.scrollIntoView()
    }
    return(
        <div className="submenu-consult">
            <div className='submenu-container'>
                <div className='logo'>
                    <img src={seLogo}></img>
                </div>
                {/* <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
                <nav>
                    <ul>
                        <li> <Link to="/consultoria">Inicio</Link></li>
                        <li> <Link to="/consultoria" onClick={onGoTo} >Productos</Link></li>
                        <li> <Link to="/consultoria/oficinas">Oficinas</Link></li>
                        <li> <Link to="/consultoria/soycliente">Soy Cliente</Link></li>
                        <li> <Link to="/consultoria/nosotros">Nosotros</Link></li>
                        <li> <button className="btn-consult" onClick={onShowContactForm}>Contacto</button></li>
                    </ul>
                </nav>
                <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                    <span></span>
                </label> */}
            </div>
        </div>
    );
}