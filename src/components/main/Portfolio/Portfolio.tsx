import React from 'react';
import sPortfolio from './Portfolio.module.scss';
import {MyWorks} from './MyWorks/MyWorks';
import {myWorksDate} from '../../assets/myWorksDate';
import {funSkill} from '../../assets/funSkill';
import Slider from 'react-slick';
import {motion} from 'framer-motion'
import {textAnimation} from "../MySkills/MySkills";



export const Portfolio = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount:0.3, once:true}}
            id="works" className={sPortfolio.portfolio}>
            <div className={sPortfolio.__container}>
                <motion.p custom={1}  variants={textAnimation} className={sPortfolio.our}>OUR WORKS</motion.p>
                <div className={sPortfolio.items}>
                    <motion.h2 custom={2} variants={textAnimation} className={sPortfolio.title}>PORTFOLIO </motion.h2>
                </div>
                <motion.div custom={3} variants={textAnimation} className={sPortfolio.works}>
                    <Slider {...funSkill}>
                        {myWorksDate.map((m) => {
                            return (
                                <MyWorks key={m.id} title={m.title} description={m.description} link={m.link} git={m.git} img={m.img}/>
                            )
                        })}
                    </Slider>
                </motion.div>
            </div>
        </motion.section>
    );
};

