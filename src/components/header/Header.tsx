import React, {useState} from 'react';
import StyleHeader from './StyleHeader.module.scss'
import {Spiral as Hamburger} from 'hamburger-react'
import {Nav} from './Nav/Nav';

export const Header = () => {
    const [isOpen, setOpen] = useState(false)


    return (
        <div className={StyleHeader.header}>
            <div className={StyleHeader.__container}>
                {isOpen &&
                    <Nav/>
                }
                <Hamburger color={isOpen ? 'black' : 'white'} toggled={isOpen} toggle={setOpen}/>
            </div>
        </div>
    );
};

