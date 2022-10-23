import React from 'react';
import sFormBlock from './FormBlock.module.scss';


export const FormBlock = () => {
    return (
        <div className={sFormBlock.formBlock}>
            <form className={sFormBlock.form} action="src/components/main/Main#">
                <input className={sFormBlock.input} aria-required="true" aria-invalid="false" type="text"
                       placeholder="Name *"/>
                <input className={sFormBlock.input} aria-required="true" aria-invalid="false" type="tel"
                       placeholder="Phone *"/>
                <textarea className={sFormBlock.inputTextarea} aria-required="true" aria-invalid="false"
                          placeholder="Subject *"/>
                <button type="submit" className={sFormBlock.formBlockButton}>Get in touch</button>
            </form>
        </div>
    );
};

