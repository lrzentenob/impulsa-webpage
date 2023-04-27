import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Header.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import curvedFaded from '../../../assets/general/curved-faded.png';

export const Header  = ()=>{

    return (
        <header>
            <input type='checkbox' className='navtoggle' id='togglecheck-header'></input>
            <nav>
                <ul>
                    <li> <a href='#'>Fianzas</a></li>
                    <li> <a href='#'>Seguros</a></li>
                    <li> <a href='#'>Riesgos</a></li>
                    <li> <a href='#'>Consultoria</a></li>
                    <li> <p><FontAwesomeIcon icon={faPhone}/> 800 902 3456</p></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-header' className='navtoggle-label'>
                <span></span>
            </label>
            
        </header>

        
    )
}