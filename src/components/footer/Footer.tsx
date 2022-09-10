import React from 'react';
import StyleFooter from './SFooter.module.css'
import SWork from '../main/work/SWork.module.css'

export const Footer = () => {
    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.__container}>
                <h3 className={StyleFooter.title}>Николай Ярославцев</h3>
                <div className={StyleFooter.icons}>
                    <a href="https://vk.com/" target="_blank" className={StyleFooter.link}>
                        <img className={StyleFooter.img}
                             src="https://img.icons8.com/color/344/vk-circled--v2.png"
                             alt="vk"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" className={StyleFooter.link}>
                        <img className={StyleFooter.img}
                             src="https://img.icons8.com/fluency/452/linkedin-circled.png"
                             alt="linkedin"/>
                    </a>
                    <a href="tel:+375295553652" target="_blank" className={StyleFooter.link}>
                        <img className={StyleFooter.img}
                             src="https://img.icons8.com/color/344/telegram-app--v1.png"
                             alt="telegram"/>
                    </a>
                    <a href="https://mail.ru/" target="_blank" className={StyleFooter.link}>
                        <img className={StyleFooter.img}
                             src="https://img.icons8.com/fluency/344/circled-envelope.png"
                             alt="email"/>
                    </a>
                </div>
                <p className={SWork.text}>© 2022 Все права защищены</p>
            </div>

        </div>
    );
};

