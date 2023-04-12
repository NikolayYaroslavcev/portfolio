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
        transition: {delay: custom * 0.3, one: true},
    }),
}


export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.3, once: true}}
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
                            Hi,
                            My name is Nikolai Yaroslavtsev. I have experience in creating both SPA and websites both
                            individually and in teams. In addition, I have worked with various web studios and clients
                            as a freelancer in the field of frontend development. I have used technologies such as HTML,
                            Pug, CSS, SCSS, JavaScript, Git, Gulp, React, Redux, Redux-thunk, TypeScript,
                            React-router-dom v6, Redux-form, Axios, Ant Design, and Animate.js.
                            I am open to offers and willing to relocate. I would be happy to consider your proposals.
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

