import React from 'react';
import sRemoteJob from './RemoteJob.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';
// @ts-ignore
import NikolayYaroslavcev from "../../file/NikolayYaroslavcev.pdf";
import {motion} from 'framer-motion'
import {textAnimation} from "../MySkills/MySkills";




export const RemoteJob = () => {

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount:0.3, once:true}}
            className={sRemoteJob.remoteJob}>
            <div className={sRemoteJob.__container}>
                <motion.h2 custom={1} variants={textAnimation} className={sRemoteJob.title}> Considering remote work</motion.h2>
                <motion.div custom={2} variants={textAnimation} className={sRemoteJob.btn}>
                    <a href={NikolayYaroslavcev} download title="Download CV"> <FontAwesomeIcon className={sRemoteJob.icon} icon={faArrowDown}/> Download CV</a>
                </motion.div>
            </div>
        </motion.section>
    );
};

