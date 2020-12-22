import React, { Component } from 'react';
import './00_Main.css';
import Main_title_img from '../img/main_title.png';
import { Link } from 'react-router-dom';

/*
    Main Page: The most basic first page of SLPU project.

    variable:
        main_title: the title of SLPU.
        main_sub: description of SLPU.
        main_btn_game: put this button and user can make their own game.

        user_id: identification of user.
        user_state: if you make a game, this is 0(constructor).
                    if you play a game, this is 1(friend).
*/

class Main extends Component {
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
            main_btn_game: <button className="btn_game">go game!</button>,
            //user_id:
            user_state:0    // 0: constructor, 1: friend

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
                <section className="btn">
                    {
                        {   //0: constructor, 1: friend
                            0 : <Link to="/login">{this.state.main_btn_game}</Link>,
                            1 : <Link to="/start">{this.state.main_btn_game}</Link>
                        }[this.state.user_state]    
                    }
                </section>

                
                
                    


                    
                
                
            </main>
            
        );
    }
}

export default Main;