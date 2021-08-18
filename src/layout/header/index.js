import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
export default class HeaderLayout extends React.Component {
    render() {
        return (
            <div className="layout_header">
                <h1>Hzy Blog</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link className="dashboard" to="/dashboard">Dashboard</Link>
                </nav>
            </div>
        )
    }
}