import React from 'react';
import sMySkills from './MySkills.module.scss';
import {Skill} from './Skill/Skill';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import {funSkill} from '../../assets/funSkill';
import {SkillData} from './Skill/SkillData';


export const MySkills = () => {

    return (
        <div id="skill" className={sMySkills.skills}>
            <div className={sMySkills.__container}>
                <h2 className={sMySkills.title}>
                    MY SKILLS
                </h2>
                <p className={sMySkills.text}>I FRONT-END DEVELOPER</p>
                <div className={sMySkills.skill}>
                    <Slider {...funSkill}>
                        {SkillData.map((s) => {
                            return <Skill key={s.id} id={s.id} img={s.img} title={s.title} description={s.about}/>
                        })}
                    </Slider>
                </div>

            </div>
        </div>
    );
};


