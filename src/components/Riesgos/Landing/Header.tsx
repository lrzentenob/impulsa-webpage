import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Header.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header  = ()=>{

    return (
        <header className='header-riesgos'>
            <div className='menu-container'>
                <input type='checkbox' className='navtoggle' id='togglecheck-header'></input>
                <nav>
                    <ul>
                        <li> <Link to='/fianzas'>Fianzas</Link></li>
                        <li> <Link to='/seguros'>Seguros</Link></li>
                        <li> <Link to='/riesgos'>Riesgos</Link></li>
                        <li> <Link to='/consultoria'>Consultoría</Link></li>
                        
                    </ul>
                </nav>
                <label htmlFor='togglecheck-header' className='navtoggle-label'>
                    <span></span>
                </label>
                <p><FontAwesomeIcon icon={faPhone}/> 800 902 3456</p>
            </div>  
        </header>

        
    )
}