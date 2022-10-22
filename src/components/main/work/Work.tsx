import React from 'react';
import SWork from './SWork.module.scss'

export const Work = () => {
    return (
        <div className={SWork.work}>
            <div className={SWork.preview}>
                <div className={SWork.image}>
                    <a href="src/components/main/work/Work#">
                        <img
                            src="https://st4.depositphotos.com/31343406/39296/v/450/depositphotos_392966378-stock-illustration-concept-of-to-do-list.jpg"
                            alt="image"/>
                    </a>
                    <a href="src/components/main/work/Work#" className={SWork.link}>Смотреть</a>
                </div>
            </div>
            <div className={SWork.tittle}>Project name</div>
            <div className={SWork.text}> React is an open-source JavaScript library for developing
                user interfaces. React is developed and supported by Facebook, Instagram, and a community of
                of individual developers and corporations. React can be used to develop single-page and
                mobile applications.
            </div>
        </div>
    );
};

