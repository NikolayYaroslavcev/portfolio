import React from 'react';
import StyleHeader from "./StyleHeader.module.css"
import {Nav} from "./nav/Nav";

export const Header = () => {
    return (
        <div className={StyleHeader.header}>
            <div className={StyleHeader.__container}>
                <Nav/>
            </div>
        </div>
    );
};

