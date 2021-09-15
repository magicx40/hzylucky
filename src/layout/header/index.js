import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
export default class HeaderLayout extends React.Component {
    render() {
        return (
            <div className="layout_header">
                <h1>Hzy Blog<span className="slogan" style={{fontSize: '12px', color: '#848080', marginLeft: '6px'}}>对技术要有敬畏之心, 向热衷开源事业的人们致敬！</span></h1>
                {/* <nav>
                    <Link to="/">Home</Link>
                    <Link className="dashboard" to="/dashboard">Dashboard</Link>
                </nav> */}
            </div>
        )
    }
}