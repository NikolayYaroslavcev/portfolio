import React from 'react';
import sRemoteJob from './RemoteJob.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';
// @ts-ignore
import NikolayYaroslavcev from "../../file/NikolayYaroslavcev.pdf";


export const RemoteJob = () => {
    return (
        <div className={sRemoteJob.remoteJob}>
            <div className={sRemoteJob.__container}>
                <h2 className={sRemoteJob.title}> Considering remote work</h2>
                <div className={sRemoteJob.btn}>
                    <a href={NikolayYaroslavcev} download title="Download CV"> <FontAwesomeIcon className={sRemoteJob.icon} icon={faArrowDown}/> Download CV</a>
                </div>
            </div>
        </div>
    );
};

