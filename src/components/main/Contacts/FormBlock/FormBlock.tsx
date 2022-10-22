import React from 'react';
import SMain from '../../SMain.module.scss';


export const FormBlock = () => {
    return (
        <div className={SMain.formBlock}>
            <form className={SMain.form} action="src/components/main/Main#">
                <input className={SMain.input} aria-required="true" aria-invalid="false" type="text"
                       placeholder="Name *"/>
                <input className={SMain.input} aria-required="true" aria-invalid="false" type="tel"
                       placeholder="Phone *"/>
                <textarea className={SMain.inputTextarea} aria-required="true" aria-invalid="false"
                          placeholder="Subject *"/>
                <button type="submit" className={SMain.formBlockButton}>Get in touch</button>
            </form>
        </div>
    );
};

