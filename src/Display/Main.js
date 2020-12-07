import React, { Component } from 'react';
import './Main.css';
import Main_title_img from '../img/main_title.png';
import { withRouter, Link, BrowserRouter } from 'react-router-dom';
/*
    Main Page: The most basic first page of SLPU project.

    variable:
        main_title: title of SLPU.
        main_sub: description of SLPU.
        main_btn_game: put this button and user can make their own game.
*/

class Main extends Component {
    gotomake = () =>{
        this.props.history.push('/make');
    }
    constructor(props){
        super(props);
        this.state = {
            main_title: "슬퍼 SLPU",
            main_title_img: <img
                alt="main_title_img"
                className="main_title_img"
                src={Main_title_img}
                ></img>,
            main_sub: '나만의 퍼즐을 만들어 즐거운 게임을 해보자~!',
            /*main_btn_game: */

        }
    }
    
    
    render() {
        return(
            <main className="main">
                <section className="title">
                    <h1>{this.state.main_title}</h1>
                    {this.state.main_title_img}
                </section>
                <section className="sub">
                    <h2>{this.state.main_sub}</h2>
                    <h3>{this.state.main_sub}</h3>
                    <h4>{this.state.main_sub}</h4>
                    <h5>{this.state.main_sub}</h5>
                    <h6>{this.state.main_sub}</h6>
                </section>
                {/*this.state.main_btn_game*/}
                <section>
                <BrowserRouter>
                <button onClick={this.gotomake}>외않되?</button>
                </BrowserRouter>
                </section>
                
                
                    


                    
                
                
            </main>
            
        );
    }
}

export default Main;