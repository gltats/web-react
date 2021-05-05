import React, { useState } from "react";
import Home from './Home';

export default function Nav(){
    let [home, setHome] = useState("");



    function showHome(){
        setHome({Home})
        alert("Home")
        if (home === `Home`){
            return `Home`;
        } else {
            return null;
          }
    
    }
    
    function showAbout(){
        alert("About")
    }

    function showWork(){
        alert("Work")
    }

    function showContact(){
        alert("Contact")
    }

    return (
        <div className="Nav">
             <header className="mb-auto">
                <div className="containerButton">
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <a className="nav-link" aria-current="page" href="foo" onClick={showHome} >Home</a>
                    <a className="nav-link" href="foo" onClick={showAbout}>About me</a>
                    <a className="nav-link" href="foo" onClick={showWork}>My work</a>
                    <a className="nav-link" href="foo" onClick={showContact}>Contact</a>
                </nav>
                </div>
            </header>
        </div>
    );
}