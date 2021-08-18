import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div ></div>
        )
    }
}

/**
 * 后台登录简单流程梳理：
 * 用户名，密码提交-> 校验身份通过 -> 请求后台login相关接口，如果成功：将token 保存到vuex，保存到localStorage，设置请求头参数auth：token，每次请求携带token校验
 * 验证token过期时间-> 刷新token(重新走设置token的请求)
 */