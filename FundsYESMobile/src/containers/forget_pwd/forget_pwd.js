/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import ForgetPwdStyle from './forget_pwd.scss';

/* component */
import PageHeader from '../../manager/components/page_header/page_header';
import Content from './forget_pwd_content/forget_pwd_content';
import Footer from '../../manager/components/footer/footer';

class ForgetPwd extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="forget-pwd-main">
                <div>
                    <PageHeader />
                </div>
                <div className="forget-pwd-container">
                    <Content />
                </div>
                <Footer />
            </div>
        );
    }
}

export default ForgetPwd;