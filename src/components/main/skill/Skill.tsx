import React from 'react';
import SSkill from "./SSkill.module.css"

export const Skill = () => {
    return (
        <div className={SSkill.card}>
            <div className={SSkill.image}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                    alt="react"/>
            </div>
            <p className={SSkill.title}>React</p>
            <p className={SSkill.text}>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.</p>
        </div>
    );
};

