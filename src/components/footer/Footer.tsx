import React from 'react';
import StyleFooter from './SFooter.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot, faMobile} from '@fortawesome/free-solid-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFileCode} from '@fortawesome/free-solid-svg-icons/faFileCode';


export const Footer = () => {
    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.__container}>
                <h3 className={StyleFooter.title}>NIKOLAY YAROSLAVTCEV</h3>
                <div className={StyleFooter.information}>

                    <div className={StyleFooter.block}>
                        <a href="tel:+375295553652" className={StyleFooter.link}> <FontAwesomeIcon
                            className={StyleFooter.icon} icon={faMobile}/></a>
                    </div>

                    <div className={StyleFooter.block}>
                        <a href="https://surl.li/djvkl" target="_blank" className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faLocationDot}/></a>
                    </div>

                    <div className={StyleFooter.block}>
                        <a href="http://surl.li/djvkl" target="_blank" className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faLinkedin}/></a>
                    </div>

                    <div className={StyleFooter.block}>
                        <a href="https://t.me/aquariumlifee" target="_blank" className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faTelegram}/></a>
                    </div>
                    <div className={StyleFooter.block}>
                        <a href="http://surl.li/djvoh" target="_blank" className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faGithub}/></a>
                    </div>
                    <div className={StyleFooter.block}>
                        <a href="https://www.codewars.com/users/NikolayYaroslavcev" target="_blank"
                           className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faFileCode}/></a>
                    </div>
                </div>
                <p className={StyleFooter.text}>© 2023 All rights reserved.</p>
            </div>
        </div>
    );
};
