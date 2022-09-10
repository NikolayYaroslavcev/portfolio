import React from 'react';
import SWork from "./SWork.module.css"

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
            <div className={SWork.tittle}>Название проекта</div>
            <div className={SWork.text}> React — JavaScript-библиотека с открытым исходным кодом для разработки
                пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом
                отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и
                мобильных приложений.
            </div>
        </div>
    );
};

