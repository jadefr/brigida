import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(true);
            } else { // if scroll up show the navbar
                setShow(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <div className={`navbar ${show && 'hidden'}`}>
            <div className="navbar__container container">

                <Link to='/' className="navbar-logo noSelect" onClick={closeMobileMenu}>
                    Brígida Figueira
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/gruta' className="nav-links noSelect" onClick={closeMobileMenu}>
                            Gruta
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/livro' className="nav-links noSelect" onClick={closeMobileMenu}>
                            Livro
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;