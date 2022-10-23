import React from 'react';
import SSkill from './SSkill.module.scss'

export const Skill = () => {
    return (
        <div className={SSkill.card}>
            <div className={SSkill.image}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                    alt="react"/>
            </div>
            <p className={SSkill.title}>React</p>
            <div className={SSkill.bar}>
                <div className={SSkill.ability}>
                    <p className={SSkill.name}>React</p>
                    <p className={SSkill.procent}>90%</p>
                </div>
                <div className={SSkill.blackFill}>
                    <div className={SSkill.whiteFill}></div>
                </div>

            </div>
            <p className={SSkill.text}>React is an open-source JavaScript library for developing user interfaces. React
                is developed and supported by Facebook, Instagram, and a community of of individual developers and
                corporations. React can be used to develop single-page and mobile applications.</p>
        </div>
    );
};

