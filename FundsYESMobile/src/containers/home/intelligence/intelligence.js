/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import IntelligenceStyle from './intelligence.scss';

/* image */
import { IMGPATH_ICON2 } from '../../../manager/image';

class Intelligence extends Component {
    render() {
        return (
            <div className="intelligence-main">
                <h4>
                    <center><p>情報與建議</p></center>
                </h4>
                <div>
                {
                    this.props.InvestRecommData.map((blockData) => {
                        const { Title, PostDate, Context, URL } = blockData;

                        return (
                            <div key={Title} className="news-wrap">
                                <div className="icon-title">
                                    <img src={IMGPATH_ICON2} />
                                    <span>{Title}</span>
                                </div>
                                <p>{PostDate}</p>
                                <p>{Context}</p>
                                <p className="bg-btn-light">
                                    <a href='https://www.fundsyes.com/ArticleInfo/undefined' className="btn btn-light">看更多</a>
                                </p>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Intelligence;