import React, { Component } from "react";

class Login extends Component {
    state = {
        showUserLogin: true,
        showInterviewerLogin: false
    }
    buttonClicker() {
        alert("Button Clicked");
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="Username" name="uName"/>
                <input type="password" placeholder="passWord" name="pword"/>
                <button onClick={this.buttonClicker}>Login</button>
            </div>
        );
    }
}

export default Login;