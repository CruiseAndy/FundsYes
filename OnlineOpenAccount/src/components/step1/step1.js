/* 
 * Created by kevin in 2018/01/03
 */

/* tools */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* css */
import './step1.scss';

/* component */
import Header from '../header/header';

const selectList = (initial, start, end) => {
    let elementList = initial==="" ? [] : [<option key={0}>{initial}</option>];
    
    for (let i = start; i <= end; i++) {
        elementList.push(<option key={i}>{i}</option>)
    }
    return elementList;
}

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            primaryCityIndex: 0,
            primaryDistrict: [],
            secondaryCityIndex: 0,
            secondaryDistrict: [],
        }
    }

    componentWillMount() {
        this.props.getCityListTW();
        this.props.getCountryList();
        this.props.getStep0Data(this.props.Step0Data);
    }
    
    componentWillReceiveProps(nextProps) {

        if (this.state.primaryCityIndex === 0) {
            this.setState({
                primaryDistrict: []
            })
        }
        else {
            this.setState({
                primaryDistrict: nextProps.Step1Data.primaryDistrictList
            })
        }

        if (this.state.secondaryCityIndex === 0) {
            this.setState({
                secondaryDistrict: []
            })
        }
        else {
            this.setState({
                secondaryDistrict: nextProps.Step1Data.secondaryDistrictList
            })
        }
    }

    _primaryCityChanged = target => {
        if (target.selectedIndex === 0) {
            // Clear primary address data
            this.props.primaryCityChanged("");
            this.props.primaryDisrtictChanged("");
            this.props.primaryDetailAddrChanged("");
        }
        else {
            this.props.primaryCityChanged(target.value);
        }

        this.setState({
            primaryCityIndex: target.selectedIndex,
        }, () => {
            this.props.getPrimaryDistrictListTW();
        })
    }

    _copyPrimaryAddr = () => {
        // 1. Initial secondary district list
        this.setState(prevState => ({
            secondaryCityIndex: prevState.primaryCityIndex,
        }), () => {
            this.setState(prevState => ({
                secondaryDistrict: prevState.primaryDistrict
            }))
        });

        // 2. Set secondary address from primary address
        this.props.copyHouseAddress();
    }

    _secondaryCityChanged = target => {
        if (target.selectedIndex === 0) {
            // Clear secondary address data
            this.props.secondaryCityChanged("");
            this.props.secondaryDisrtictChanged("");
            this.props.secondaryDetailAddrChanged("");
        }
        else {
            this.props.secondaryCityChanged(target.value);
        }

        this.setState({
            secondaryCityIndex: target.selectedIndex,
        }, () => {
            this.props.getSecondaryDistrictListTW();
        })
    }

    render() {
        const { Step1Data } = this.props;

        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <img src={require("../../images/step1.png")} />
                    </div>
                    <div className="Common-TitleBox">
                        <h2>基本資料</h2>
                    </div>

                    {/* 身分證字號 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>身分證字號:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="請填寫個人身份證字號"
                            value={Step1Data.idNum}
                            onChange={ e => this.props.idNumChanged(e.target.value) }
                        />
                    </div>

                    {/* 中文姓名 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>中文姓名:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="請填寫真實姓名"
                            value={Step1Data.name}
                            onChange={ e => this.props.nameChanged(e.target.value) }
                        />
                    </div>

                    {/* 出生日期 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>出生日期:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowThreeSelect">
                            <select onChange={ e => this.props.birthYearChanged(e.target.value) }>
                                {selectList("請選擇", 1911, (new Date()).getFullYear() - 1)}
                            </select>
                            <select onChange={ e => this.props.birthMonthChanged(e.target.value) }>
                                {selectList("請選擇", 1, 12)}
                            </select>
                            <select onChange={ e => this.props.birthDayChanged(e.target.value) }>
                                {selectList("請選擇", 1, 31)}
                            </select>
                        </div>
                    </div>

                    {/* 戶籍地址 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>戶籍地址:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowTwoSelect">
                            <select
                                value={Step1Data.primaryCity}
                                onChange={ e => this._primaryCityChanged(e.target) }
                            >
                                {
                                    Step1Data.cityList.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        );
                                    })
                                }
                            </select>
                            <select
                                value={Step1Data.primaryDistrict}
                                onChange={ e => this.props.primaryDisrtictChanged(e.target.selectedIndex === 0 ? "" : e.target.value) }
                            >
                                {
                                    this.state.primaryDistrict.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="詳細地址"
                            value={Step1Data.primaryDetailAddr}
                            onChange={ e => this.props.primaryDetailAddrChanged(e.target.value) }
                        />
                    </div>

                    {/* 通訊地址 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>通訊地址:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className="Common-RowOneButton"
                            onClick={ () => this._copyPrimaryAddr() }
                        >同戶籍地址
                        </button>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowTwoSelect">
                            <select
                                value={Step1Data.secondaryCity}
                                onChange={ e => this._secondaryCityChanged(e.target) }
                            >
                                {
                                    Step1Data.cityList.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        );
                                    })
                                }
                            </select>
                            <select
                                value={Step1Data.secondaryDistrict}
                                onChange={ e => this.props.secondaryDisrtictChanged(e.target.selectedIndex === 0 ? "" : e.target.value) }
                            >
                                {
                                    this.state.secondaryDistrict.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            value={Step1Data.secondaryDetailAddr}
                            placeholder="詳細地址"
                            onChange={ e => this.props.secondaryDetailAddrChanged(e.target.value) }
                        />
                    </div>

                    {/* 行動電話 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>行動電話:(行動電話為必填。)</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            value={Step1Data.mobilePhone}
                            placeholder="驗證及簡訊專用，請填入正確的手機號碼"
                            onChange={e => this.props.mobilePhoneChanged(e.target.value)}
                        />
                    </div>

                    {/* 公司電話 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>公司電話</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="區碼"
                            style={{ width: "calc((100% - 20px) / 4)", marginRight: "10px" }}
                            value={Step1Data.companyPhoneDistrict}
                            onChange={ e => this.props.companyPhoneDistrictChanged(e.target.value) }
                        />
                        <input
                            type="number"
                            placeholder="電話號碼"
                            style={{ width: "calc((100% - 20px) / 2)", marginRight: "10px" }}
                            value={Step1Data.companyPhoneNumber}
                            onChange={ e => this.props.companyPhoneNumberChanged(e.target.value) }
                        />
                        <input
                            type="number"
                            placeholder="分機"
                            style={{ width: "calc((100% - 20px) / 4)" }}
                            value={Step1Data.companyPhoneExt}
                            onChange={ e => this.props.companyPhoneExtChanged(e.target.value) }
                        />
                    </div>

                    {/* 住家電話 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>住家電話</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="區碼"
                            style={{ width: "calc((100% - 10px) / 4)", marginRight: "10px" }}
                            value={Step1Data.housePhoneDistrict}
                            onChange={ e => this.props.housePhoneDistrictChanged(e.target.value) }
                        />
                        <input
                            type="number"
                            placeholder="電話號碼"
                            style={{ width: "calc((100% - 10px) / 4 * 3)" }}
                            value={Step1Data.housePhoneNumber}
                            onChange={ e => this.props.housePhoneNumberChanged(e.target.value) }
                        />
                    </div>

                    {/* 電子郵件信箱 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>電子郵件信箱:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="請輸入常用的電子信箱"
                            value={Step1Data.email}
                            onChange={ e => this.props.emailChanged(e.target.value) }
                        />
                    </div>

                    {/* 說明 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>(為使您不漏接我們的通知信件，建議您避免使用yahoo、pchome等免費信箱。)</span>
                        </div>
                    </div>

                    {/* 是否接收理財資訊 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>是否接收理財資訊:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.receiveInfo === 1 ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.receiveInfoChanged(1) }
                        >是
                        </button>
                        <button
                            className={Step1Data.receiveInfo === 2 ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            onClick={ () => this.props.receiveInfoChanged(2) }
                        >否
                        </button>
                    </div>

                    {/* 活動代碼 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>活動代碼:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="此為活動專用，若無可免填"
                            value={Step1Data.activityNum}
                            onChange={ e => this.props.activityNumChanged(e.target.value) }
                        />
                    </div>

                    {/* 業務專員 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>業務專員:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="請填寫業務專員姓名，若無可免填"
                            value={Step1Data.salesMan}
                            onChange={ e => this.props.salesManChanged(e.target.value) }
                        />
                    </div>

                    {/* 方便聯繫時間 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>方便聯繫時間:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.contactTime === 1 ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.contactTimeChanged(1) }
                        >早上
                        </button>
                        <button
                            className={Step1Data.contactTime === 2 ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.contactTimeChanged(2) }
                        >中午
                        </button>
                        <button
                            className={Step1Data.contactTime === 3 ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            onClick={ () => this.props.contactTimeChanged(3) }
                        >下午
                        </button>
                    </div>

                    <div className="Common-RowBox">
                        <div className="Common-LineDotted"></div>
                    </div>

                    {/* 個人背景 */}
                    <div className="Common-TitleBox">
                        <h2>個人背景</h2>
                    </div>

                    {/* 居住地 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>居住地:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.residence === "TW" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.residenceChanged("TW") }
                        >台澎金馬
                        </button>
                        <button
                            className={Step1Data.residence === "other" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            onClick={ () => this.props.residenceChanged("other") }
                        >其他
                        </button>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                disabled={Step1Data.residence === "other" ? "" : "disabled"}
                                value={Step1Data.residenceCountry}
                                onChange={ e => this.props.residenceCountryChanged(e.target.value) }
                            >
                                {
                                    Object.entries(Step1Data.countryList).map((item, index) => {
                                        const value = item[0];
                                        const text = item[1];
                                        
                                        return (
                                            <option key={index} value={value}>{text}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    {/* 學歷 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>學歷:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={Step1Data.education}
                                onChange={ e => this.props.educationChanged(e.target.value) }
                            >
                                <option value="">請選擇</option>
                                <option value="01">國中(含)以下</option>
                                <option value="02">高中職</option>
                                <option value="03">專科/大學</option>
                                <option value="04">碩士以上</option>
                            </select>
                        </div>
                    </div>

                    {/* 學職業類別歷 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>職業類別:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={Step1Data.jobKind}
                                onChange={ e => this.props.jobKindChanged(e.target.value) }
                            >
                                <option value="">請選擇</option>
                                <option value="01">服務業</option>
                                <option value="02">商業</option>
                                <option value="03">金融保險業</option>
                                <option value="04">科技業</option>
                                <option value="05">資訊業</option>
                                <option value="06">醫療</option>
                                <option value="07">軍公教</option>
                                <option value="08">自由業</option>
                                <option value="09">家管</option>
                                <option value="10">學生</option>
                                <option value="99">其他</option>
                            </select>
                        </div>
                    </div>

                    {/* 職務 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>職務:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={Step1Data.jobPosition}
                                onChange={ e => this.props.jobPositionChanged(e.target.value) }
                            >
                                <option value="">請選擇</option>
                                <option value="職員">職員</option>
                                <option value="業務">業務</option>
                                <option value="技術人員">技術人員</option>
                                <option value="專業人員">專業人員</option>
                                <option value="中階主管">中階主管</option>
                                <option value="高階主管">高階主管</option>
                                <option value="企業負責人">企業負責人</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                    </div>

                    {/* 家庭或個人年收入 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>家庭或個人年收入:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={Step1Data.yearIncome}
                                onChange={ e => this.props.yearIncomeChanged(e.target.value) }
                            >
                                <option value="">請選擇</option>
                                <option value="01">50萬以下</option>
                                <option value="02">50-100萬</option>
                                <option value="03">100-300萬</option>
                                <option value="04">300-500萬</option>
                                <option value="05">500萬以上</option>
                            </select>
                        </div>
                    </div>

                    {/* 可投資金額 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>可投資金額:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={Step1Data.investAmount}
                                onChange={ e => this.props.investAmountChanged(e.target.value) }
                            >
                                <option value="">請選擇</option>
                                <option value="01">50萬以下</option>
                                <option value="02">50-100萬</option>
                                <option value="03">100-300萬</option>
                                <option value="04">300-500萬</option>
                                <option value="05">500-1000萬</option>
                                <option value="06">1000-3000萬</option>
                                <option value="07">3000萬以上</option>
                            </select>
                        </div>
                    </div>

                    {/* 婚姻狀況 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>婚姻狀況:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.marry === "M" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.marryChanged("M") }
                        >已婚
                        </button>
                        <button
                            className={Step1Data.marry === "S" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            onClick={ () => this.props.marryChanged("S") }
                        >單身
                        </button>
                    </div>

                    {/* 子女人數 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>子女人數:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="請輸入人數"
                            value={Step1Data.children}
                            onChange={ e => this.props.childrenChanged(e.target.value) }
                        />
                    </div>

                    {/* 理財資訊來源 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>理財資訊來源:</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.infoSource === "01" ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.infoSourceChanged("01") }
                        >網際網路
                        </button>
                        <button
                            className={Step1Data.infoSource === "02" ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.infoSourceChanged("02") }
                        >報章媒體
                        </button>
                        <button
                            className={Step1Data.infoSource === "03" ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            onClick={ () => this.props.infoSourceChanged("03") }
                        >投資講座
                        </button>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.infoSource === "04" ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.infoSourceChanged("04") }
                        >銀行通路
                        </button>
                        <button
                            className={Step1Data.infoSource === "05" ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.infoSourceChanged("05") }
                        >理財專員
                        </button>
                        <button
                            className={Step1Data.infoSource === "99" ? "Common-RowThreeButton_Click" : "Common-RowThreeButton"}
                            onClick={ () => this.props.infoSourceChanged("99") }
                        >其他
                        </button>
                    </div>

                    {/* 國籍 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span>*</span>
                            <span>除中華民國(台灣)國籍外，是否同時具有其他國籍身份?</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.twNationality === "Y" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.twNationalityChanged("Y") }
                        >是
                        </button>
                        <button
                            className={Step1Data.twNationality === "N" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            onClick={ () => this.props.twNationalityChanged("N") }
                        >否
                        </button>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                disabled={Step1Data.twNationality === "Y" ? "" : "disabled"}
                                value={Step1Data.otherNationality}
                                onChange={ e => this.props.otherNationalityChanged(e.target.value) }
                            >
                                {
                                    Object.entries(Step1Data.countryList).map((item, index) => {
                                        const value = item[0];
                                        const text = item[1];
                                        
                                        return (
                                            <option key={index} value={value}>{text}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    {/* 領有全民健康保險重大傷病證明 */}
                    <div className="Common-RowBox">
                        <div className="itemTitle">
                            <span></span>
                            <span>是否領有全民健康保險重大傷病證明?</span>
                            <span>如未選擇視為不具備該條件</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className={Step1Data.hurtProve === "Y" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.hurtProveChanged("Y") }
                        >是
                        </button>
                        <button
                            className={Step1Data.hurtProve === "N" ? "Common-RowTwoButton_Click" : "Common-RowTwoButton"}
                            onClick={ () => this.props.hurtProveChanged("N") }
                        >否
                        </button>
                    </div>

                    <div className="Common-RowBox">
                        <div className="Common-LineDotted"></div>
                    </div>

                    <div className="Common-RowBox">
                        <div>
                            <button
                                className="btnStep1"
                                onClick={ () => this.props.nextStep(this.props) }
                            >下一步</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Step1);