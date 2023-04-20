import '../css/Header.css';

export const Header  = ()=>{

    return (
        <header>
            <h1>Logo</h1>
            <input type='checkbox' className='navtoggle' id='togglecheck'></input>
            <nav>
                <ul>
                    <li> <a href='#'>Fianzas</a></li>
                    <li> <a href='#'>Seguros</a></li>
                    <li> <a href='#'>Riesgos</a></li>
                    <li> <a href='#'>Consultoria</a></li>
                    <li> <p>800 902 3456</p> </li>
                </ul>
            </nav>
            <label htmlFor='togglecheck' className='navtoggle-label'>
                <span>x</span>
            </label>
        </header>

        
    )
}