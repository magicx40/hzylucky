import React from 'react'
import Home from './pages/home'
import Menu from './pages/menu'
import Error from './pages/error'
import { withRouter } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'

class App extends React.Component {
    render() {
        return (
            <div className="app_container">
                <div className="home_container">
                    <div className="container_main">
                        <Switch>
                            <Redirect exact from="/" to="/menu" />
                            <Route path="/home" component={Home} />
                            <Route path="/menu" component={Menu} />
                            <Route path="*" component={Error}/>
                        </Switch>
                    </div>
                </div>
                <div className="hoverball" onClick={() => this.props.history.push('/menu')}>
                    <span className className="iconfont icon-hcaidan"></span>
                </div>
            </div>
        )
    }
}

export default withRouter(App);