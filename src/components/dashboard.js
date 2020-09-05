import React, { Component } from 'react'
import Login from './login'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <header>
                    <h3>You have been logged in</h3>
                </header>
                <body>
                    <code>
                        Access Token: {Login.getAccessToken()}
                    </code>
                </body>
            </div>
        )
    }
}
