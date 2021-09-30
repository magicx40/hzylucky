import React from "react";
import { Route, Redirect } from "react-router-dom";
import './index.scss'
import Articles from "../articles";
import { Switch } from "react-router-dom";
import HeaderLayout from '../../layout/header'

export default class Home extends React.Component {
    render() {
        let { match } = this.props;
        return (
            <div className="home_page">
                <HeaderLayout />
                <Switch>
                    <Route path={match.url + '/:art'} component={Articles} />
                </Switch>
            </div>
        )
    }
}