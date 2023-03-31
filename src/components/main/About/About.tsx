import React from 'react';
import sAbout from './About.module.scss';
import ava from '../../assets/img/ava.jpg';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion'
// @ts-ignore
import NikolayYaroslavcev from '../../../components/file/NikolayYaroslavcev.pdf';


const textAnimation = {
    hidden: {
        y: +300,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.4},
    }),
}


export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            id="home" className={sAbout.about}>
            <div className={sAbout.__container}>
                <div className={sAbout.aboutAs}>
                    <div className={sAbout.imageIbg}>
                        <img className={sAbout.imageRadius} src={ava} alt="#"/>
                    </div>
                    <div className={sAbout.content}>
                        <motion.h1 custom={1} variants={textAnimation} className={sAbout.title}>
                            NIKOLAY YAROSLAVTCEV
                        </motion.h1>
                        <motion.p custom={2} variants={textAnimation} className={sAbout.text}>
                            FRONT-END DEVELOPER (REACT DEVELOPER)
                        </motion.p>
                        <motion.p custom={3} variants={textAnimation} className={sAbout.about}>
                            Hi, I am Nikolai Yaroslavtsev. I have
                            experience in creating SPA using
                            React/Redux/TypesScript individually
                            and in team. At the moment I am
                            studying React Native and the book
                            Grokking Algorithms and practicing
                            with tutor in English.
                            Open to your suggestions
                        </motion.p>
                        <a href={NikolayYaroslavcev} download className={sAbout.cta}>
                            <span>Download CV</span>
                            <svg width="15px" height="15px" viewBox="0 0 15 15">
                                <FontAwesomeIcon className={sAbout.icon} icon={faArrowDown}/>
                            </svg>
                        </a>
                        <a href="#skill" className={sAbout.scrollMouse}></a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

