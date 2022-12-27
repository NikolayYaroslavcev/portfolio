import React from 'react';
import sMyWorks from './SMyWorks.module.scss'



type PropsType = {
    title: string,
    description: string
}

export const MyWorks = (props:PropsType) => {
    const {title,description} = props
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
            <div className={sMyWorks.tittle}>{title}</div>
            <div className={sMyWorks.text}> {description}
            </div>
        </div>
    );
};

