import React from "react";
import { Route, Redirect } from "react-router-dom";
import './index.scss'
import Articles from "../articles";
import { Switch } from "react-router-dom";
import HeaderLayout from '../../layout/header'
import ArticleList from '../../components/articleList/index'
import { Counter } from '../../components/Counter'
export default class Home extends React.Component {
    render() {
        let { match } = this.props;
        return (
            <div className="home_page">
                <HeaderLayout />
                <ArticleList />
                <Switch>
                    <Redirect exact from="/home" to="/home/pericles_funeral_oration" />
                    <Route path={match.url + '/:art'} component={Articles} />
                    {/* <Route path={match.url + '/art1'} component={Article1} /> */}
                    {/* <Route path={match.url + '/art2'} component={Article2} /> */}
                </Switch>
                {/* <Counter />  */}
            </div>
        )
    }
}