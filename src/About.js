import React from "react";

import './About.css';

//pictures
import photo from './img/tati.jpg';
import palace from './img/palaceWarsaw.svg';
import erasmus from './img/erasmus.svg';
import introductiontoCodingCertificate from './img/introductiontoCodingCertificate.png';
import FrontEndDevelopmentCertificate from './img/FrontEndDevelopmentCertificate.png';
import ReactDevelopmentCertificate from './img/ReactDevelopmentCertificate.png';

//icons
import ps from './img/svg/photoshop.svg';
import illustrator from './img/svg/illustrator.svg';
import indesign from './img/svg/indesign.svg';
import lightroom from './img/svg/lightroom.svg';
import linux from './img/svg/linux.svg';
import microsoft from './img/svg/microsoft.svg';
import excel from './img/svg/excel.svg';
import word from './img/svg/word.svg';
import powerpoint from './img/svg/powerpoint.svg';



export default function About(){
    return (
        <div className="About">
              <main className="container">
                   <h2>Hello World!</h2>
                    
                   <div className="clearfix">
                        <img src={photo} className="col-md-6 float-md-start mb-3 ms-md-3" alt="me" id="photoImg"/>
                        <div className="overlay">
                            <div className="myName">
                                My name is Tatiana
                                </div>
                        </div>
                        <p className="textDecription">
                            <br />
                            <br />
                            <br />
                            <br />
                            
                        I'm a front-end developer originally from Spain, currently based 
                       in Warsaw, Poland. 
                        </p>
                    </div>
                       <div className="row">
                            <div className="col">
                            <p className="text"> I studied a Senior degree of Childhood Education, and during 
                            my last study year, I decide to do Erasmus in Warsaw. Since there
                            I´m in this beautiful city.
                            <img src={erasmus} className="erasmus" alt="erasmus"/>
                            </p>
                            </div>
                            <div className="col">
                             <img src={palace} className="palace" alt="Warsaw"/>
                            </div>       
                        </div>
                    
                    
                    <p> When I was on my Erasmus I met IT students, and started to be interested
                        on this field. I decided to give a try, and started to study by my
                        own with the help of Youtube, Udemy, freeCodeCamp. As I felt it wasn´t enought
                        I enroled on SheCodes Workshops which helped me a lot.
                    </p>
                    <img src={introductiontoCodingCertificate} className="certificate" alt="certificate"/>
                    <img src={FrontEndDevelopmentCertificate} className="certificate" alt="certificate"/>
                    <img src={ReactDevelopmentCertificate} className="certificate" alt="certificate"/>
                   

                    <p> 
                        Currently I´m working for Huawei, as a Spanish Consultant and Manual Tester, and during my free
                        time I enjoy to code my own projects! 
                    </p>
                    <h4>
                    Technical skills:
                    </h4>
                    <p>
                        <i className="fab fa-github"></i> {" "}
                        <i className="fab fa-html5"></i> {" "}
                        <i className="fab fa-js"></i> {" "}
                        <i className="fab fa-css3-alt"></i> {" "}
                        <i className="fab fa-react"></i> {" "}
                        <i className="fab fa-python"></i>
                    </p>
                    <p>
                    <img src={ps} className="skillIcon" alt="ps"/> {" "}
                    <img src={illustrator} className="skillIcon" alt="illustrator"/> {" "}
                    <img src={indesign} className="skillIcon" alt="indesign"/> {" "} 
                    <img src={lightroom} className="skillIcon" alt="lightroom"/> 
                    </p>
                    <p>
                    <img src={excel} className="skillIcon" alt="excel"/> {" "}
                    <img src={word} className="skillIcon" alt="word"/> {" "}
                    <img src={powerpoint} className="skillIcon" alt="powerpoint"/> {" "} 
                    </p>
                    <p>
                    <img src={microsoft} className="skillIcon" alt="microsoft"/> {" "}
                    <img src={linux} className="skillIcon" alt="linux"/> {" "}
                    </p>
                </main>
        </div>
    );
}