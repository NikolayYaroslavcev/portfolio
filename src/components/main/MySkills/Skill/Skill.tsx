import React from 'react';
import SSkill from './SSkill.module.scss'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


type PropsType = {
    id: number
    img: string,
    title: string,
}

export const Skill = (props: PropsType) => {
    const {img, title} = props
    return (
        <div className={SSkill.card}>
            <div className={SSkill.image}>
                <img
                    src={img}
                    alt={title}/>
            </div>
            <p className={SSkill.title}>{title}</p>
        </div>
    );
};



