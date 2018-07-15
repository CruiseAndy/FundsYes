/* 
 * Created by kevin in 2018/01/10
 */

/* tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import Step4 from './step4';

const mapStateToProps = state => {
    const { Step1Data, Step2Data, Step3Data } = state;
    const allData = {
        "身份證字號": Step1Data.idNum,
        "中文姓名": Step1Data.name,
        "出生日期": Step1Data.year + "年" + Step1Data.month + "月" + Step1Data.day + "日",
        "戶籍地址": Step1Data.primaryCity + Step1Data.primaryDistrict + Step1Data.primaryDetailAddr,
        "通訊地址": Step1Data.secondaryCity + Step1Data.secondaryDistrict + Step1Data.secondaryDetailAddr,
        "行動電話": Step1Data.mobilePhone,
        "公司電話": Step1Data.companyPhoneDistrict === '' ? "" : Step1Data.companyPhoneDistrict + "-" + Step1Data.companyPhoneNumber + "分機" + Step1Data.companyPhoneExt,
        "住家電話": Step1Data.housePhoneDistrict === '' ? "" : Step1Data.housePhoneDistrict + "-" + Step1Data.housePhoneNumber,
        "電子郵件信箱": Step1Data.email,
        "是否接收理財資訊": Step1Data.receiveInfo === 1 ? "是" : Step1Data.receiveInfo === 2 ? "否" : "",
        "活動代碼": Step1Data.activityNum,
        "業務專員": Step1Data.salesMan,
        "方便聯繫時間": Step1Data.receiveInfo === 1 ? "上午" : Step1Data.receiveInfo === 2 ? "中午" : Step1Data.receiveInfo === 3 ? "下午" : "",
        "居住地": Step1Data.residence === 'TW' ? "台澎金馬" : Step1Data.residenceCountry,
        "學歷": "碩士以上",
        "職業類別": "科技業",
        "職務": Step1Data.jobPosition,
        "家庭或個人年收入": Step1Data.yearIncome,
        "可投資金額": Step1Data.investAmount,
        "婚姻狀況": Step1Data.marry === 'S' ? "單身" : "已婚",
        "子女人數": Step1Data.children,
        "理財資訊來源": Step1Data.infoSource,
        "除中華民國(台灣)國籍外，是否同時具有其他國籍身份": "否",
        "是否領有全民健康保險重大傷病證明": Step1Data.hurtProve ? "是" : "否",
        "扣款台幣帳號": "",
        "扣款外幣帳號": "",
        "買回台幣帳號": "",
        "買回外幣帳號": "",
        "英文名字": Step3Data.passportName
    }

    const grade = Step2Data.testResult;

    return { allData, grade };
}

export default connect(mapStateToProps, {})(Step4);