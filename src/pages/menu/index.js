import { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderLayout from '../../layout/header'
import './index.scss'

export default class Menu extends Component {
    render() {
        return (
            <div className='menu_page'>
                <HeaderLayout />
                <div className={'article_ls'}>
                    <p className="menu_title">导航列表</p>
                    <ul>
                        <li><NavLink to="/home/art1">过秦论</NavLink></li>
                        <li><NavLink to="/home/art2">出师表</NavLink></li>
                        <li><NavLink to="/home/art3">滕王阁序</NavLink></li>
                        <li><NavLink to="/home/gettysburg_address">葛底斯堡演说</NavLink></li>
                        <li><NavLink to="/home/pericles_funeral_oration">伯里克利的葬礼演说</NavLink></li>
                        <li><NavLink to="/home/shiji">史记</NavLink></li>
                    </ul>
                    <p className="beian">
                        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备2021008749号-1</a>
                    </p>
                </div>
            </div>
        )
    }
}