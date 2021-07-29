import React from "react";

//pictures
import WeatherAppJs from './img/WeatherAppJs.PNG';
import WeatherAppReact from './img/WeatherAppReact.PNG';
import DictionaryApp from './img/DictionaryApp.PNG';

export default function FrontEnd(){
    return (
        <div className="FrontEnd">
         <h3> Front-end projects</h3>

         <a className="app-link" target="_blank" rel="noreferrer"  href="https://adoring-banach-6d2bc7.netlify.app">
         <img src={WeatherAppJs} className="app-img" alt="appLink"/>
            </a>

            <a className="app-link" target="_blank" rel="noreferrer"  href="https://adoring-banach-6d2bc7.netlify.app">
         <img src={WeatherAppReact} className="app-img" alt="appLink"/>
            </a>

            <a className="app-link" target="_blank" rel="noreferrer"  href="https://adoring-banach-6d2bc7.netlify.app">
         <img src={DictionaryApp} className="app-img" alt="appLink"/>
            </a>
        
        
        </div>
    );  
}