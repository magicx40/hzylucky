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
                <p className="beian">
                    <a href="https://beian.miit.gov.cn/#/Integrated/index">京ICP备2021008749号-1</a>
                </p>
            </div>
        )
    }
}