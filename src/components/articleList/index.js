import React from "react";
import { NavLink } from "react-router-dom";
import './index.scss'

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenBtnShow: true
        }
    }

    handleClick = (e) => {
        this.setState((state, props) => ({
            hiddenBtnShow: !state.hiddenBtnShow
        }))
    }

    render() {
        let { hiddenBtnShow } = this.state;
        return (
            <div className={['article_ls', hiddenBtnShow ? 'hidden' : null].join(' ')}>
                <ul>
                    <li><NavLink to="/home/art1">过秦论</NavLink></li>
                </ul>
                <div className="hidden_btn iconfont icon-hzhedie" onClick={this.handleClick}></div>
            </div>
        )
    }
}