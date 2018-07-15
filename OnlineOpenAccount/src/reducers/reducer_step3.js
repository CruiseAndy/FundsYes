/* 
 * Created by kevin in 2018/01/11
 */

/* tools */
import {
    STEP3_GET_TW_BANK_LIST,
    STEP3_GET_TW_BANK_BRANCH_LIST,
    STEP3_GET_FOREIGN_BANK_LIST,
    STEP3_GET_FOREIGN_BANK_BRANCH_LIST,
    /* 扣款帳號 */
    STEP3_CHARGE_TW_BANK_CHANGED,
    STEP3_CHARGE_TW_BANK_BRANCH_CHANGED,
    STEP3_CHARGE_TW_BANK_ACCOUNT_CHANGED,
    STEP3_CHARGE_FOREIGN_BANK_CHANGED,
    STEP3_CHARGE_FOREIGN_BANK_BRANCH_CHANGED,
    STEP3_CHARGE_FOREIGN_BANK_ACCOUNT_CHANGED,
    /* 買回/配息帳號 */
    STEP3_COLLECT_TW_BANK_CHANGED,
    STEP3_GET_TW_COLLECT_BANK_BRANCH_LIST,
    STEP3_COLLECT_TW_BANK_BRANCH_CHANGED,
    STEP3_COLLECT_TW_BANK_ACCOUNT_CHANGED,
    STEP3_COLLECT_FOREIGN_BANK_CHANGED,
    STEP3_GET_FOREIGN_COLLECT_BANK_BRANCH_LIST,
    STEP3_COLLECT_FOREIGN_BANK_BRANCH_CHANGED,
    STEP3_COLLECT_FOREIGN_BANK_ACCOUNT_CHANGED,
    STEP3_PASSPORT_NAME_CHANGED,
    /* 下一步 */
    STEP3_CHECK_DATA,
} from '../actions/types';

const INITIAL_STATE = {
    twBankList: {},
    foreignBankList: {},

    chargeData: {
        twBank: '',
        twBankBranch: '',
        twBankAccount: '',
        twBankBranchList: {},
        foreignBank: '',
        foreignBankBranch: '',
        foreignBankAccount: '',
        foreignBankBranchList: {}
    },
    collectData: {
        twBank: '',
        twBankBranch: '',
        twBankAccount: '',
        twBankBranchList: {},
        foreignBank: '',
        foreignBankBranch: '',
        foreignBankAccount: '',
        foreignBankBranchList: {}
    },
    passportName: '',
    failInfo: '',
};

const step3ErrorMsg = {
    chargeTWDataValid: "請完整輸入台幣扣款帳號",
    chargeForeignDataValid: "外幣扣款帳號輸入不完整",
    collectTWDataValid: "請完整輸入台幣買回帳號",
    collectForeignDataValid: "外幣買回帳號輸入不完整"
};

let step3RequiredData = {
    chargeData: {
        twBank: false,
        twBankBranch: false,
        twBankAccount: false,
        foreignBank: false,
        foreignBankBranch: false,
        foreignBankAccount: false
    },
    collectData: {
        twBank: false,
        twBankBranch: false,
        twBankAccount: false,
        foreignBank: false,
        foreignBankBranch: false,
        foreignBankAccount: false
    }
};

const inputValid = val => {
    return (val === '' || val === null || val === undefined || val === '0') ? false : true;
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case STEP3_GET_TW_BANK_LIST:
            return { ...state, twBankList: action.twBankList };
        case STEP3_GET_FOREIGN_BANK_LIST:
            return { ...state, foreignBankList: action.foreignBankList };

        /******************* 扣款帳號 *******************/
        case STEP3_CHARGE_TW_BANK_CHANGED:
            step3RequiredData.chargeData.twBank = inputValid(action.twBank);
            return { ...state, chargeData: { ...state.chargeData, twBank: action.twBank } };
        case STEP3_GET_TW_BANK_BRANCH_LIST:
            return { ...state, chargeData: { ...state.chargeData, twBankBranchList: action.twBankBranchList } };
        case STEP3_CHARGE_TW_BANK_BRANCH_CHANGED:
            step3RequiredData.chargeData.twBankBranch = inputValid(action.twBankBranch);
            return { ...state, chargeData: { ...state.chargeData, twBankBranch: action.twBankBranch } };
        case STEP3_CHARGE_TW_BANK_ACCOUNT_CHANGED:
            step3RequiredData.chargeData.twBankAccount = inputValid(action.twBankAccount);
            return { ...state, chargeData: { ...state.chargeData, twBankAccount: action.twBankAccount } };
        case STEP3_CHARGE_FOREIGN_BANK_CHANGED:
            step3RequiredData.chargeData.foreignBank = inputValid(action.foreignBank);
            return { ...state, chargeData: { ...state.chargeData, foreignBank: action.foreignBank } };
        case STEP3_GET_FOREIGN_BANK_BRANCH_LIST:
            return { ...state, chargeData: { ...state.chargeData, foreignBankBranchList: action.foreignBankBranchList } };
        case STEP3_CHARGE_FOREIGN_BANK_BRANCH_CHANGED:
            step3RequiredData.chargeData.foreignBankBranch = inputValid(action.foreignBankBranch);
            return { ...state, chargeData: { ...state.chargeData, foreignBankBranch: action.foreignBankBranch } };
        case STEP3_CHARGE_FOREIGN_BANK_ACCOUNT_CHANGED:
            step3RequiredData.chargeData.foreignBankAccount = inputValid(action.foreignBankAccount);
            return { ...state, chargeData: { ...state.chargeData, foreignBankAccount: action.foreignBankAccount } };
            
        /******************* 買回/配息帳號 *******************/
        case STEP3_COLLECT_TW_BANK_CHANGED:
            step3RequiredData.collectData.twBank = inputValid(action.twBank);
            return { ...state, collectData: { ...state.collectData, twBank: action.twBank } };
        case STEP3_GET_TW_COLLECT_BANK_BRANCH_LIST:
            return { ...state, collectData: { ...state.collectData, twBankBranchList: action.twBankBranchList } };
        case STEP3_COLLECT_TW_BANK_BRANCH_CHANGED:
            step3RequiredData.collectData.twBankBranch = inputValid(action.twBankBranch);
            return { ...state, collectData: { ...state.collectData, twBankBranch: action.twBankBranch } };
        case STEP3_COLLECT_TW_BANK_ACCOUNT_CHANGED:
            step3RequiredData.collectData.twBankAccount = inputValid(action.twBankAccount);
            return { ...state, collectData: { ...state.collectData, twBankAccount: action.twBankAccount } };
        case STEP3_COLLECT_FOREIGN_BANK_CHANGED:
            step3RequiredData.collectData.foreignBank = inputValid(action.foreignBank);
            return { ...state, collectData: { ...state.collectData, foreignBank: action.foreignBank } };
        case STEP3_GET_FOREIGN_COLLECT_BANK_BRANCH_LIST:
            return { ...state, collectData: { ...state.collectData, foreignBankBranchList: action.foreignBankBranchList } };
        case STEP3_COLLECT_FOREIGN_BANK_BRANCH_CHANGED:
            step3RequiredData.collectData.foreignBankBranch = inputValid(action.foreignBankBranch);
            return { ...state, collectData: { ...state.collectData, foreignBankBranch: action.foreignBankBranch } };
        case STEP3_COLLECT_FOREIGN_BANK_ACCOUNT_CHANGED:
            step3RequiredData.collectData.foreignBankAccount = inputValid(action.foreignBankAccount);
            return { ...state, collectData: { ...state.collectData, foreignBankAccount: action.foreignBankAccount } };
        case STEP3_PASSPORT_NAME_CHANGED:
            return { ...state, passportName: action.passportName };
        case STEP3_CHECK_DATA:
            const { chargeData, collectData } = step3RequiredData;

            /**
             * 項目：台幣扣款錯誤訊息
             * 條件：三者必填
             */
            if ( !(chargeData.twBank && chargeData.twBankBranch && chargeData.twBankAccount) )
                return { ...state, failInfo: step3ErrorMsg.chargeTWDataValid };
            /**
             * 項目：外幣扣款錯誤訊息
             * 條件：三者必填或三者皆空白
             */
            else if ( ( chargeData.foreignBank && (!chargeData.foreignBankBranch || !chargeData.foreignBankAccount) ) || 
                        ( chargeData.foreignBankBranch && (!chargeData.foreignBank || !chargeData.foreignBankAccount) ) || 
                        ( chargeData.foreignBankAccount && (!chargeData.foreignBank || !chargeData.foreignBankBranch) ) )
                return { ...state, failInfo: step3ErrorMsg.chargeForeignDataValid };
            /**
             * 項目：台幣買回錯誤訊息
             * 條件：三者必填
             */
            else if ( !(collectData.twBank && collectData.twBankBranch && collectData.twBankAccount) )
                return { ...state, failInfo: step3ErrorMsg.collectTWDataValid };
            /**
             * 項目：外幣買回錯誤訊息
             * 條件：三者必填或三者皆空白
             */
            else if ( ( collectData.foreignBank && (!collectData.foreignBankBranch || !collectData.foreignBankAccount) ) || 
                        ( collectData.foreignBankBranch && (!collectData.foreignBank || !collectData.foreignBankAccount) ) || 
                        ( collectData.foreignBankAccount && (!collectData.foreignBank || !collectData.foreignBankBranch) ) )
                return { ...state, failInfo: step3ErrorMsg.collectForeignDataValid };
            else
                return { ...state, failInfo: '' };
        default:
            return state;
    }
}