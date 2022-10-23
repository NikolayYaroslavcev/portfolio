import React from 'react';
import sPortfolio from './Portfolio.module.scss';
import {MyWorks} from './MyWorks/MyWorks';


export const Portfolio = () => {

    return (
        <div className={sPortfolio.portfolio}>
            <div className={sPortfolio.__container}>
                <p className={sPortfolio.our}>OUR WORKS</p>
                <div className={sPortfolio.items}>
                    <h2 className={sPortfolio.title}>PORTFOLIO </h2>
                    <p className={sPortfolio.text}>TEXT</p>
                </div>
                <div className={sPortfolio.works}>
                    <MyWorks/>
                    <MyWorks/>
                </div>
            </div>
        </div>
    );
};

