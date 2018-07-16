/* 
 * Created by kevin in 2018/03/13
 */

/* tools */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'babel-polyfill';

/* css */
import HomeStyle from './home.scss';

/* data */
import FundsList from '../FundsList.json';

/* component */
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import Bookmark from '../../components/bookmark/bookmark';
import { relative } from 'path';

const activityOpenAccountUrl = "https://www.fundsyes.com/Account/open_notice.aspx?P=F8888";

const ActivitySpec = props => {
    return (
        <div>
            <span className="point">・</span>
            <div>
                <span>{props.title}</span>
            </div>
            <p>{props.desc}</p>
        </div>
    );
}

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            BehaviorImgIndex: 0
        }
    }
    componentDidMount() {
        // Decode entities in the URL
        // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
                const hash = hashParts.slice(-1)[0];
                document.querySelector(`#${hash}`).scrollIntoView();
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    }

    render() {
        return (
            <div id="WebTop">
                <div className="mobile-mode logo">
                    <a href={activityOpenAccountUrl} target="_blank">
                        <img src={require("../../images/Logo.png")} />
                    </a>
                </div>
                <Banner
                    webImgName={"TopBanner1.jpg"}
                    mobileImgName={"TopBanner2.jpg"}
                    imgLink={activityOpenAccountUrl}
                    openTab={true}
                >
                    <div className="activity-title">
                        <div className="web-mode"><h1>鉅亨力挺金融人 開戶3分鐘</h1></div>
                        <div className="mobile-mode">
                            <h1>鉅亨力挺金融人</h1>
                            <h1>指尖3分鐘開戶</h1>
                        </div>
                        <h1 style={{textAlign: "center"}}>單筆手續費 <span>0</span> 元起</h1>
                        <h2 style={{textAlign: "center"}}>終身買基金享 <span>0.2%</span>手續費</h2>
                        <h2 style={{textAlign: "center"}}><span>0</span> 信託管理費</h2>
                    </div>
                </Banner>

                <div className="section1">
                    <div style={{ display: "inline-block" }}>
                        <a href="#NotMember">
                            <h1>我尚未開戶</h1>
                            <img src={require("../../images/NewUser.png")} />
                        </a>
                        <div className="not-member-activity">
                            <div>
                                <span>
                                    <span>・</span>線上開戶輸入活動代碼F8888，基金申購享終身 0.2% 手續費，不限申購方式（小額扣除外）不限日期。<br/>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <span>・</span>於2018/12/31前完成線上開戶並核印完成，贈送單筆0手續費乙次。（單筆0手續費使用期間為線上開戶並核印完成後次月10日至2018/12/31）。
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <a href="#Member">
                            <h1>我已經開戶</h1>
                            <img src={require("../../images/OldUser.png")} />
                        </a>
                        <div className="member-activity">
                            <span><span>・</span>推薦一位金融同業，每推薦一位新戶，雙方皆享單筆0手續費乙次（單筆0手續費使用期間為線上開戶並核印完成後次月10日至2018/12/31）。</span>
                        </div>
                    </div>
                </div>
                <img src={require("../../images/BG1.png")} style={{ width: "100%" }} />

                <div id="NotMember" className="section2">
                    <div className="user-image">
                        <img src={require("../../images/User1.png")} />
                    </div>
                    <div className="user-text">
                        <h1>我尚未開戶</h1>
                        <h2><img className="img-check" src={require("../../images/Check.png")} />點擊「馬上開戶」</h2>
                        <h2><img className="img-check" src={require("../../images/Check.png")} />於活動代碼欄位輸入F8888</h2>
                        <h2><img className="img-check" src={require("../../images/Check.png")} />於開戶時填寫現職公司聯絡電話或在開戶文件寄回時附上個人名片或員工識別證影本一張</h2>
                        <h2 className="btn-openaccount"><a href={activityOpenAccountUrl} target="_blank">馬上開戶</a></h2>
                    </div>
                </div>
                <div id = "Member" className="section2">
                    <div className="web-mode">
                        <div className="user-text2">
                            <h1>我已經開戶</h1>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />本身為金融業<br/>來信 cs@fundsyes.com 或來電 02-27208126 告知您推薦的新戶姓名、身分證字號</h2>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />附上您的聯絡資訊或金融業名片（影本可）</h2>
                            <h2 className="btn-openaccount"><a href="mailto:cs@fundsyes.com" target="_blank">聯繫我們</a></h2>
                        </div>
                        <div className="user-image" style={{ width: "50%", textAlign: "center" }}>
                            <img src={require("../../images/User2.png")} />
                        </div>
                    </div>
                    <div className="mobile-mode">
                        <div className="user-image">
                            <img src={require("../../images/User2.png")} />
                        </div>
                        <div className="user-text">
                            <h1>我已經開戶</h1>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />本身為金融業，來信 cs@fundsyes.com 或來電 02-27208126 告知您推薦的新戶姓名、身分證字號</h2>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />檢附您的金融業名片一張（影本可）</h2>
                            <h2 className="btn-openaccount"><a href="mailto:cs@fundsyes.com" target="_blank">聯繫我們</a></h2>
                        </div>
                    </div>
                </div>

                <div className="section3">
                    <h1>申購範圍</h1>
                    <h2>全平台基金終身適用，包含...</h2>
                    <div>
                        <a className="consum-behavior" href={activityOpenAccountUrl} target="_blank">
                            <div>
                                <h2>單筆<br />申購</h2>
                            </div>
                        </a>
                        <a className="consum-behavior" href={activityOpenAccountUrl} target="_blank">
                            <div>
                                <h2>天天選<br />月月扣</h2>
                            </div>
                        </a>
                        <a className="consum-behavior" href={activityOpenAccountUrl} target="_blank">
                            <div>
                                <h2>定期<br />定額</h2>
                            </div>
                        </a>
                    </div>
                    <div style={{ clear: "both" }}>
                        <img
                            src={require("../../images/BehaviorImage1.png")}
                            style={{ margin: "0 0 40px 0" }}
                        />
                    </div>
                </div>
                <div className="logo">
                    <a href={activityOpenAccountUrl} target="_blank">
                        <img src={require("../../images/Logo.png")} />
                    </a>
                </div>

                <div className="section4">
                    <ActivitySpec
                        title="活動期間"
                        desc="即日起至2018年12月31日止。"
                    />
                    <div>
                        <span className="point">・</span>
                        <div>
                            <span>適用費率</span>
                        </div>
                        <p>不限交易筆數、申購方式（精省小額扣除外），均享有終身0.２%申購手續費率優惠。2018/12/31前完成線上開戶並核印完成，贈送單筆0手續費乙次。</p>
                        <p>(單筆0手續費使用期間為線上開戶並核印完成後次月10日至2018/12/31)</p>
                    </div>
                    <ActivitySpec
                        title="適用基金"
                        desc="全平台基金適用。"
                    />
                    <ActivitySpec
                        title="適用對象"
                        desc="金融業（銀行、投信、投顧、證券、期貨、保險、信合社、農漁會、郵局）及周邊行業。"
                    />
                    <div>
                        <span className="point">・</span>
                        <div>
                            <span>注意事項</span>
                        </div>
                        <p className="notice">＊每日申購起迄時間為凌晨0點0分起、至晚上23點59分止，時間以本公司系統正確接收您的交易完成時間為準，建議您及早開戶，以利申購。</p>
                        <p className="notice">＊本方案之優惠費率、活動期間或其他使用規定如有異動，本網將另行公告。</p>
                        <p className="notice">＊鉅亨網投顧保有調整或終止本方案之權利。</p>
                    </div>
                </div>

                <div className="section5">
                    <h1>基金品牌</h1>
                    <div className="funds-block">
                    {
                        Object.values(FundsList).map( (section, index) => {
                            return (
                                <div key={index}>
                                {
                                    Object.values(section).map( (item, index) => {
                                        const { name, imgName, linkUrl } = item;
                                        
                                        return (
                                            <a key={index} href={linkUrl}>
                                                <img src={require(`../../images/FundsImage/${imgName}`)} />
                                            </a>
                                        );
                                    })
                                }
                                </div>
                            );
                        })
                    }
                    </div>
                    
                    <div className="web-mode">
                        <div className="contact-mode">
                            <a href="mailto:cs@fundsyes.com"><img src={require("../../images/EmailUs.png")} /></a>
                            <span>或</span>
                            <a href="tel:02-2720-8126"><img src={require("../../images/CallUs.png")} /></a>
                        </div>
                    </div>
                    <div className="mobile-mode">
                        <div className="contact-mode">
                            <div><a href="mailto:cs@fundsyes.com"><img src={require("../../images/EmailUs.png")} /></a></div>
                            <div><h1>或</h1></div>
                            <div><a href="tel:02-2720-8126"><img src={require("../../images/CallUs.png")} /></a></div>
                        </div>
                    </div>
                </div>
                <Footer />

                <Bookmark className="bookmark-left web-mode">
                    <div>
                        <a href="http://line.me/R/msg/text/?鉅亨力挺金融人，立即開戶基金申購手續費0元起並享終身手續費低於1折之獨家優惠 http://pcse.pw/7JV4X" target="_blank">
                            <img src={require("../../images/Line.jpg")} />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/share.php?u=https://www.fundsyes.com/launch/F8888/" target="_blank">
                            <img src={require("../../images/FB.jpg")} />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:?subject=〔重要必看〕鉅亨力挺金融人，立即開戶基金申購手續費0元起並享終身手續費低於1折之獨家優惠&body=鉅亨網投顧給您便利基金平台、網羅各大品牌基金、絕佳優惠、自主理財體驗 http://www.fundsyes.com/launch/f8888/" target="_blank">
                            <img src={require("../../images/Email.jpg")} />
                        </a>
                    </div>
                    <div>
                        <a href="#WebTop">
                            <img src={require("../../images/BackToTop.jpg")} />
                        </a>
                    </div>
                </Bookmark>

                <Bookmark className="bookmark-right web-mode">
                    <a href={activityOpenAccountUrl} target="_blank">
                        <h2><h2>馬上開戶</h2>活動代碼<br/>F8888</h2>
                    </a>
                </Bookmark>

                <Bookmark className="bookmark-left-down mobile-mode">
                    <a href="http://line.me/R/msg/text/?鉅亨力挺金融人，立即開戶基金申購手續費0元起並享終身手續費低於1折之獨家優惠 http://pcse.pw/7JV4X" target="_blank">
                        <img src={require("../../images/Line.jpg")} />
                    </a>
                    <a href="https://www.facebook.com/share.php?u=https://www.fundsyes.com/launch/F8888/" target="_blank">
                        <img src={require("../../images/FB.jpg")} />
                    </a>
                    <a href="mailto:?subject=〔重要必看〕鉅亨力挺金融人，立即開戶基金申購手續費0元起並享終身手續費低於1折之獨家優惠&body=鉅亨網投顧給您便利基金平台、網羅各大品牌基金、絕佳優惠、自主理財體驗 http://www.fundsyes.com/launch/f8888/" target="_blank">
                        <img src={require("../../images/Email.jpg")} />
                    </a>
                    <a href="#WebTop">
                        <img src={require("../../images/BackToTop.jpg")} />
                    </a>
                </Bookmark>

                <Bookmark className="bookmark-right-down mobile-mode">
                    <a href={activityOpenAccountUrl} target="_blank">
                        <h2><h2>馬上開戶</h2>活動代碼<br/>F8888</h2>
                    </a>
                </Bookmark>
            </div>
        );
    }
}

export default Home;