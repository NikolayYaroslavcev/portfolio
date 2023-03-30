import React, {FC} from 'react';
import sMyWorks from './SMyWorks.module.scss'


type PropsType = {
    title: string,
    description: string,
    link: string,
    git:string,
    img: string,

}

export const MyWorks: FC<PropsType> = ({title, description, link,git, img}) => {
    return (
        <div className={sMyWorks.work}>
            <img className={sMyWorks.imag} src={img} alt=""/>
            <div className={sMyWorks.workBlock}>
                <a href={link} className={sMyWorks.link} target="_blank">Смотреть</a>
                <a href={git} className={sMyWorks.link} target="_blank">GitHub</a>
            </div>
            <div className={sMyWorks.tittle}>{title}</div>
            <div className={sMyWorks.text}> {description}
            </div>
        </div>
    );
};

