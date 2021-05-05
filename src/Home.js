import React from "react";
import photo from './tati.jpg';

export default function Home(){
    return (
        <div className="Home">
                <main className="container">
                    <h1>Tatiana Sofía Gomes</h1>
                    <p className="lead">Front-end developer based in Warsaw</p>
                    <p className="lead"></p>
                    <img src={photo} className="photoImg" alt="me"/>
                </main>
        </div>
    );
}