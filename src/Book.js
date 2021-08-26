import React, { Component } from 'react';
import './Work.css';

import Booklet from 'booklet-react-component';
import Dj from './img/graphics/Dj.png';
import ToxicDream from './img/graphics/ToxicDream.png';
import Bold from './img/graphics/Bold.png';
import GirlWheelsChair from './img/graphics/GirlWheelsChair.png';
import GirlBrown from './img/graphics/GirlBrown.png';
import IndianSmile from './img/graphics/IndianSmile.png';
import Libro from './img/graphics/Libro.png';


class UsingBookletComponent extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            flipPageIndex: 0,
        };
    }
    genNextPages = () => {
        this.setState({
            index: this.state.index + 2,
        });
    };
    genPrevPages = () => {
        this.setState({
            index: this.state.index - 2,
        });
    };
    flipPageIndexForward = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex + 1,
           
        });
    };
    flipPageIndexBack = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex - 1,
          
        });
    };
    render() {
        return (
            <div>
                <h3> Graphic projects</h3>
                <Booklet
            
                    flipPageIndex={this.state.flipPageIndex}
                    index={this.state.index}
                    nextPage={this.genNextPages}
                    prevPage={this.genPrevPages}
                    pages={[
                        <div> <img src={Dj} className="dj-img" alt="Dj"/> <footer className="footer1"> 1 </footer> </div>,
                        <div> <img src={ToxicDream} className="toxicDream-img" alt="ToxicDream"/><footer className="footer2"> 2 </footer></div>,
                        <div> <img src={Bold} className="bold-img" alt="Bold"/><footer className="footer1"> 3 </footer></div>,
                        <div> <img src={GirlWheelsChair} className="girlWheelsChair-img" alt="GirlWheelsChair"/><footer className="footer2"> 4 </footer></div>,
                        <div> <img src={GirlBrown} className="girlBrown-img" alt="GirlBrown"/><footer  className="footer1"> 5 </footer></div>,
                        <div> <img src={IndianSmile} className="indianSmile-img" alt="IndianSmile"/><footer className="footer2"> 6 </footer></div>,
                        <div> <img src={Libro} className="libro-img" alt="Libro"/><footer  className="footer1"> 7 </footer></div>,
                    ]}
                />

                <div className="button-container">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={this.flipPageIndexBack}>Prev Pages</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={this.flipPageIndexForward}>Next Pages</button>   
                </div>
            </div>
        );
    }
}

export default UsingBookletComponent;