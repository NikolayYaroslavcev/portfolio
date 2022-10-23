import React from 'react';
import sContacts from './Contacts.module.scss';
import {FormBlock} from './FormBlock/FormBlock';


export const Contacts = () => {
    return (
        <div className={sContacts.contacts}>
            <div className={sContacts.__container}>
                <p className={sContacts.subTitle}>GET IN TOUCH</p>
                <h2 className={sContacts.title}>CONTACT DETAILS</h2>
                <div className={sContacts.contactBlock}>
                    <FormBlock/>
                </div>
            </div>
        </div>
    );
};

