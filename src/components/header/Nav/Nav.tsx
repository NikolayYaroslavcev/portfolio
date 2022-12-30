import React from 'react';
import StyleNav from './StyleNav.module.scss'
import {Link, animateScroll as scroll} from 'react-scroll';


export const Nav = () => {
    return (
        <nav className={StyleNav.menu}>
            <ul className={StyleNav.list}>
                <Link
                    activeClass={StyleNav.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>
                    Home
                </Link>
                <Link
                    activeClass={StyleNav.active}
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>
                    Skill
                </Link>
                <Link
                    activeClass={StyleNav.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>
                    Works
                </Link>
                <Link
                    activeClass={StyleNav.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>
                    Contact
                </Link>
            </ul>
        </nav>
    );
};
