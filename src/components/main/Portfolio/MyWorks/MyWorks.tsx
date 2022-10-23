import React from 'react';
import sMyWorks from './SMyWorks.module.scss'

export const MyWorks = () => {
    return (
        <div className={sMyWorks.work}>
            <div className={sMyWorks.preview}>
                <div className={sMyWorks.image}>
                    <a href="src/components/main/work/Work#">
                        <img
                            src="https://st4.depositphotos.com/31343406/39296/v/450/depositphotos_392966378-stock-illustration-concept-of-to-do-list.jpg"
                            alt="image"/>
                    </a>
                    <a href="src/components/main/work/Work#" className={sMyWorks.link}>Смотреть</a>
                </div>
            </div>
            <div className={sMyWorks.tittle}>Project name</div>
            <div className={sMyWorks.text}> React is an open-source JavaScript library for developing
                user interfaces. React is developed and supported by Facebook, Instagram, and a community of
                of individual developers and corporations. React can be used to develop single-page and
                mobile applications.
            </div>
        </div>
    );
};

