import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Header.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header  = ()=>{

    return (
        <header className='header-seguros'>
            <input type='checkbox' className='navtoggle' id='togglecheck-header'></input>
            <nav>
                <ul>
                    <li> <Link to='/'>Fianzas</Link></li>
                    <li> <Link to='/fianzas'>Seguros</Link></li>
                    <li> <Link to='/riesgos'>Riesgos</Link></li>
                    <li> <Link to='/consultoria'>Consultoria</Link></li>
                    <li> <p><FontAwesomeIcon icon={faPhone}/> 800 902 3456</p></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-header' className='navtoggle-label'>
                <span></span>
            </label>

        </header>

        
    )
}