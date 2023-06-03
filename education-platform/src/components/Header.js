import React from 'react';
import logo_header from './AboutUs/images/logo_header.svg';

function Header() {
    return (
        <header className="header">
            <a href = "#">
                <img src = {logo_header} alt = "лого" className = "header__logo"/>
            </a>
        </header>
    );
}

export default Header;