import React from 'react';
import SMain from './SMain.module.scss'
import {Skills} from './skills/Skills';
import {About} from './About/About';
import {Portfolio} from './Portfolio/Portfolio';
import {RemoteJob} from './RemoteJob/RemoteJob';
import {Contacts} from './Contacts/Contacts';

export const Main = () => {
    return (
        <div className={SMain.main}>
            <About/>
            <Skills/>
            <Portfolio/>
            <RemoteJob/>
            <Contacts/>
        </div>
    );
};

