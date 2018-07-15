/* 
 * Created by kevin in 2017/12/30
 */

/* tools */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* css */
import './home.scss';

/* component */
import Header from '../header/header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <h2>免費開戶</h2>
                        <p style={{ fontSize: "25px" }}>鉅亨買基金「好、省、超、優」!</p>
                    </div>
                    <p>透過鉅亨基金交易平台和集保結算所交易境外基金，資金多一層保障，免信託保管費，安全又便利。</p>
                    <div className="imgStart">
                        <img src={require("../../images/start.png")} />
                    </div>
                    <div>
                        <Link to='/Step0'>
                            <button className="btnStep">開始線上註冊</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;