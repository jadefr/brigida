import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons/libs";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="navbar">
            <div className="navbar__container container">

                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    Brígida Figueira
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/gruta' className="nav-links" onClick={closeMobileMenu}>
                            Gruta
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/livro' className="nav-links" onClick={closeMobileMenu}>
                            Livro
                        </Link>
                    </li>
                    {/*<li className="nav-item home-page">*/}
                    {/*    <Link to='/' className="nav-links home-page" onClick={closeMobileMenu}>*/}
                    {/*        Página Inicial*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;