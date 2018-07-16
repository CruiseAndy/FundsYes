/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import 'babel-polyfill';

/* css */
import IntelligenceStyle from './footer.scss';

/* text content */
import TxtContent from './txt_content.json';

/* common function */
import { StringLink } from '../../commonjs';

class Footer extends Component {
    render() {
        const { txtHankbook, txtMOPSUrl, txtFundClearUrl } = TxtContent;
        const { txtCompanyInfo, txtCompanyEmailUrl, txtCompanyPhoneUrl } = TxtContent;
        const { txtInfo } = TxtContent;

        return (
            <div className="footer-main">
                <ul className="footer-list">
                {
                    txtHankbook.map((string, index) => {
                        let transString = string;

                        transString = StringLink( transString, /(公開資訊觀測站)/g, txtMOPSUrl, true );
                        transString = StringLink( transString, /(境外基金資訊觀測站)/g, txtFundClearUrl, true );
                        
                        return (
                            <div key={index}>
                                <li>{transString}</li>
                            </div>
                        );
                    })
                }
                </ul>
                <hr />
                <ul className="footer-company-info">
                {
                    txtCompanyInfo.map((string, index) => {
                        let transString = string;

                        transString = StringLink( transString, /(cs@fundsyes.com)/g, txtCompanyEmailUrl, true );
                        transString = StringLink( transString, /(\(02\)2720-8126)/g, txtCompanyPhoneUrl, true );

                        return (
                            <div key={index}>
                                <li>{transString}</li>
                            </div>
                        );
                    })
                }
                </ul>
                <div className="footer-info">
                    <p>
                        <span className="footer-gold">鉅亨網投顧獨立經營管理</span> │ 版權為鉅亨網投顧所有
                    </p>
                    <p className="footer-related">
                    {
                        Object.entries(txtInfo).map((item, index) => {
                            const title = item[0];
                            const url = item[1];
                            
                            return (
                                <a key={index} href={url} target="_blank">{title}</a>
                            );
                        })   
                    }
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;