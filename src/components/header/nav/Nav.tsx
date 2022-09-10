import React from 'react';
import StyleNav from "./StyleNav.module.css"

export const Nav = () => {
    return (
        <nav className={StyleNav.menu}>
            <ul className={StyleNav.list}>
                <li className={StyleNav.item}><a className={StyleNav.link} href="src/components/header/nav/Nav#">Главная</a></li>
                <li className={StyleNav.item}><a className={StyleNav.link} href="src/components/header/nav/Nav#">Скилы</a></li>
                <li className={StyleNav.item}><a className={StyleNav.link} href="src/components/header/nav/Nav#">Работы</a></li>
                <li className={StyleNav.item}><a className={StyleNav.link} href="src/components/header/nav/Nav#">Контакты</a></li>
            </ul>
        </nav>
    );
};

