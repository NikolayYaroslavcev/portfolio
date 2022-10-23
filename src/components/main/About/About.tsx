import React from 'react';
import sAbout from './About.module.scss';
import ava from '../img/ava.jpg';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const About = () => {
    return (
        <div className={sAbout.about}>
            <div className={sAbout.__container}>
                <div className={sAbout.aboutAs}>
                    <div className={sAbout.imageIbg}>
                        <img src={ava} alt="#"/>
                    </div>
                    <div className={sAbout.content}>
                        <h1 className={sAbout.title}>
                            NIKOLAY YAROSLAVTCEV
                        </h1>
                        <p className={sAbout.text}>
                            FRONT-END DEVELOPER (REACT DEVELOPER)
                        </p>
                        <p className={sAbout.about}>
                            Hi, I’m Nikolay Yaroslavtcev and I am creative Front-end developer who dream making the
                            world better place by creating captivating products.
                        </p>
                        <div className={sAbout.btnLink}>
                            <a href="#">Download
                            CV <FontAwesomeIcon className={sAbout.icon} icon={faArrowDown}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

