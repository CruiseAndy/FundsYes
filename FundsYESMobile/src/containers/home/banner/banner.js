/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { Link } from 'react-router';

/* css */
import BannerStyle from './banner.scss';

/* component */
import { IMGPATH_BANNER3 } from '../../../manager/image';

class Banner extends Component {
    
    render() {
        return (
            <div className="banner-main">
                <div className="image-main">
                    <img src={IMGPATH_BANNER3} />
                    <div className="carousel-caption">
                        <h3>
                            <p>鉅亨My基金<br />省錢又放心</p>
                        </h3>
                        <p>
                            <a className="btn btn-red" href='https://www.fundsyes.com/mobile/OpenAcc/Index.aspx'>立即開戶</a>
                        </p>
                        <p>
                            <Link to="/Login" className="btn btn-light">登入</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;