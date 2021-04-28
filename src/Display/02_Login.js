import React, { Component } from 'react';
import './02_Login.css';
import { Link } from 'react-router-dom';

/*
    Login Page: The page that users write down their nickname
                and the page send the nickname to next Make Page.

    variable:
        user_id: users's nickname
        login_title: the title of this page.
        login_input: the blank for users to write down their own nickname.
        login_btn_next: the button to go to the next course(03_Make Page).
*/

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user_id: '',
            login_title: "이름을 입력해주세요",
            login_input: <input type="user_id" name="id"></input>,
            login_btn_next: <button className="btn_next">다음</button>,
        }
    }

    changeEvent = (e) => {
        e.preventDefault(); // prevent refresh
        this.setState({user_id:e.target.id.value});    // set real user_id's value (from login_input)
        console.log(e.target.id.value);
        this.props.onSubmit(
            e.target.id.value
        );
        //test;
    }
/** 
    test(){
        fetch("/src/Dislay/make",{
            method: "post",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id:this.user_id
            })
        });
    }
**/
    render(){
        return(
            <main className="login">
                <section className="title">
                    {this.state.login_title}
                </section>
                {/* form: to convey the user's information in POST method to 03_Make Page.*/}
                <form onSubmit={this.changeEvent}>
                        <section className="input">
                            {this.state.login_input}
                        </section>
                        <section className="btn">
                            {/*<Link to="/make">{this.state.login_btn_next}</Link>*/}
                            {/*show user_id*/}
                            <Link to="/login">{this.state.login_btn_next}</Link>
                            <h1>{this.state.user_id}</h1>
                            <h1>hello</h1>
                        </section>
                </form>
            </main>
        )
    }
}

export default Login;