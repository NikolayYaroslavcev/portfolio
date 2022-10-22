import React from 'react';
import SMain from '../SMain.module.scss';
import ava from '../img/ava.jpg';

export const About = () => {
    return (
        <div className={SMain.about}>
            <div className={SMain.__container}>
                <div className={SMain.aboutAs}>
                    <div className={SMain.imageIbg}>
                        <img src={ava} alt="#"/>
                    </div>
                    <div className={SMain.content}>
                        <h1 className={SMain.title}>
                            NIKOLAY YAROSLAVTCEV
                        </h1>
                        <p className={SMain.text}>
                            FRONT-END DEVELOPER (REACT DEVELOPER)
                        </p>
                        <p className={SMain.about}>
                            Hi, I’m Nikolay Yaroslavtcev and I am creative Front-end developer who dream making the
                            world better place by creating captivating products.
                        </p>
                        <div className={SMain.btnLink}><a href="#">Download
                            CV <i className={SMain.tiDownload}>
                                <svg enable-background="new 0 0 141.732 141.732" height="13px" id="Livello_1"
                                     fill="white"
                                     version="1.1" viewBox="0 0 141.732 141.732" width="13px"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Livello_32">
                                        <path
                                            d="M120.674,125.138H20.793v16.594h99.881V125.138z M119.019,58.776c-2.561-2.562-6.716-2.562-9.275,0L77.21,91.312V6.562   C77.21,2.936,74.269,0,70.648,0c-3.624,0-6.56,2.937-6.56,6.563v84.75L31.992,59.218c-2.562-2.564-6.715-2.564-9.277,0   c-2.565,2.562-2.565,6.716,0,9.279l43.294,43.293c0.15,0.154,0.314,0.299,0.481,0.438c0.076,0.062,0.155,0.113,0.234,0.176   c0.094,0.065,0.186,0.142,0.279,0.206c0.097,0.063,0.192,0.114,0.286,0.174c0.088,0.054,0.174,0.105,0.265,0.153   c0.1,0.056,0.199,0.1,0.298,0.147c0.097,0.045,0.19,0.091,0.283,0.132c0.098,0.04,0.196,0.072,0.295,0.105   c0.104,0.038,0.207,0.078,0.312,0.109c0.101,0.03,0.197,0.052,0.297,0.077c0.108,0.023,0.214,0.058,0.324,0.078   c0.115,0.021,0.231,0.033,0.346,0.054c0.097,0.015,0.192,0.032,0.289,0.042c0.43,0.042,0.865,0.042,1.295,0   c0.1-0.01,0.191-0.027,0.289-0.042c0.114-0.021,0.233-0.029,0.344-0.054c0.109-0.021,0.217-0.055,0.324-0.078   c0.102-0.025,0.199-0.047,0.299-0.077c0.105-0.031,0.207-0.071,0.312-0.109c0.102-0.03,0.195-0.062,0.295-0.105   c0.096-0.041,0.191-0.087,0.283-0.132c0.1-0.048,0.199-0.092,0.297-0.147c0.091-0.048,0.177-0.104,0.264-0.153   c0.098-0.06,0.193-0.11,0.287-0.174c0.096-0.064,0.189-0.141,0.281-0.206c0.076-0.062,0.156-0.113,0.233-0.176   c0.249-0.204,0.479-0.437,0.694-0.67c0.076-0.067,0.154-0.131,0.229-0.203l43.294-43.296   C121.581,65.491,121.581,61.337,119.019,58.776"/>
                                    </g>
                                    <g id="Livello_1_1_"/>
                                </svg>
                            </i>
                        </a> <span className={SMain.btnBlock}></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

