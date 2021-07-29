import React from "react";
import './Contact.css';

export default function Contact(){
    return (
        <div className="Contact">
              <main className="container">
                    <h1>Contact:</h1>
                        <p>
                            <a href="mailto:tatianasofiagomes831@gmail.com" title="My email address"
                            >tatianasofiagomes831@gmail.com</a>
                        <br />
                        <a href="tel:+48787879996">+48 787879996</a>
                         </p>
                    <h3>Or search me on:</h3>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/gl.tats/?hl=es">
                        <i className="fab fa-instagram-square"></i>
                        </a>
                    <a className="social-link" target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/tatiana-gomes-lima-1a952117a">
                        <i className="fab fa-linkedin"></i>
                        </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://github.com/gltats">
                        <i className="fab fa-github-square"></i>
                        </a>
        
                    
                </main>
        </div>
    );
}