/* 
 * Created by kevin in 2018/03/13
 */

/* tools */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* css */
import HomeStyle from './home.scss';

/* data */
import FundsList from '../FundsList.json';

/* component */
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import Bookmark from '../../components/bookmark/bookmark';
import { relative } from 'path';

const activityOpenAccountUrl = "https://www.fundsyes.com/Account/open_notice.aspx?P=B1000";

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
                <Banner
                    webImgName={"TopBanner1.jpg"}
                    mobileImgName={"TopBanner2.jpg"}
                    imgLink={activityOpenAccountUrl}
                    openTab={true}
                >
                    <div className="activity-title">
                        <h1>金融同業申購優惠</h1>
                        <h2>終身 <span>0.2%</span>手續費</h2>
                    </div>
                </Banner>
                <div className="section1">
                    <div style={{ display: "inline-block" }}>
                        <a href="#NotMember"><img src={require("../../images/NewUser.png")} /></a>
                        <div style={{ width: "300px", height: "85px", margin: "auto" }}>
                            <span>線上申請輸入活動代碼B1000，並檢附金融業名片一張，即享終身0.2%手續費</span>
                        </div>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <a href="#Member"><img src={require("../../images/OldUser.png")} /></a>
                        <div style={{ width: "280px", height: "85px", margin: "auto" }}>
                            <span>推薦一位金融同業親友開戶，二人皆享終身0.2%手續費</span>
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
                        <h2><img className="img-check" src={require("../../images/Check.png")} />於活動代碼欄位輸入B1000</h2>
                        <h2><img className="img-check" src={require("../../images/Check.png")} />開戶文件寄回時附上金融業名片一張</h2>
                        <p><a href={activityOpenAccountUrl} target="_blank"><img src={require("../../images/OpenAccount.png")} /></a></p>
                    </div>
                </div>
                <div id = "Member" className="section2">
                    <div className="web-mode">
                        <div className="user-text" style={{ width: "50%", paddingLeft: "120px" }}>
                            <h1>我已經開戶</h1>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />來信cs@fundsyes.com或來電02-27208126告知您推薦的新戶姓名、身分證字號</h2>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />檢附您的金融業名片一張（影本可）</h2>
                            <p><a href="mailto:cs@fundsyes.com"><img src={require("../../images/ContactUs.png")} /></a></p>
                            <h2>活動時間即日起至2018年6月30日止</h2>
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
                            <h2><img className="img-check" src={require("../../images/Check.png")} />來信cs@fundsyes.com或來電02-27208126告知您推薦的新戶姓名、身分證字號</h2>
                            <h2><img className="img-check" src={require("../../images/Check.png")} />檢附您的金融業名片一張（影本可）</h2>
                            <p><a href="mailto:cs@fundsyes.com"><img src={require("../../images/ContactUs.png")} /></a></p>
                            <h2>活動時間即日起至2018年6月30日止</h2>
                        </div>
                    </div>
                </div>
                <div className="section3">
                    <h1>申購範圍</h1>
                    <h2>全平台基金終身適用，包含...</h2>
                    <div>
                        <a href={activityOpenAccountUrl} target="_blank">
                            <img className="consum-behavior-img" src={require("../../images/Button1OFF.png")} />
                        </a>
                        <a href={activityOpenAccountUrl} target="_blank">
                            <img className="consum-behavior-img" src={require("../../images/Button2OFF.png")} />
                        </a>
                        <a href={activityOpenAccountUrl} target="_blank">
                            <img className="consum-behavior-img" src={require("../../images/Button3OFF.png")} />
                        </a>
                    </div>
                    <div>
                        <img
                            src={require("../../images/BehaviorImage1.png")}
                            style={{ margin: "0 0 40px 0" }}
                        />
                    </div>
                    <p>・鉅亨基金交易平台保有調整或終止本方案之權利，精省小額扣不適用。</p>
                    <p>・金融同業專案適用對象：銀行、投信、投顧、證券、期貨、保險業、信合社、農漁會信用部</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <a href={activityOpenAccountUrl} target="_blank"><img src={require("../../images/Logo.png")} /></a>
                </div>
                <div className="section4">
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
                            <div><span>或</span></div>
                            <div><a href="tel:02-2720-8126"><img src={require("../../images/CallUs.png")} /></a></div>
                        </div>
                    </div>
                </div>
                <Footer />

                <Bookmark className="bookmark-left" style={{ top: "300px" }}>
                    <div>
                        <a href="http://line.me/R/msg/text/?來鉅亨買基金，金融同業終身0.2%優惠手續費 https://www.fundsyes.com/launch/B1000/" target="_blank">
                            <img src={require("../../images/Line.jpg")} />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/share.php?u=https://www.fundsyes.com/launch/B1000/" target="_blank">
                            <img src={require("../../images/FB.jpg")} />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:?subject=[金融同業]&body=來鉅亨基金交易平台買基金，金融同業終身0.2%優惠手續費 %0D%0A https://www.fundsyes.com/launch/B1000/" target="_blank">
                            <img src={require("../../images/Email.jpg")} />
                        </a>
                    </div>
                    <div>
                        <a href="#WebTop">
                            <img src={require("../../images/BackToTop.jpg")} />
                        </a>
                    </div>
                </Bookmark>

                <Bookmark className="bookmark-right" style={{ top: "400px", right: 0 }}>
                    <a href={activityOpenAccountUrl} target="_blank"><img src={require("../../images/ActivityFloat.jpg")} /></a>
                </Bookmark>
            </div>
        );
    }
}

export default Home;