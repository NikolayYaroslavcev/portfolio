import React, {useState} from 'react';
import StyleHeader from './StyleHeader.module.scss'
import {Nav} from './nav/Nav';
import { Spiral as Hamburger } from 'hamburger-react'

export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={StyleHeader.header}>
            <div className={StyleHeader.__container}>
                {isOpen &&
                    <Nav/>
                }
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
        </div>
    );
};

