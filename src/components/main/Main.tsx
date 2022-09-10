import React from 'react';
import SMain from "./SMain.module.css"
import {Skill} from "./skill/Skill";
import {Work} from "./work/Work";

export const Main = () => {
    return (
        <div className={SMain.main}>
            <div className={SMain.about}>
                <div className={SMain.__container}>
                    <div className={SMain.aboutAs}>
                        <div className={SMain.content}>
                            <h1 className={SMain.titleAbout}>Привет!</h1>
                            <p className={SMain.text}>
                                Меня зовут <span>Николай Ярославцев</span>
                            </p>
                            <p className={SMain.text}>
                                Я font-end разработчик
                            </p>
                        </div>
                        <div className={SMain.imageIbg}>
                            <img src="https://www.ixbt.com/img/n1/news/2022/4/0/IT_large.jpg" alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={SMain.skills}>
                <div className={SMain.__container}>
                    <h2 className={SMain.title}>
                        Мои скилы
                    </h2>
                    <div className={SMain.skill}>
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </div>
            </div>
            <div className={SMain.portfolio}>
                <div className={SMain.__container}>
                    <h2 className={SMain.title}>Мои работы</h2>
                    <div className={SMain.works}>
                        <Work/>
                        <Work/>
                    </div>
                </div>
            </div>
            <div className={SMain.remoteJob}>
                <div className={SMain.__container}>
                    <h2 className={SMain.title}> Рассматриваю варианты удаленной работы</h2>
                    <div className={SMain.btn}>
                        <a className={SMain.button}>Нанять меня</a>
                    </div>
                </div>
            </div>
            <div className={SMain.contacts}>
                <div className={SMain.__container}>
                    <h2 className={SMain.title}>Контакты</h2>
                    <form className={SMain.form} action="src/components/main/Main#">
                        <input className={SMain.input} type="text" placeholder="Имя"/>
                        <input className={SMain.input} type="tel" placeholder="Телефон"/>
                        <textarea className={SMain.inputTextarea} placeholder="Примечание"/>
                        <div className={SMain.btn}>
                            <button type="submit" className={SMain.button}>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

