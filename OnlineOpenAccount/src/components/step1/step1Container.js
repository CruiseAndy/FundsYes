/* 
 * Created by kevin in 2018/01/03
 */

/* tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import Step1 from './step1';

/* actions */
import {
    getCityListTW,
    getCountryList,
    getStep0Data,
    /* 身份證字號 */
    idNumChanged,
    /* 中文姓名 */
    nameChanged,
    /* 出生年月日 */
    birthYearChanged,
    birthMonthChanged,
    birthDayChanged,
    /* 戶籍地址 */
    getPrimaryDistrictListTW,
    primaryCityChanged,
    primaryDisrtictChanged,
    primaryDetailAddrChanged,
    /* 通訊地址 */
    copyHouseAddress,
    getSecondaryDistrictListTW,
    secondaryCityChanged,
    secondaryDisrtictChanged,
    secondaryDetailAddrChanged,
    /* 電話 */
    mobilePhoneChanged,
    companyPhoneDistrictChanged,
    companyPhoneNumberChanged,
    companyPhoneExtChanged,
    housePhoneDistrictChanged,
    housePhoneNumberChanged,
    /* 信箱 */
    emailChanged,
    /* 接收理財資訊 */
    receiveInfoChanged,
    /* 活動代碼 */
    activityNumChanged,
    /* 業務專員 */
    salesManChanged,
    /* 方便聯絡時間 */
    contactTimeChanged,
    /* 居住地 */
    residenceChanged,
    residenceCountryChanged,
    /* 學歷 */
    educationChanged,
    /* 職業類別 */
    jobKindChanged,
    /* 職務 */
    jobPositionChanged,
    /* 家庭或個人年收入 */
    yearIncomeChanged,
    /* 可投資金額 */
    investAmountChanged,
    /* 婚姻狀況 */
    marryChanged,
    /* 子女人數 */
    childrenChanged,
    /* 理財資訊來源 */
    infoSourceChanged,
    /* 國籍 */
    twNationalityChanged,
    otherNationalityChanged,
    /* 領有全民健康保險重大傷病證明 */
    hurtProveChanged,
    /* 下一步 */
    nextStep,
    clearFailInfo,
} from '../../actions';

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {
    getCityListTW,
    getCountryList,
    getStep0Data,
    /* 身份證字號 */
    idNumChanged,
    /* 中文姓名 */
    nameChanged,
    /* 出生年月日 */
    birthYearChanged,
    birthMonthChanged,
    birthDayChanged,
    /* 戶籍地址 */
    getPrimaryDistrictListTW,
    primaryCityChanged,
    primaryDisrtictChanged,
    primaryDetailAddrChanged,
    /* 通訊地址 */
    copyHouseAddress,
    getSecondaryDistrictListTW,
    secondaryCityChanged,
    secondaryDisrtictChanged,
    secondaryDetailAddrChanged,
    /* 電話 */
    mobilePhoneChanged,
    companyPhoneDistrictChanged,
    companyPhoneNumberChanged,
    companyPhoneExtChanged,
    housePhoneDistrictChanged,
    housePhoneNumberChanged,
    /* 信箱 */
    emailChanged,
    /* 接收理財資訊 */
    receiveInfoChanged,
    /* 活動代碼 */
    activityNumChanged,
    /* 業務專員 */
    salesManChanged,
    /* 方便聯絡時間 */
    contactTimeChanged,
    /* 居住地 */
    residenceChanged,
    residenceCountryChanged,
    /* 學歷 */
    educationChanged,
    /* 職業類別 */
    jobKindChanged,
    /* 職務 */
    jobPositionChanged,
    /* 家庭或個人年收入 */
    yearIncomeChanged,
    /* 可投資金額 */
    investAmountChanged,
    /* 婚姻狀況 */
    marryChanged,
    /* 子女人數 */
    childrenChanged,
    /* 理財資訊來源 */
    infoSourceChanged,
    /* 國籍 */
    twNationalityChanged,
    otherNationalityChanged,
    /* 領有全民健康保險重大傷病證明 */
    hurtProveChanged,
    /* 下一步 */
    nextStep,
    clearFailInfo,
})(Step1);