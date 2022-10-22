import React from 'react';
import SMain from '../SMain.module.scss';
import {FormBlock} from './FormBlock/FormBlock';

export const Contacts = () => {
    return (
        <div className={SMain.contacts}>
            <div className={SMain.__container}>
                <p className={SMain.subTitle}>GET IN TOUCH</p>
                <h2 className={SMain.title}>Contact Details</h2>
                <div className={SMain.contactBlock}>
                    <FormBlock/>
                </div>

            </div>
        </div>
    );
};

