/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import AnnotationStyle from './annotation.scss';

/* image */
import { IMGPATH_BG1, IMGPATH_RSPMobile } from '../../../manager/image';

class Annotation extends Component {
    render() {
        return (
            <div className="annotation-main">
                <div className="imgRSP-wrap">
                    <a href='https://www.fundsyes.com/launch/2017RSP/index.html'>
                        <img src={IMGPATH_RSPMobile} className="img-responsive" />
                    </a>
                </div>
                <div className="row annotation-wrap">
                    <h4>
                        <center>
                            <p>推薦基金</p>
                        </center>
                    </h4>
                    <div className="col-xs-8">
                        <p>
                            <b>張榮仁</b><br/>
                            <b>鉅亨網投顧 策略長</b><br/>
                            2017即將進入尾聲，股市幾乎漲了一整年。走在山稜上，得要注意腳步是否穩健，才能攀越一座又一座的高峰...
                            <a href='https://www.fundsyes.com/ArticleInfo/365419f0-b66e-4069-b45e-9cbb1390691c'>看更多</a>
                        </p>
                    </div>
                    <div className="col-xs-4">
                        <img src={IMGPATH_BG1} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Annotation;