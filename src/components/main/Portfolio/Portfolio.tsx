import React from 'react';
import SMain from '../SMain.module.scss';
import {Work} from '../work/Work';

export const Portfolio = () => {
    return (
        <div className={SMain.portfolio}>
            <div className={SMain.__container}>
                <p className={SMain.our}>OUR WORKS</p>
                <div className={SMain.items}>
                    <h2 className={SMain.title}>Portfolio</h2>
                    <p className={SMain.text}>TEXT</p>
                </div>

                <div className={SMain.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

