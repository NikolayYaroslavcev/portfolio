import React, {FC} from 'react';
import StyleNav from './StyleNav.module.scss'
import {Link, animateScroll as scroll} from 'react-scroll';


type PropsType = {
    toggle: (value: boolean) => void;
    toggled: boolean
}

export const Nav: FC<PropsType> = ({toggle, toggled}) => {
    return (
        <nav className={StyleNav.menu}>
            <ul className={StyleNav.list}>
                <Link
                    activeClass={StyleNav.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    onClick={() => toggle(!toggled)}
                >
                    Home
                </Link>
                <Link
                    activeClass={StyleNav.active}
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    onClick={() => toggle(!toggled)}
                >

                    Skill
                </Link>
                <Link
                    activeClass={StyleNav.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    onClick={() => toggle(!toggled)}
                >
                    Works
                </Link>
                <Link
                    activeClass={StyleNav.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    onClick={() => toggle(!toggled)}
                >
                    Contact
                </Link>
            </ul>
        </nav>
    );
};
