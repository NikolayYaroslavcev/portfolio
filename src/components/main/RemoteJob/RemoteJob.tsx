import React from 'react';
import sRemoteJob from './RemoteJob.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';


export const RemoteJob = () => {
    return (
        <div className={sRemoteJob.remoteJob}>
            <div className={sRemoteJob.__container}>
                <h2 className={sRemoteJob.title}> Considering remote work</h2>
                <div className={sRemoteJob.btn}>
                    <div className={sRemoteJob.button}><a href="https://shtheme.com/demosd/nilswp/?page_id=91">Download
                        CV
                            <FontAwesomeIcon className={sRemoteJob.icon} icon={faArrowDown}/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

