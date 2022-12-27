import React from 'react';
import SSkill from './SSkill.module.scss'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



type PropsType = {
    id:number
    title: string,
    description: string
}

export const Skill = (props:PropsType) => {
    const {title,description}= props
    return (
        <div className={SSkill.card}>
            <div className={SSkill.image}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                    alt="react"/>
            </div>
            <p className={SSkill.title}>{title}</p>
            <div className={SSkill.bar}>
                <div className={SSkill.ability}>
                    <p className={SSkill.name}>React</p>
                    <p className={SSkill.procent}>90%</p>
                </div>
                <div className={SSkill.blackFill}>
                    <div className={SSkill.whiteFill}></div>
                </div>

            </div>
            <p className={SSkill.text}>{description}</p>
        </div>
    );
};



