import { Component } from "react"
import HeaderLayout from '../layout/header'
import './error.scss'

function Error(props) {
    return (<div className="error_page">
        <HeaderLayout />
        <div className="error_bg">
            <img src={require("../assets/img/404.png").default} alt="404" />
        </div>
    </div>)
}

export default Error;