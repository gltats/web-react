import React from "react";
import './Work.css';
import FrontEnd from './FrontEnd';
import GraphicDesign from './GraphicDesign';
import PhotoEdition from './PhotoEdition';

export default function Work(){
    return (
        <div className="Work">
                <main className="container">
                    <h1>My projects</h1>
                    <button type="button" className="btn btn-lg btn-primary">Front-end</button> 
                    <button type="button" className="btn btn-lg btn-primary">Graphic Design</button> 
                    <button type="button" className="btn btn-lg btn-primary">Photo Edition</button> 
                </main>
                <FrontEnd />
                <GraphicDesign />
                <PhotoEdition />
        </div>
    );  
}