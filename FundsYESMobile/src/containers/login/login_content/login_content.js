/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { Link } from 'react-router';

/* css */
import LoginBannerStyle from './login_content.scss';

/* function */
import { IdentityValidation } from '../../../manager/commonjs';

const errMsg = { PwdLength: "請輸入密碼" }

class LoginContent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            IDNum: "",
            Password: "",
        }
    }

    _loginAction = () => {

        /* Two things */
        /* 1. Valid user ID number */ 
        let ivMessage = IdentityValidation(this.state.IDNum);
        if (ivMessage) {
            alert (ivMessage);
            return;
        }

        /* 2. Valid password */
        if (this.state.Password === "") {
            alert (errMsg.PwdLength);
            return;
        }

        window.location.href="/Overview";
    }
    
    render() {
        return (
            <div className="login-content-main">
                <h1>網路交易登入</h1>
                <div className="inpur-box">
                    <h3>
                        <span className="glyphicon glyphicon-user"></span>
                        身分證字號
                    </h3>
                    <div className="inpur-wrap">
                        <input onChange={e => this.setState({ IDNum: e.target.value })} />
                    </div>
                </div>
                <div className="inpur-box">
                    <h3>
                        <span className="glyphicon glyphicon-lock"></span>
                        登入密碼
                    </h3>
                    <div className="inpur-wrap">
                        <input type="password" onChange={e => this.setState({ Password: e.target.value })} />
                    </div>
                </div>
                <div className="btn btn-red" onClick={e => this._loginAction()}>登入</div>
                <div className="help-info-wrap">
                    <Link to="/Login/ForgetPwd" className="help-info">忘記密碼?</Link>|
                    <a className="help-info">新手上路 》</a>
                </div>
            </div>
        );
    }
}

export default LoginContent;