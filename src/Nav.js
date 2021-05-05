import React from "react";

export default function Nav(){
    return (
        <div className="Nav">
             <header className="mb-auto">
                <div className="containerButton">
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <a className="nav-link active" aria-current="page" href="foo">Home</a>
                    <a className="nav-link" href="foo">About me</a>
                    <a className="nav-link" href="foo">My work</a>
                    <a className="nav-link" href="foo">Contact</a>
                </nav>
                </div>
            </header>
        </div>
    );
}