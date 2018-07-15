/* 
 * Created by kevin in 2018/01/03
 */

import axios from 'axios';
import validator from 'validator';
import { browserHistory } from 'react-router';
import { validChineseName } from '../components/commonjs';

import {
    STEP1_GET_CITY_LIST_SUCCESS,
    STEP1_GET_COUNTRY_LIST_SUCCESS,
    STEP1_GET_STEP0_DATA,
    /* 身份證字號 */
    STEP1_IDNUM_CHANGED,
    /* 中文姓名 */
    STEP1_NAME_CHANGED,
    /* 出生年月日 */
    STEP1_YEAR_CHANGED,
    STEP1_MONTH_CHANGED,
    STEP1_DAY_CHANGED,
    /* 戶籍地址 */
    STEP1_GET_PRIMARY_DISTRICT_LIST_SUCCESS,
    STEP1_PRIMARY_CITY_CHANGED,
    STEP1_PRIMARY_DISTRICT_CHANGED,
    STEP1_PRIMARY_DETAILADDR_CHANGED,
    /* 通訊地址 */
    STEP1_PRIMARY_ADDR_COPYTO_SECONDARY,
    STEP1_GET_SECONDARY_DISTRICT_LIST_SUCCESS,
    STEP1_SECONDARY_CITY_CHANGED,
    STEP1_SECONDARY_DISTRICT_CHANGED,
    STEP1_SECONDARY_DETAILADDR_CHANGED,
    /* 電話 */
    STEP1_MOBILEPHONE_CHANGED,
    STEP1_COMPANYPHONE_DISTRICT_CHANGED,
    STEP1_COMPANYPHONE_NUMBER_CHANGED,
    STEP1_COMPANYPHONE_EXT_CHANGED,
    STEP1_HOUSEPHONE_DISTRICT_CHANGED,
    STEP1_HOUSEPHONE_NUMBER_CHANGED,
    /* 信箱 */
    STEP1_EMAIL_CHANGED,
    /* 接收理財資訊 */
    STEP1_RECEIVEINFO_CHANGED,
    /* 活動代碼 */
    STEP1_ACTIVITY_CHANGED,
    /* 業務專員 */
    STEP1_SALESMAN_CHANGED,
    /* 方便聯絡時間 */
    STEP1_CONTACTTIME_CHANGED,
    /* 居住地 */
    STEP1_RESIDENCE_CHANGED,
    STEP1_RESIDENCE_COUNTRY_CHANGED,
    /* 學歷 */
    STEP1_EDUCATION_CHANGED,
    /* 職業類別 */
    STEP1_JOB_KIND_CHANGED,
    /* 職務 */
    STEP1_JOB_POSITION_CHANGED,
    /* 家庭或個人年收入 */
    STEP1_YEAR_INCOME_CHANGED,
    /* 可投資金額 */
    STEP1_INVEST_AMOUNT_CHANGED,
    /* 婚姻狀況 */
    STEP1_MARRY_CHANGED,
    /* 子女人數 */
    STEP1_CHILDREN_CHANGED,
    /* 理財資訊來源 */
    STEP1_INFO_SOURCE_CHANGED,
    /* 國籍 */
    STEP1_TW_NATIONALITY_CHANGED,
    STEP1_OTHER_NATIONALITY_CHANGED,
    /* 領有全民健康保險重大傷病證明 */
    STEP1_HURT_PROVE_CHANGED,
    /* 下一步 */
    STEP1_CHECK_DATA,
} from './types';

/* urls */
const CityListTW_URL = 'https://rawgit.com/CruiseAndy/bd946c90f3f5f3b87f051abff74d8f29/raw/ecf82f4d51772d9bbc1b10addc77321db8694aa8/CityListTW.json';
const DistrictListTW_URL = 'https://rawgit.com/CruiseAndy/12b25c9c1c8385f0c4fd31ad78c6d0a4/raw/eaf848c54afadec3a66ad0e968a4ab47158d7f82/DistrictListTW.json';
const Country_URL = 'https://rawgit.com/CruiseAndy/7246a8889fd9450c83799cf438ecd8fe/raw/9132e1310df84c38da50d670119fbdadb990ec95/Country.json';

export const getCityListTW = () => {
    return dispatch => {
        axios.get(CityListTW_URL)
            .then( response => {
                dispatch(getCityListTWSuccess(response.data));
            })
            .catch( error => {
                console.log(`Get City List Fail ${error}`);
            })
    }
}

const getCityListTWSuccess = ({ cityList }) => {
    return {
        type: STEP1_GET_CITY_LIST_SUCCESS,
        cityList : ["選擇縣市", ...cityList]
    }
}

export const getStep0Data = ({ name, email, phone }) => {
    return {
        type: STEP1_GET_STEP0_DATA,
        data: { name, email, phone }
    }
}

export const getCountryList = () => {
    return dispatch => {
        axios.get(Country_URL)
            .then( response => {
                dispatch(getCountryListSuccess(response.data));
            })
            .catch( error => {
                console.log(`Get Country List Fail ${error}`);
            })
    }
}

const getCountryListSuccess = countryList => {
    return {
        type: STEP1_GET_COUNTRY_LIST_SUCCESS,
        countryList: { ...countryList, "0": "請選擇" }
    }
}

/******************** 身份證字號 ********************/
export const idNumChanged = idNum => {
    return {
        type: STEP1_IDNUM_CHANGED,
        idNum
    }
}

/******************** 中文姓名 ********************/
export const nameChanged = name => {
    return {
        type: STEP1_NAME_CHANGED,
        name
    }
}

/******************** 出生年月日 ********************/
export const birthYearChanged = year => {
    return {
        type: STEP1_YEAR_CHANGED,
        year
    }
}

export const birthMonthChanged = month => {
    return {
        type: STEP1_MONTH_CHANGED,
        month
    }
}

export const birthDayChanged = day => {
    return {
        type: STEP1_DAY_CHANGED,
        day
    }
}

/******************** 戶籍地址 ********************/
export const getPrimaryDistrictListTW = () => {
    return dispatch => {
        axios.get(DistrictListTW_URL)
            .then( response => {
                dispatch(getPrimaryDistrictListTWSuccess(response.data));
            })
            .catch( error => {
                console.log(`Get District List Fail ${error}`);
            })
    }
}

const getPrimaryDistrictListTWSuccess = ({ districtList }) => {
    return {
        type: STEP1_GET_PRIMARY_DISTRICT_LIST_SUCCESS,
        districtList : ["請選擇", ...districtList]
    }
}

export const primaryCityChanged = primaryCity => {
    return {
        type: STEP1_PRIMARY_CITY_CHANGED,
        primaryCity
    }
}

export const primaryDisrtictChanged = primaryDistrict => {
    return {
        type: STEP1_PRIMARY_DISTRICT_CHANGED,
        primaryDistrict
    }
}

export const primaryDetailAddrChanged = primaryDetailAddr => {
    return {
        type: STEP1_PRIMARY_DETAILADDR_CHANGED,
        primaryDetailAddr
    }
}

/******************** 通訊地址 ********************/
export const copyHouseAddress = () => {
    return {
        type: STEP1_PRIMARY_ADDR_COPYTO_SECONDARY
    }
}
export const getSecondaryDistrictListTW = () => {
    return dispatch => {
        axios.get(DistrictListTW_URL)
            .then( response => {
                dispatch(getSecondaryDistrictListTWSuccess(response.data));
            })
            .catch( error => {
                console.log(`Get District List Fail ${error}`);
            })
    }
}

const getSecondaryDistrictListTWSuccess = ({ districtList }) => {
    return {
        type: STEP1_GET_SECONDARY_DISTRICT_LIST_SUCCESS,
        districtList : ["請選擇", ...districtList]
    }
}

export const secondaryCityChanged = secondaryCity => {
    return {
        type: STEP1_SECONDARY_CITY_CHANGED,
        secondaryCity
    }
}

export const secondaryDisrtictChanged = secondaryDistrict => {
    return {
        type: STEP1_SECONDARY_DISTRICT_CHANGED,
        secondaryDistrict
    }
}

export const secondaryDetailAddrChanged = secondaryDetailAddr => {
    return {
        type: STEP1_SECONDARY_DETAILADDR_CHANGED,
        secondaryDetailAddr
    }
}

/******************** 電話 ********************/
export const mobilePhoneChanged = mobilePhone => {
    return {
        type: STEP1_MOBILEPHONE_CHANGED,
        mobilePhone
    }
}

export const companyPhoneDistrictChanged = companyPhoneDistrict => {
    return {
        type: STEP1_COMPANYPHONE_DISTRICT_CHANGED,
        companyPhoneDistrict
    }
}

export const companyPhoneNumberChanged = companyPhoneNumber => {
    return {
        type: STEP1_COMPANYPHONE_NUMBER_CHANGED,
        companyPhoneNumber
    }
}

export const companyPhoneExtChanged = companyPhoneExt => {
    return {
        type: STEP1_COMPANYPHONE_EXT_CHANGED,
        companyPhoneExt
    }
}

export const housePhoneDistrictChanged = housePhoneDistrict => {
    return {
        type: STEP1_HOUSEPHONE_DISTRICT_CHANGED,
        housePhoneDistrict
    }
}

export const housePhoneNumberChanged = housePhoneNumber => {
    return {
        type: STEP1_HOUSEPHONE_NUMBER_CHANGED,
        housePhoneNumber
    }
}

/******************** 信箱 ********************/
export const emailChanged = email => {
    return {
        type: STEP1_EMAIL_CHANGED,
        email
    }
}

/******************** 接收理財資訊 ********************/
export const receiveInfoChanged = answer => {
    return {
        type: STEP1_RECEIVEINFO_CHANGED,
        answer
    }
}

/******************** 活動代碼 ********************/
export const activityNumChanged = activityNum => {
    return {
        type: STEP1_ACTIVITY_CHANGED,
        activityNum
    }
}

/******************** 業務專員 ********************/
export const salesManChanged = salesMan => {
    return {
        type: STEP1_SALESMAN_CHANGED,
        salesMan
    }
}

/******************** 方便聯絡時間 ********************/
export const contactTimeChanged = contactTime => {
    return {
        type: STEP1_CONTACTTIME_CHANGED,
        contactTime
    }
}

/******************** 居住地 ********************/
export const residenceChanged = residence => {
    return dispatch => {
        if (residence === "TW")
            dispatch(residenceCountryChanged("0"));
        
        dispatch(setResidence(residence));
    }
}

const setResidence = residence => {
    return {
        type: STEP1_RESIDENCE_CHANGED,
        residence
    }
}

export const residenceCountryChanged = residenceCountry => {
    return {
        type: STEP1_RESIDENCE_COUNTRY_CHANGED,
        residenceCountry
    }
}

/******************** 學歷 ********************/
export const educationChanged = education => {
    return {
        type: STEP1_EDUCATION_CHANGED,
        education
    }
}

/******************** 職業類別 ********************/
export const jobKindChanged = jobKind => {
    return {
        type: STEP1_JOB_KIND_CHANGED,
        jobKind
    }
}

/******************** 職務 ********************/
export const jobPositionChanged = jobPosition => {
    return {
        type: STEP1_JOB_POSITION_CHANGED,
        jobPosition
    }
}

/******************** 家庭或個人年收入 ********************/
export const yearIncomeChanged = yearIncome => {
    return {
        type: STEP1_YEAR_INCOME_CHANGED,
        yearIncome
    }
}

/******************** 可投資金額 ********************/
export const investAmountChanged = investAmount => {
    return {
        type: STEP1_INVEST_AMOUNT_CHANGED,
        investAmount
    }
}

/******************** 婚姻狀況 ********************/
export const marryChanged = marry => {
    return {
        type: STEP1_MARRY_CHANGED,
        marry
    }
}

/******************** 子女人數 ********************/
export const childrenChanged = children => {
    return {
        type: STEP1_CHILDREN_CHANGED,
        children
    }
}

/******************** 理財資訊來源 ********************/
export const infoSourceChanged = infoSource => {
    return {
        type: STEP1_INFO_SOURCE_CHANGED,
        infoSource
    }
}

/******************** 國籍 ********************/
export const twNationalityChanged = twNationality => {
    return dispatch => {
        if (twNationality === "Y")
            dispatch(otherNationalityChanged("0"));
    
        dispatch(setTWNationality(twNationality));
    }
}

const setTWNationality = twNationality => {
    return {
        type: STEP1_TW_NATIONALITY_CHANGED,
        twNationality
    }
}

export const otherNationalityChanged = otherNationality => {
    return {
        type: STEP1_OTHER_NATIONALITY_CHANGED,
        otherNationality
    }
}

/******************** 領有全民健康保險重大傷病證明 ********************/
export const hurtProveChanged = hurtProve => {
    return {
        type: STEP1_HURT_PROVE_CHANGED,
        hurtProve
    }
}

/******************** 下一步 ********************/
export const nextStep = ({ history }) => {
    return (dispatch, getState) => {
        dispatch(checkData());

        if (getState().Step1Data.failInfo !== "")
            alert(getState().Step1Data.failInfo)
        else
            history.push('/Step2');
    }
}

const checkData = () => {
    return {
        type: STEP1_CHECK_DATA
    }
}