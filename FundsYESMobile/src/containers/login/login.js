/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import LoginStyle from './login.scss';

/* component */
import PageHeader from '../../manager/components/page_header/page_header';
import LoginBanner from './login_banner/login_banner';
import Content from './login_content/login_content';
import Footer from '../../manager/components/footer/footer';

class Login extends Component {
    
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="login-main">
                <div>
                    <PageHeader />
                </div>
                <div className="login-container">
                    <LoginBanner />
                    <Content />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;