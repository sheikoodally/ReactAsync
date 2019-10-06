import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li> 
                            <Link to="/"><Home/> </Link>  
                        </li>
                        <li>
                             <Link to="/Page1"><Page1/> </Link>
                        </li>
                        <li>
                            <Link to="/Page2"><Page2/> </Link>
                        </li>
                        <li>
                            <Link to="/Page3"> <Page3/> </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}