import React from 'react';
import SMain from '../SMain.module.scss';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={SMain.skills}>
            <div className={SMain.__container}>
                <h2 className={SMain.title}>
                    MY SKILLS
                </h2>
                <p className={SMain.text}>I FRONT-END DEVELOPER</p>
                <div className={SMain.skill}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

