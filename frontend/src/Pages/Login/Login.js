import React from 'react';
import "./Login.css";
import axios from 'axios';
import helpers from "../helpers";
import Signup from '../Signup/Signup';
import biru from "../../image/biru.png"

class Login extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        loginemail: "",
        loginpassword: ""
    };
    }

    // HANDLE CHANGE IN LOGIN FORM

    handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
    [name]: value
    });
    };

    // HANDLE SUBMIT LOGIN

    handleSubmit = event => {
    event.preventDefault();

    if(this.state.loginemail.length === 0) {
        alert("email cannot be empty")
        return
    }
    else if(this.state.loginpassword.length === 0) {
        alert("password cannot be empty")
        return
    }

    const payload = {
        email: this.state.loginemail,
        password: this.state.loginpassword
    };

    axios
    .post(`${process.env.REACT_APP_API_URL}/login`, payload)
    .then(response => {
        if (response.data.token) {
        helpers.setToken(response.data.token);
        // NOTIFY VISITOR
        // console.log(response.data)
        alert(`Login success!`);
        // REDIRECT TO HOME
        this.props.history.push("/");
        } else {
        throw new Error();
        }
        window.location.href = '/#/home'
        window.location.reload();
    })
    .catch(error => {
        alert(`${error}`);
        console.log(error);
    });
};

// RENDER LOGIN FORMrender

render() {
    return (
        <div className="container login">
            <div className="login-body">
                <img className="login-image" src={biru} alt="img"/>
                <div className="login-divide">
                    <div>
                        <h1>Sign in</h1>
                        <label>Make Any Meetup Simple</label>
                        <br/>
                        <br/>
                        <div className="login-body-email">
                        <input type="email" id="loginemail" name="loginemail" className="login-email" placeholder="email" value={this.state.loginEmail} onChange={this.handleChange}/>
                        </div>
                        <div className="login-body-password">
                        <input type="password" id="loginpassword" name="loginpassword" className="login-password" placeholder="password" value={this.state.loginPassword} onChange={this.handleChange}/>
                        </div>
                        <button className="login-button" type="submit" onClick={this.handleSubmit}>Sign In</button>
                    </div>
                    <div>
                        <Signup/> 
                    </div> 
                </div>
            </div>
        </div>
        );
    }   
}

export default Login;