import React, { Component } from 'react';
import './02_Login.css';
import { Link } from 'react-router-dom';

/*
    Login Page: The page that users write down their nickname
                and that developers 
*/

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user_id: 'hihi',
            login_title: "이름을 입력해주세요",
            login_input: <input type="user_id" name="id"

                ></input>,
            login_btn_next: <button className="btn_next">다음</button>,



        }
    }

    render(){
        return(
            <main className="login">
                <section className="title">
                    {this.state.login_title}
                </section>

                <form action="/login" method="post" onSubmit={function(e){
                        e.preventDefault();
                        this.setState({user_id:e.target.id.value})
                        console.log(e.target.id.value)
                        
                        
                    }.bind(this)}
                    >
                        <section className="input">
                {this.state.login_input}
                </section>
                <section className="btn">
                    {/*<Link to="/make">{this.state.login_btn_next}</Link>*/}
                   
                    {this.state.login_btn_next}
                    <h1>{this.state.user_id}</h1>
                </section>


                    </form>
                
            </main>
        )
    }
}

export default Login;