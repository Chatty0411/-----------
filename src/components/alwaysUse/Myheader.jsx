import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

import icon from '../../img/icon.jpg';


class Header extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <NavLink to="/index" className="navbar-brand" id="nav-color icon">
                            <img id="ico" src={icon} alt="icon" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink to="/order" className="nav-link" id="nav-color" > <b>訂房資訊 </b><span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nav-color" href="#"> <b>店內環境</b> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nav-color" href="#"> <b>關於我們</b> </a>
                                </li>
                            </ul>

                            <div className="form-inline my-2 my-md-0">
                                <Link smooth to="/#contact"><button id="siinbtn" type="button" className="bbtn btn btn-outline-dark">聯絡我們</button></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Header;