import React from 'react';
import StyleFooter from './SFooter.module.scss'
import SWork from '../main/work/SWork.module.scss'

export const Footer = () => {
    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.__container}>
                <h3 className={StyleFooter.title}>NIKOLAY YAROSLAVTCEV</h3>
                <div className={StyleFooter.information}>
                    {/*<span className={StyleFooter.span}>375295553652</span>*/}
                    <a href="tel:+375295553652" className={StyleFooter.informationIcons}>
                         <span className={StyleFooter.icons}>
                        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32"
                             height="50px" width="50px" fill="white">
                        <title/>
                        <path
                            d="M21.5,3h-11A2.5,2.5,0,0,0,8,5.5v21A2.5,2.5,0,0,0,10.5,29h11A2.5,2.5,0,0,0,24,26.5V5.5A2.5,2.5,0,0,0,21.5,3ZM23,26.5A1.5,1.5,0,0,1,21.5,28h-11A1.5,1.5,0,0,1,9,26.5V5.5A1.5,1.5,0,0,1,10.5,4h11A1.5,1.5,0,0,1,23,5.5v21Z"/><path
                            d="M10,24H22V7H10V24ZM11,8H21V23H11V8Z"/>
                        <circle cx="16" cy="26" r="1"/>
                        <rect height="1" width="4" x="14" y="5" fill="white"/>
                    </svg>
                    </span>
                    </a>
                    <div className={StyleFooter.informationIcons}>
                        <span className={StyleFooter.icons}>
                        <svg height="42px" width="42px" id="svg8" version="1.1"
                             viewBox="0 0 8.4666665 8.4666669"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="white">
                            <defs id="defs2"/>
                            <g id="layer1" transform="translate(0,-288.53332)">
                                <path
                                    d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z"
                                    id="path929"
                                />
                                <path
                                    d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z"
                                    id="circle931"
                                />
                            </g>
                        </svg>
                            </span>
                    </div>
                    <a href="https://surl.li/djvkl" target="_blank" className={StyleFooter.informationIcons}>
                        <span className={StyleFooter.icons}>
                        <svg enable-background="new 0 0 183.836 179.8984" id="linkedin" version="1.1"
                             viewBox="0 0 183.836 179.8984" xmlns="http://www.w3.org/2000/svg" height="34px"
                             width="34px" fill="white">
                            <g>
                                <path
                                    d="M21.5663,0C9.0703,0,0,8.6172,0,20.488c0,11.8636,8.8907,20.4748,21.1367,20.4748c6.3516,0,11.8244-2.0584,15.828-5.9552   c3.84-3.738,5.9572-8.8944,5.9532-14.6132C42.6367,8.3868,33.8555,0,21.5663,0z M31.3867,29.2732   c-2.4804,2.4144-6.0272,3.6896-10.25,3.6896C13.4023,32.9628,8,27.834,8,20.488C8,13.0196,13.4531,8,21.5663,8   c7.9337,0,13.172,4.9392,13.3516,12.49C34.9179,23.9376,33.664,27.0564,31.3867,29.2732z"/>
                                <path
                                    d="M3.836,179.8984h35.9531V47.7208H3.836V179.8984z M11.836,55.7208h19.9531v116.1776H11.836V55.7208z"/>
                                <path
                                    d="M134.5939,47.7208c-16.672,0-26.8792,5.7536-32.7932,11.166l-1.1247-11.166H60v132.1776h39.836v-69.4708   c0-2.992,1.2107-9.2052,1.9727-10.8456c4.8124-10.3652,11.3044-10.3652,21.1364-10.3652c11.3244,0,20.8909,10.6192,20.8909,23.1876   v67.494h40v-74.6816C183.836,65.7128,158.3087,47.7208,134.5939,47.7208z M175.836,171.8984h-24v-59.494   c0-16.9064-13.2305-31.1876-28.8909-31.1876c-10.0468,0-21.4336,0-28.3944,14.998c-1.4376,3.0996-2.7147,10.5292-2.7147,14.2128   v61.4708H68V55.7208h25.4415l1.6328,16.1776h6.5544l1.172-1.8908c2.668-4.2948,11.1056-14.2868,31.7932-14.2868   c19.8632,0,41.2421,15.488,41.2421,49.496V171.8984z"/>
                            </g>
                        </svg>
                        </span>
                        {/*<span className={StyleFooter.span}>http://surl.li/djvkl</span>*/}
                    </a>
                    <a href="https://t.me/aquariumlifee" target="_blank" className={StyleFooter.informationIcons}>
                        <span className={StyleFooter.icons}>
                        <svg version="1.1" viewBox="0 0 512 512" height="40px"
                             width="70px" fill="white"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="comp_x5F_335-telegram">
                                <g>
                                    <path
                                        d="M477.805,102.98l-67.327,317.516c-5.08,22.41-18.326,27.984-37.15,17.431l-102.585-75.596l-49.497,47.607    c-5.477,5.478-10.06,10.061-20.617,10.061l7.37-104.479l190.129-171.805c8.268-7.37-1.792-11.454-12.848-4.083L150.233,287.633    l-101.19-31.672c-22.011-6.873-22.408-22.012,4.581-32.568L449.419,70.911C467.744,64.039,483.779,74.993,477.805,102.98z"/>
                                </g>
                            </g>
                            <g id="Layer_1"/>
                        </svg>
                        </span>
                        {/*<span className={StyleFooter.span}>https://t.me/aquariumlifee</span>*/}
                    </a>
                </div>
                <p className={SWork.text}>© 2022 Все права защищены</p>
            </div>
        </div>
    );
};