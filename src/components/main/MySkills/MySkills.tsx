import React from 'react';
import sMySkills from './MySkills.module.scss';
import {Skill} from './Skill/Skill';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import {funSkill} from '../../assets/funSkill';
import {SkillData} from './Skill/SkillData';
import {motion} from 'framer-motion'

export const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.3,one: true },
    }),
}




export const MySkills = () => {

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount:0.3, once:true}}
            id="skill" className={sMySkills.skills}>
            <div  className={sMySkills.__container}>
                <motion.h2 custom={1}  variants={textAnimation}  className={sMySkills.title}>
                    MY SKILLS
                </motion.h2>
                <motion.p custom={2}  variants={textAnimation}  className={sMySkills.text}>I FRONT-END DEVELOPER</motion.p>
                <motion.div custom={3}  variants={textAnimation} className={sMySkills.skill}>
                    <Slider {...funSkill}>
                        {SkillData.map((s) => {
                            return <Skill key={s.id} id={s.id} img={s.img} title={s.title} description={s.about}/>
                        })}
                    </Slider>
                </motion.div>
            </div>
        </motion.section>
    );
};


