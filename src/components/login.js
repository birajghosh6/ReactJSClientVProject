import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state= {
            grant_type: "password",
            username: "",
            password: "",
            clientId: "public",
            clientSecret: "private"
        }
    }
    
    handleChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    getAccessToken = () => {
        return JSON.parse(localStorage.getItem("user")).accessToken;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const token = Buffer
                        .from(`${this.state.clientId}:${this.state.clientSecret}`, 'utf8')
                        .toString('base64');
        const data= {
                grant_type: this.state.grant_type,
                username: this.state.username,
                password: this.state.password
        };
        const config = {
                headers: {
                    'Authorization': `Basic ${token}`
                }
        };
        axios
            .get('http:localhost:9191/oauth/token', data, config)
            .then(
                response => {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    console.log(response.data);
                }
            )
            .then(
                () => <Dashboard />
            )
            .catch(
                function(error) {
                    console.log(error);
                }
            );
        this.setState({
            username: "",
            password: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Enter Username"
                    />
                    <input
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                    />
                    <input 
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}
