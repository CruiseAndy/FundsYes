/* 
 * Created by kevin in 2017/12/30
 */

import validator from 'validator';
import { errorMsg } from '../components/message';
import { IdentityValidation, validChineseName } from '../components/commonjs';

/* types */
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
} from '../actions/types';

const INITIAL_STATE = {
    cityList: [],
    countryList: {},
    idNum: '',
    name: '',
    year: '',
    month: '',
    day: '',
    primaryDistrictList: [],
    primaryCity: '',
    primaryDistrict: '',
    primaryDetailAddr: '',
    secondaryDistrictList: [],
    secondaryCity: '',
    secondaryDistrict: '',
    secondaryDetailAddr: '',
    mobilePhone: '',
    companyPhoneDistrict: '',
    companyPhoneNumber: '',
    companyPhoneExt: '',
    housePhoneDistrict: '',
    housePhoneNumber: '',
    email: '',
    receiveInfo: '',
    activityNum: '',
    salesMan: '',
    contactTime: '',
    residence: '',
    residenceCountry: '',
    education: '',
    jobKind: '',
    jobPosition: '',
    yearIncome: '',
    investAmount: '',
    marry: '',
    children: '',
    infoSource: '',
    twNationality: '',
    otherNationality: '',
    hurtProve: '',
    failInfo: '',
};

/* Initial error massage */
let requiredData = {
    idValid: errorMsg.idValid.length,
    nameValid: "",
    birthValid: errorMsg.birthValid,
    primaryAddrValid: errorMsg.primaryAddrValid,
    secondaryAddrValid: errorMsg.secondaryAddrValid,
    mobilePhoneValid: "",
    emailValid: "",
    receiveInfoValid: errorMsg.receiveInfoValid,
    residenceValid: errorMsg.residenceValid,
    educationValid: errorMsg.educationValid,
    jobKindValid: errorMsg.jobKindValid,
    jobPositionValid: errorMsg.jobPositionValid,
    yearIncomeValid: errorMsg.yearIncomeValid,
    investAmountValid: errorMsg.investAmountValid,
    infoSourceValid: errorMsg.infoSourceValid,
    twNationalityValid: errorMsg.twNationalityValid,
};

const validEmpty = (arg) => {
    for (let item of arg) {
        if (item === "")
            return false;
    }
    return true;
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case STEP1_GET_CITY_LIST_SUCCESS:
            return { ...state, cityList: action.cityList };
        case STEP1_GET_COUNTRY_LIST_SUCCESS:
            return { ...state, countryList: action.countryList };
        case STEP1_GET_STEP0_DATA:
            return { ...state,
                        name: action.data.name,
                        mobilePhone: action.data.phone,
                        email: action.data.email
                    };

        /********************** 身份證字號 **********************/
        case STEP1_IDNUM_CHANGED:
            if (action.idNum.length <= 10) {
                requiredData.idValid = IdentityValidation(action.idNum);
                return { ...state, idNum: action.idNum };
            }
            else
                return state;

        /********************** 中文姓名 **********************/
        case STEP1_NAME_CHANGED:
            requiredData.nameValid = validChineseName(action.name) ? "" : errorMsg.nameValid;
            return { ...state, name: action.name};

        /********************** 出生年月日 **********************/
        case STEP1_YEAR_CHANGED:
            requiredData.birthValid = validEmpty([ action.year, state.month, state.day ])
                                        ? ""
                                        : errorMsg.birthValid;
            return { ...state, year: action.year };
        case STEP1_MONTH_CHANGED:
            requiredData.birthValid = validEmpty([ state.year, action.month, state.day ])
                                        ? ""
                                        : errorMsg.birthValid;
            return { ...state, month: action.month };
        case STEP1_DAY_CHANGED:
            requiredData.birthValid = validEmpty([ state.year, state.month, action.day ])
                                        ? ""
                                        : errorMsg.birthValid;
            return { ...state, day: action.day };

        /********************** 戶籍地址 **********************/
        case STEP1_GET_PRIMARY_DISTRICT_LIST_SUCCESS:
            return { ...state, primaryDistrictList: action.districtList };
        case STEP1_PRIMARY_CITY_CHANGED:
            requiredData.primaryAddrValid = validEmpty([ action.primaryCity, state.primaryDistrict, state.primaryDetailAddr ])
                                        ? ""
                                        : errorMsg.primaryAddrValid;
            return { ...state, primaryCity: action.primaryCity };
        case STEP1_PRIMARY_DISTRICT_CHANGED:
            requiredData.primaryAddrValid = validEmpty([ state.primaryCity, action.primaryDistrict, state.primaryDetailAddr ])
                                        ? ""
                                        : errorMsg.primaryAddrValid;
                return { ...state, primaryDistrict: action.primaryDistrict };
        case STEP1_PRIMARY_DETAILADDR_CHANGED:
            requiredData.primaryAddrValid = validEmpty([ state.primaryCity, state.primaryDistrict, action.primaryDetailAddr ])
                                        ? ""
                                        : errorMsg.primaryAddrValid;
            return { ...state, primaryDetailAddr: action.primaryDetailAddr };

        /********************** 通訊地址 **********************/
        case STEP1_PRIMARY_ADDR_COPYTO_SECONDARY:
            requiredData.secondaryAddrValid = requiredData.primaryAddrValid ? errorMsg.secondaryAddrValid : "";
            return { ...state,
                        secondaryDistrictList: state.primaryDistrictList,
                        secondaryCity: state.primaryCity,
                        secondaryDistrict: state.primaryDistrict,
                        secondaryDetailAddr: state.primaryDetailAddr
                    };
        case STEP1_GET_SECONDARY_DISTRICT_LIST_SUCCESS:
            return { ...state, secondaryDistrictList: action.districtList };
        case STEP1_SECONDARY_CITY_CHANGED:
            requiredData.secondaryAddrValid = validEmpty([ action.secondaryCity, state.secondaryDistrict, state.secondaryDetailAddr ])
                                        ? ""
                                        : errorMsg.secondaryAddrValid;
            return { ...state, secondaryCity: action.secondaryCity };
        case STEP1_SECONDARY_DISTRICT_CHANGED:
            requiredData.secondaryAddrValid = validEmpty([ state.secondaryCity, action.secondaryDistrict, state.secondaryDetailAddr ])
                                        ? ""
                                        : errorMsg.secondaryAddrValid;
            return { ...state, secondaryDistrict: action.secondaryDistrict };
        case STEP1_SECONDARY_DETAILADDR_CHANGED:
            requiredData.secondaryAddrValid = validEmpty([ state.secondaryCity, state.secondaryDistrict, action.secondaryDetailAddr ])
                                        ? ""
                                        : errorMsg.secondaryAddrValid;
            return { ...state, secondaryDetailAddr: action.secondaryDetailAddr };

        /********************** 電話 **********************/
        case STEP1_MOBILEPHONE_CHANGED:
            if (action.mobilePhone.length <= 10) {
                requiredData.mobilePhoneValid = validator.isMobilePhone(action.mobilePhone, 'zh-TW')
                                        ? ""
                                        : errorMsg.mobilePhoneValid;
                return { ...state, mobilePhone: action.mobilePhone };
            }
            else
                return state;
        case STEP1_COMPANYPHONE_DISTRICT_CHANGED:
            if (action.companyPhoneDistrict.length <= 4)
                return { ...state, companyPhoneDistrict: action.companyPhoneDistrict };
            else
                return state;
        case STEP1_COMPANYPHONE_NUMBER_CHANGED:
            if (action.companyPhoneNumber.length <= 8)
                return { ...state, companyPhoneNumber: action.companyPhoneNumber };
            else
                return state;
        case STEP1_COMPANYPHONE_EXT_CHANGED:
            if (action.companyPhoneExt.length <= 8)
                return { ...state, companyPhoneExt: action.companyPhoneExt };
            else
                return state;
        case STEP1_HOUSEPHONE_DISTRICT_CHANGED:
            if (action.housePhoneDistrict.length <= 4)
                return { ...state, housePhoneDistrict: action.housePhoneDistrict };
            else
                return state;
        case STEP1_HOUSEPHONE_NUMBER_CHANGED:
            if (action.housePhoneNumber.length <= 8)
                return { ...state, housePhoneNumber: action.housePhoneNumber };
            else
                return state;
                
        /********************** 信箱 **********************/
        case STEP1_EMAIL_CHANGED:
            requiredData.emailValid = validator.isEmail(action.email)
                                        ? ""
                                        : errorMsg.emailValid;
            return { ...state, email: action.email };
            
        /********************** 接收理財資訊 **********************/
        case STEP1_RECEIVEINFO_CHANGED:
            requiredData.receiveInfoValid = action.answer ? "" : errorMsg.receiveInfoValid;
            return { ...state, receiveInfo: action.answer };
            
        /********************** 活動代碼 **********************/
        case STEP1_ACTIVITY_CHANGED:
            return { ...state, activityNum: action.activityNum };
            
        /********************** 業務專員 **********************/
        case STEP1_SALESMAN_CHANGED:
            return { ...state, salesMan: action.salesMan };
            
        /********************** 方便聯絡時間 **********************/
        case STEP1_CONTACTTIME_CHANGED:
            return { ...state, contactTime: action.contactTime };
            
        /********************** 居住地 **********************/
        case STEP1_RESIDENCE_CHANGED:
            requiredData.residenceValid = action.residence === "TW" ? "" : errorMsg.residenceValid;
            return { ...state, residence: action.residence };
        case STEP1_RESIDENCE_COUNTRY_CHANGED:
            requiredData.residenceValid = action.residenceCountry !== "0" ? "" : errorMsg.residenceValid;
            return { ...state, residenceCountry: action.residenceCountry };
            
        /********************** 學歷 **********************/
        case STEP1_EDUCATION_CHANGED:
            requiredData.educationValid = action.education !== "" ? "" : errorMsg.educationValid;
            return { ...state, education: action.education };
            
        /********************** 職業類別 **********************/
        case STEP1_JOB_KIND_CHANGED:
            requiredData.jobKindValid = action.jobKind !== "" ? "" : errorMsg.jobKindValid;
            return { ...state, jobKind: action.jobKind };
            
        /********************** 職務 **********************/
        case STEP1_JOB_POSITION_CHANGED:
            requiredData.jobPositionValid = action.jobPosition !== "" ? "" : errorMsg.jobPositionValid;
            return { ...state, jobPosition: action.jobPosition };
            
        /********************** 家庭或個人年收入 **********************/
        case STEP1_YEAR_INCOME_CHANGED:
            requiredData.yearIncomeValid = action.yearIncome !== "" ? "" : errorMsg.yearIncomeValid;
            return { ...state, yearIncome: action.yearIncome };
            
        /********************** 可投資金額 **********************/
        case STEP1_INVEST_AMOUNT_CHANGED:
            requiredData.investAmountValid = action.investAmount !== "" ? "" : errorMsg.investAmountValid;
            return { ...state, investAmount: action.investAmount };
            
        /********************** 婚姻狀況 **********************/
        case STEP1_MARRY_CHANGED:
            return { ...state, marry: action.marry };
            
        /********************** 子女人數 **********************/
        case STEP1_CHILDREN_CHANGED:
            if (action.children.length <= 2)
                return { ...state, children: action.children };
            else
                return state;
                
        /********************** 理財資訊來源 **********************/
        case STEP1_INFO_SOURCE_CHANGED:
            requiredData.infoSourceValid = action.infoSource !== "" ? "" : errorMsg.infoSourceValid;
            return { ...state, infoSource: action.infoSource };
            
        /********************** 理財資訊來源 **********************/
        case STEP1_TW_NATIONALITY_CHANGED:
            requiredData.twNationalityValid = action.twNationality === "N" ? "" : errorMsg.twNationalityValid;
            return { ...state, twNationality: action.twNationality };
        case STEP1_OTHER_NATIONALITY_CHANGED:
            requiredData.twNationalityValid = action.otherNationality !== "0" ? "" : errorMsg.twNationalityValid;
            return { ...state, otherNationality: action.otherNationality };
            
        /********************** 領有全民健康保險重大傷病證明 **********************/
        case STEP1_HURT_PROVE_CHANGED:
            return { ...state, hurtProve: action.hurtProve };
            
        /********************** 下一步 **********************/
        case STEP1_CHECK_DATA:
            state.failInfo = '';
            for (let failInfo of Object.values(requiredData)) {
                if (failInfo !== "")
                    return { ...state, failInfo };
            }
            return state;
        default:
            return state;
    }
}