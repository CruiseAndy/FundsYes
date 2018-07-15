/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { Link } from 'react-router';

/* css */
import FundsInfoStyle from './funds_info.scss';

const starIcon = (amount) => {
    let starElement = [];
    for (let i = 0; i < amount; i++) {
        starElement.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    return starElement;
}

class FundsInfo extends Component {
    render() {
        const RatioTime = ["3月", "6月", "1年", "2年", "3年", "成立至今"];
        const FundReportUrl = "https://www.fundsyes.com/Fund/InfoReport.aspx?code=";

        return (
            <div className="fundsinfo-main">
            {
                this.props.FundRecommData.map((blockData) => {
                    const { Title, FundName, Warning,  FundID, StarRating, Return3Month, Return6Month, Return1Year,
                            AccReturn2Year, AccReturn3Year, AccReturnInception, Tags, LastUpdate } = blockData;
                    const ratio = [ Return3Month, Return6Month, Return1Year, AccReturn2Year, AccReturn3Year, AccReturnInception ]
                    
                    return (
                        <div key={FundName} className="product-wrap">
                            <div>
                                <h2>{Title}</h2>
                                <div className="top">
                                    <div className="funds-name">
                                        {
                                            Warning === ""
                                                ? <a  href={FundReportUrl + FundID}>{FundName}</a>
                                                : <a  href={FundReportUrl + FundID}>{FundName + "(" + Warning + ")"}</a>
                                        }
                                        <p>晨星評等
                                            <span className="rate-star">
                                            {starIcon(StarRating)}
                                            </span>
                                        </p>
                                    </div>
                                    <Link to="/login" className="btn btn-red">立即購買</Link>
                                </div>
                                <div className="scroll-tab-wrap">
                                {
                                    ratio.map((value, index) => {
                                        return (
                                            <div key={index} className="imcome-rate-wrap">
                                                <div className="time">{RatioTime[index]}</div>
                                                <div className="ROI">{value}</div>
                                            </div>
                                        );
                                    })
                                }
                                </div>
                                <div className="bottom">
                                {
                                    Tags.map((data) => {
                                        const { TagName, URL } = data;
                                        return (
                                            <a key={TagName} type="button" className="btn btn-tag" href={URL}>{TagName}</a>
                                        )
                                    })
                                }
                                <p className="comment">資料來源：晨星，由鉅亨網提供，基金績效截至{LastUpdate}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        );
    }
}

export default FundsInfo;