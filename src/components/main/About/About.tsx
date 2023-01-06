import React from 'react';
import sAbout from './About.module.scss';
import ava from '../img/ava.jpg';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// @ts-ignore
import NikolayYaroslavcev from '../../../components/file/NikolayYaroslavcev.pdf';
import {Link, animateScroll as scroll} from 'react-scroll';


export const About = () => {
    return (
        <div id="home" className={sAbout.about}>
            <div className={sAbout.__container}>
                <div className={sAbout.aboutAs}>
                    <div className={sAbout.imageIbg}>
                        <img className={sAbout.imageRadius} src={ava} alt="#"/>
                    </div>
                    <div className={sAbout.content}>
                        <h1 className={sAbout.title}>
                            NIKOLAY YAROSLAVTCEV
                        </h1>
                        <p className={sAbout.text}>
                            FRONT-END DEVELOPER (REACT DEVELOPER)
                        </p>
                        <p className={sAbout.about}>
                            Hi, I am Nikolai Yaroslavtsev. I have
                            experience in creating SPA using
                            React/Redux/TypesScript individually
                            and in team. At the moment I am
                            studying React Native and the book
                            Grokking Algorithms and practicing
                            with tutor in English.
                            Open to your suggestions
                        </p>
                        <a href={NikolayYaroslavcev} download className={sAbout.cta}>
                            <span>Download CV</span>
                            <svg width="15px" height="15px" viewBox="0 0 15 15">
                                <FontAwesomeIcon className={sAbout.icon} icon={faArrowDown}/>
                            </svg>
                        </a>
                        <a href="#skill" className={sAbout.scrollMouse}></a>
                        {/*<Link*/}
                        {/*    activeClass={sAbout.scrollMouse}*/}
                        {/*    to="skill"*/}
                        {/*    spy={true}*/}
                        {/*    smooth={true}*/}
                        {/*    offset={1}*/}
                        {/*    duration={500}>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

