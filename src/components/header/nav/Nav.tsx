import React from 'react';
import StyleNav from './StyleNav.module.scss'



export const Nav = () => {

    return (
                <nav className={StyleNav.menu}>
                    <ul className={StyleNav.list}>
                        <li className={StyleNav.item}><a className={StyleNav.link}
                                                         href="src/components/header/nav/Nav#">Home</a></li>
                        <li className={StyleNav.item}><a className={StyleNav.link}
                                                         href="src/components/header/nav/Nav#">Skills</a></li>
                        <li className={StyleNav.item}><a className={StyleNav.link}
                                                         href="src/components/header/nav/Nav#">Works</a></li>
                        <li className={StyleNav.item}><a className={StyleNav.link}
                                                         href="src/components/header/nav/Nav#">Contact</a></li>
                    </ul>
                </nav>
    );
};


