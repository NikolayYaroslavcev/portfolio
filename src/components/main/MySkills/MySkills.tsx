import React from 'react';
import sMySkills from './MySkills.module.scss';
import {Skill} from './Skill/Skill';


export const MySkills = () => {
    return (
        <div className={sMySkills.skills}>
            <div className={sMySkills.__container}>
                <h2 className={sMySkills.title}>
                    MY SKILLS
                </h2>
                <p className={sMySkills.text}>I FRONT-END DEVELOPER</p>
                <div className={sMySkills.skill}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

