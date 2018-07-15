/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { Link } from 'react-router';

/* css */
import LoginBannerStyle from './login_banner.scss';

/* component */
import { IMGPATH_KV } from '../../../manager/image';

class LoginBanner extends Component {
    render() {
        return (
            <div className="login-banner-main">
                <Link to="/" className="return-login">
                    <img src={IMGPATH_KV} />
                </Link>
            </div>
        );
    }
}

export default LoginBanner;