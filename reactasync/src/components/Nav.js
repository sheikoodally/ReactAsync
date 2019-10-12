import React from 'react'
import {Link} from 'react-router-dom';


function Nav () {
        return (
            <div>
                <nav>
                    <ul>
                        <li> 
                            <Link to="/">Home </Link>  
                        </li>
                        <li>
                             <Link to="/Astronauts">Astronauts </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Nav;