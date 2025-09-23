import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false);
    const menuRef = useRef(null);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(false);
    const lastScrollYRef = useRef(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            const previousScrollY = lastScrollYRef.current;
            const currentScrollY = window.scrollY;

            if (currentScrollY > previousScrollY) {
                setShow(true);
            } else {
                setShow(false);
            }

            // remember current page location to use in the next move
            lastScrollYRef.current = currentScrollY;
        }
    };

    // Handle click outside menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setClick(false);
            }
        };

        if (click) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [click]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, []);


    return (
        <div className={`navbar ${show ? 'hidden' : ''}`}>
            <div className="navbar__container container" ref={menuRef}>

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
                        <Link to='/testemunhos' className="nav-links noSelect" onClick={closeMobileMenu}>
                            Testemunhos
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
