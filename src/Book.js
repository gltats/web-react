import React, { Component } from 'react';
import Booklet from 'booklet-react-component';
import DJ from './img/graphics/Dj.png';
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
            index: 1,
            flipPageIndex: 1,
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
                        <div> <img src={DJ} className="dj-img" alt="Dj"/> 0 </div>,
                        <div> <img src={ToxicDream} className="toxicDream-img" alt="ToxicDream"/>1</div>,
                        <div> <img src={Bold} className="graphics-img" alt="Bold"/>2</div>,
                        <div> <img src={GirlWheelsChair} className="graphics-img" alt="GirlWheelsChair"/>3</div>,
                        <div> <img src={GirlBrown} className="graphics-img" alt="GirlBrown"/>4</div>,
                        <div> <img src={IndianSmile} className="graphics-img" alt="IndianSmile"/>5</div>,
                        <div> <img src={Libro} className="graphics-img" alt="Libro"/>6</div>,
                    ]}
                />

                <div className="button-container">
                    <button type="button" class="btn btn-secondary btn-sm" onClick={this.flipPageIndexBack}>Prev Pages</button>
                    <button type="button" class="btn btn-secondary btn-sm" onClick={this.flipPageIndexForward}>Next Pages</button>   
                </div>
            </div>
        );
    }
}

export default UsingBookletComponent;