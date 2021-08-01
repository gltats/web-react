import React from "react";

//pictures
import WeatherAppJs from './img/WeatherAppJs.PNG';
import WeatherAppReact from './img/WeatherAppReact.PNG';
import DictionaryApp from './img/DictionaryApp.PNG';
import SimpleWebPage from './img/SimpleWebPage.PNG';

export default function FrontEnd(){
    return (
        <div className="FrontEnd">
         <h3> Front-end projects</h3>    
            <div className="container2">
            <a className="app-link" target="_blank" rel="noreferrer"  href="https://adoring-banach-6d2bc7.netlify.app">
         <img src={WeatherAppJs} className="app-img" alt="appLink"/>
            </a>
                <div class="middle">
                <div class="text2">Weather App, with JS</div>
                </div>
            </div>

            <div class="container2">
            <a className="app-link" target="_blank" rel="noreferrer"  href="https://adoring-banach-6d2bc7.netlify.app">
         <img src={WeatherAppReact} className="app-img" alt="appLink"/>
            </a>
                <div class="middle">
                <div class="text2">Weather App, with React</div>
                </div>
            </div>

            <div class="container2">
            <a className="app-link" target="_blank" rel="noreferrer"  href="https://adoring-banach-6d2bc7.netlify.app">
         <img src={DictionaryApp} className="app-img" alt="appLink"/>
            </a>
                <div class="middle">
                <div class="text2">Dictionary App, with React</div>
                </div>
            </div>

            <div class="container2">
            <a className="app-link" target="_blank" rel="noreferrer"  href="https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/000/148/195/original/Project.html?1604934075">
         <img src={SimpleWebPage} className="app-img" alt="appLink"/>
            </a>
                <div class="middle">
                <div class="text2">Basic web page (HTML, CSS, JS) </div>
                </div>
            </div>

        </div>
    );  
}