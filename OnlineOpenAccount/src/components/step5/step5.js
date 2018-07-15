/* 
 * Created by kevin in 2018/01/16
 */

/* tools */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

/* css */
import './step5.scss';

/* component */
import Header from '../header/header';


class Step5 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <img src={require("../../images/step5.png")} />
                    </div>
                    <div className="Common-TitleBox">
                        <h2>會員e-mail認證</h2>
                    </div>
                    <div className="Common-RowBox">
                        <p>系統已發出一封認證通知，請至您的信箱：</p>
                        <p style={{ color: "#358F7F", fontSize: "25px" }}>kevin@email.com</p>
                        <p>檢視郵件並依指示點選確認完成認證程序。 也請檢視信件是否被誤判而移至廣告或是垃圾信的區域，並將我們設為信任清單。</p>
                        <br />
                        <br />
                        <p>若需要任何協助</p>
                        <p>請於上班時間:週一至週五09:00-17:30電洽</p>
                    </div>
                    <div className="Common-RowBox">
                        <div style={{ textAlign: "center", margin: "30px 0" }}>
                            <a href="tel:02-27208126">
                                <img src={require("../../images/phone.png")} />
                            </a>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <p style={{ textAlign: "center" }}>若遲未收到認證信件，請點選按鈕</p>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className="btnStep5Place"
                            // onClick={ () => browserHistory.push('/Step1') }
                        >重發認證信
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step5;