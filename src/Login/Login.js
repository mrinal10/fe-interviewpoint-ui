import React, { Component } from "react";

class Login extends Component {
    render(){
        return (
            <div>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="passWord"/>
                <button>Login</button>
            </div>
        );
    }
}

export default Login;