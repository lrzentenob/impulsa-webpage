import '../css/Submenu.css';

export const Submenu = () => {

    return(
        <div className="submenu">
            <p>LOGO</p>
            <input type='checkbox' className='navtoggle' id='togglecheck-submenu'></input>
            <nav>
                <ul>
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Productos</a></li>
                    <li> <a href="#">Nosotros</a></li>
                    <li> <a href="#">Oficinas</a></li>
                    <li> <a href="#">Directorio</a></li>
                    <li> <a href="#" className="btn">Contacto</a></li>
                </ul>
            </nav>
            <label htmlFor='togglecheck-submenu' className='navtoggle-label'>
                <span></span>
            </label>

        </div>
    );
}