/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { Link } from 'react-router';
import validator from 'email-validator';

/* css */
import ForgetPwdStyle from './forget_pwd_content.scss';

/* function */
import { IdentityValidation } from '../../../manager/commonjs';

/* function component */
const selectList = (initial, start, end) => {
    let elementList = initial==="" ? [] : [<option key={0}>{initial}</option>];
    
    for (let i = start; i <= end; i++) {
        elementList.push(<option key={i}>{i}</option>)
    }
    return elementList;
}

const txtSelectFirstItem = "請選擇";
const errMag =
{
    EmailIllegal: "信箱格式不合法，請再次確認e-mail信箱",
    BirthNull: "請選擇出生年月日"
}

class ForgetPwdContent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            IDNum: "",
            eMail: "",
            birthYear: "",
            birthMonth: "",
            birthDay: "",
        }
    }

    _sendData = () => {
        /* Three things */
        /* 1. Valid user ID number */ 
        let ivMessage = IdentityValidation(this.state.IDNum);
        if (ivMessage) {
            alert (ivMessage);
            return;
        }
        
        /* 2. Valid Birth */
        if ( this.state.birthYear === "" || isNaN(this.state.birthYear) ||
                this.state.birthMonth === "" || isNaN(this.state.birthMonth) ||
                this.state.birthDay === "" || isNaN(this.state.birthDay) ) {
            alert (errMag.BirthNull);
            return;
        }
        
        /* 3. Valid password */
        if (!validator.validate(this.state.eMail)) {
            alert (errMag.EmailIllegal);
            return;
        }
        
        window.location.href="#/Login";
    }
    
    render() {
        return (
            <div className="forget-pwd-content-main">
                <h1>忘記密碼</h1>
                <p>請提供以下資訊，在確認您的資料後，我們將發送郵件至您的 Email 信箱。請您按步驟操作、重新設定密碼。</p>
                <div className="input-box">
                    <h3>
                        <span className="glyphicon glyphicon-user"></span>身分證字號
                    </h3>
                </div>
                <div className="input-wrap">
                    <input type="text" onChange={e => this.setState({ IDNum: e.target.value })} />
                </div>
                <div className="input-box">
                    <h3>
                        <span className="glyphicon glyphicon-calendar"></span>出生年月日
                    </h3>
                    <div className="input-wrap">
                        <select onChange={e => this.setState({ birthYear: e.target.value})}>
                            {selectList(txtSelectFirstItem, 1991, (new Date()).getFullYear() - 1)}</select>
                        <span>年</span>
                    </div>
                    <div className="input-wrap">
                        <select onChange={e => this.setState({ birthMonth: e.target.value})}>
                            {selectList(txtSelectFirstItem, 1, 12)}</select>
                        <span>月</span>
                    </div>
                    <div className="input-wrap">
                        <select onChange={e => this.setState({ birthDay: e.target.value})}>
                            {selectList(txtSelectFirstItem, 1, 31)}</select>
                        <span>日</span>
                    </div>
                </div>
                {<div className="clear-fix"></div>}
                <div className="input-box">
                    <h3>
                        <span className="glyphicon glyphicon-envelope"></span>Email 信箱
                    </h3>
                    <div className="input-wrap">
                        <input type="text" onChange={e => this.setState({ eMail: e.target.value })} />
                    </div>
                    <span>※ 提醒您：需與原留信箱相符</span>
                </div>
                <div className="btn-wrap">
                    <Link to="/Login" className="btn btn-gray">返  回</Link>
                    <a className="btn btn-red" onClick={e => this._sendData()}>確認送出</a>
                </div>
            </div>
        );
    }
}

export default ForgetPwdContent;