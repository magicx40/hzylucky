import React from 'react'
import Home from './pages/home'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import DashBoard from './pages/dashboard'

export default class App extends React.Component {
    render() {
        return (
            <div className="app_container">
                <div className="home_container">
                    <div className="container_main">
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Route path="/home" component={Home} />
                            {/* <Route exact path="/dashboard" component={DashBoard} /> */}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}