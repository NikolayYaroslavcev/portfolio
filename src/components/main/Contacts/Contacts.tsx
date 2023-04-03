import React from 'react';
import sContacts from './Contacts.module.scss';
import {FormBlock} from './FormBlock/FormBlock';
import {motion} from 'framer-motion'
import {textAnimation} from "../MySkills/MySkills";





export const Contacts = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount:0.3, once:true}}
            id='contact' className={sContacts.contacts}>
            <div className={sContacts.__container}>
                <motion.p custom={1} variants={textAnimation} className={sContacts.subTitle}>GET IN TOUCH</motion.p>
                <motion.h2 custom={2} variants={textAnimation} className={sContacts.title}>CONTACT DETAILS</motion.h2>
                <motion.div custom={3} variants={textAnimation} className={sContacts.contactBlock}>
                    <FormBlock/>
                </motion.div>
            </div>
        </motion.section>
    );
};

