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
                             <Link to="/Page1">Page1 </Link>
                        </li>
                        <li>
                            <Link to="/Page2">Page2 </Link>
                        </li>
                        <li>
                            <Link to="/Page3"> Page3 </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Nav;