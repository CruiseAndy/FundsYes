/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import FAQStyle from './FAQ.scss';

class FAQ extends Component {
    render() {
        return (
            <div className="FAQ-main">
                <h5>
                    <p>若有疑問請見「FAQ常見問題」，</p>
                    <p>若仍無法解決、請點擊「聯絡我們」留言。</p>
                </h5>
                <div className="btn-wrap">
                    <p><a className="btn btn-red" href='https://www.fundsyes.com/Service/FAQ.aspx'>FAQ 常見問題</a></p>
                    <p><a className="btn btn-light" href='https://www.fundsyes.com/Service/Contact.aspx'>聯絡我們</a></p>
                </div>
            </div>
        );
    }
}

export default FAQ;