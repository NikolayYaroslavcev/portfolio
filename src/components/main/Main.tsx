import React from 'react';
import SMain from './SMain.module.scss'
import {About} from './About/About';
import {Portfolio} from './Portfolio/Portfolio';
import {RemoteJob} from './RemoteJob/RemoteJob';
import {Contacts} from './Contacts/Contacts';
import {MySkills} from './MySkills/MySkills';

export const Main = () => {
    return (
        <div className={SMain.main}>
            <About/>
            <MySkills/>
            <Portfolio/>
            <RemoteJob/>
            <Contacts/>
        </div>
    );
};

