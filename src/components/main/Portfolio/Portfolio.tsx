import React from 'react';
import sPortfolio from './Portfolio.module.scss';
import {MyWorks} from './MyWorks/MyWorks';
import {myWorksDate} from '../../assets/myWorksDate';
import {funSkill} from '../../assets/funSkill';
import Slider from 'react-slick';
import sMySkills from '../MySkills/MySkills.module.scss';


export const Portfolio = () => {

    return (
        <div id="works" className={sPortfolio.portfolio}>
            <div className={sPortfolio.__container}>
                <p className={sPortfolio.our}>OUR WORKS</p>
                <div className={sPortfolio.items}>
                    <h2 className={sPortfolio.title}>PORTFOLIO </h2>
                    <p className={sPortfolio.text}>TEXT</p>
                </div>

                <div className={sPortfolio.works}>
                    <Slider {...funSkill}>
                        {myWorksDate.map((m) => {
                            return (
                                <MyWorks key={m.id} title={m.title} description={m.description}/>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

