/* 
 * Created by kevin in 2018/01/02
 */

import axios from 'axios';
import { browserHistory } from 'react-router';

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
} from './types';

const twBankList_URL = 'https://rawgit.com/CruiseAndy/89be144959131982972639b9e098b820/raw/ca05e5506771607da527f8a28837aebb7e7db2b4/BankListTW.json';
const twBankBranchList_URL = 'https://rawgit.com/CruiseAndy/e210e211facd628e935bc82563a53579/raw/eaa049022b95b1967ddc0217e6e69b8f70693133/TWBankBranchList.json';
const foreignBankList_URL = 'https://rawgit.com/CruiseAndy/af6b87fcf3fccd5e6298f0edcd31c4d7/raw/19e1c979c6d36a0598c934d949453986b0bfceca/%08ForeignBankList.json';

export const getTWBankList = () => {
    return dispatch => {
        axios.get(twBankList_URL)
            .then( response => {
                dispatch(getTWBankListSuccess(response.data));
            })
            .catch( error => {
                console.log(`Get TW Bank List Fail ${error}`);
            })
    }
}

const getTWBankListSuccess = twBankList => {
    return {
        type: STEP3_GET_TW_BANK_LIST,
        twBankList: { ...twBankList, "0": "請選擇" }
    }
}

export const getForeignBankList = () => {
    return dispatch => {
        axios.get(foreignBankList_URL)
            .then( response => {
                dispatch(getForeignBankListSuccess(response.data));
            })
            .catch( error => {
                console.log(`Get TW Bank List Fail ${error}`);
            })
    }
}

const getForeignBankListSuccess = foreignBankList => {
    return {
        type: STEP3_GET_FOREIGN_BANK_LIST,
        foreignBankList: { ...foreignBankList, "0": "請選擇" }
    }
}

/******************* 扣款帳號 *******************/
export const chargeTWBankChanged = twBank => {
    return dispatch => {
        dispatch({
            type: STEP3_CHARGE_TW_BANK_CHANGED,
            twBank
        });

        if (twBank === "0") {
            dispatch({
                type: STEP3_GET_TW_BANK_BRANCH_LIST,
                twBankBranchList: {}
            });
            dispatch({
                type: STEP3_CHARGE_TW_BANK_BRANCH_CHANGED,
                twBankBranch: ''
            });
        }
        else {
            axios.get(twBankBranchList_URL)
                .then( response => {
                    dispatch(getTWBankBranchSuccess(response.data))
                })
                .catch( error => {
                    console.log(`Get TW Bank Branch List Fail ${error}`);
                })
        }
    }
}

const getTWBankBranchSuccess = twBankBranchList => {
    return {
        type: STEP3_GET_TW_BANK_BRANCH_LIST,
        twBankBranchList: { ...twBankBranchList, "0": "請選擇" }
    }
}

export const chargeTWBankBranchChanged = twBankBranch => {
    return {
        type: STEP3_CHARGE_TW_BANK_BRANCH_CHANGED,
        twBankBranch
    }
}

export const chargeTWBankAccountChanged = twBankAccount => {
    return {
        type: STEP3_CHARGE_TW_BANK_ACCOUNT_CHANGED,
        twBankAccount
    }
}

export const chargeForeignBankChanged = foreignBank => {
    return dispatch => {
        dispatch({
            type: STEP3_CHARGE_FOREIGN_BANK_CHANGED,
            foreignBank
        });

        if (foreignBank === "0") {
            dispatch({
                type: STEP3_GET_FOREIGN_BANK_BRANCH_LIST,
                foreignBankBranchList: {}
            });
            dispatch({
                type: STEP3_CHARGE_FOREIGN_BANK_BRANCH_CHANGED,
                foreignBankBranch: ''
            });
        }
        else {
            axios.get(twBankBranchList_URL)
                .then( response => {
                    dispatch(getForeignBankBranchSuccess(response.data))
                })
                .catch( error => {
                    console.log(`Get Foreign Bank Branch List Fail ${error}`);
                })
        }
    }
}

const getForeignBankBranchSuccess = foreignBankBranchList => {
    return {
        type: STEP3_GET_FOREIGN_BANK_BRANCH_LIST,
        foreignBankBranchList: { ...foreignBankBranchList, "0": "請選擇" }
    }
}

export const chargeForeignBankBranchChanged = foreignBankBranch => {
    return {
        type: STEP3_CHARGE_FOREIGN_BANK_BRANCH_CHANGED,
        foreignBankBranch
    }
}

export const chargeForeignBankAccountChanged = foreignBankAccount => {
    return {
        type: STEP3_CHARGE_FOREIGN_BANK_ACCOUNT_CHANGED,
        foreignBankAccount
    }
}

/******************* 買回/配息帳號 *******************/
export const sameTWChargeData = () => {
    return (dispatch, getState) => {
        const { chargeData } = getState().Step3Data;

        /* 複製銀行名稱 */
        dispatch({
            type: STEP3_COLLECT_TW_BANK_CHANGED,
            twBank : chargeData.twBank
        });

        /* 複製分行列表 */
        dispatch({
            type: STEP3_GET_TW_COLLECT_BANK_BRANCH_LIST,
            twBankBranchList : chargeData.twBankBranchList
        });

        /* 複製分行名稱 */
        dispatch({
            type: STEP3_COLLECT_TW_BANK_BRANCH_CHANGED,
            twBankBranch : chargeData.twBankBranch
        });
        
        /* 複製帳號資料 */
        dispatch({
            type: STEP3_COLLECT_TW_BANK_ACCOUNT_CHANGED,
            twBankAccount : chargeData.twBankAccount
        });
    }
}

export const collectTWBankChanged = twBank => {
    return dispatch => {
        dispatch({
            type: STEP3_COLLECT_TW_BANK_CHANGED,
            twBank
        });

        if (twBank === "0") {
            dispatch({
                type: STEP3_GET_TW_COLLECT_BANK_BRANCH_LIST,
                twBankBranchList: {}
            });
            dispatch({
                type: STEP3_COLLECT_TW_BANK_BRANCH_CHANGED,
                twBankBranch: ''
            });
        }
        else {
            axios.get(twBankBranchList_URL)
                .then( response => {
                    dispatch({
                        type: STEP3_GET_TW_COLLECT_BANK_BRANCH_LIST,
                        twBankBranchList: { ...response.data, "0": "請選擇" }
                    })
                })
                .catch( error => {
                    console.log(`Get TW Bank Branch List Fail ${error}`);
                })
        }
    }
}

export const collectTWBankBranchChanged = twBankBranch => {
    return {
        type: STEP3_COLLECT_TW_BANK_BRANCH_CHANGED,
        twBankBranch
    }
}

export const collectTWBankAccountChanged = twBankAccount => {
    return {
        type: STEP3_COLLECT_TW_BANK_ACCOUNT_CHANGED,
        twBankAccount
    }
}

export const sameForeignChargeData = () => {
    return (dispatch, getState) => {
        const { chargeData } = getState().Step3Data;

        /* 複製銀行名稱 */
        dispatch({
            type: STEP3_COLLECT_FOREIGN_BANK_CHANGED,
            foreignBank : chargeData.foreignBank
        });

        /* 複製分行列表 */
        dispatch({
            type: STEP3_GET_FOREIGN_COLLECT_BANK_BRANCH_LIST,
            foreignBankBranchList : chargeData.foreignBankBranchList
        });

        /* 複製分行名稱 */
        dispatch({
            type: STEP3_COLLECT_FOREIGN_BANK_BRANCH_CHANGED,
            foreignBankBranch : chargeData.foreignBankBranch
        });
        
        /* 複製帳號資料 */
        dispatch({
            type: STEP3_COLLECT_FOREIGN_BANK_ACCOUNT_CHANGED,
            foreignBankAccount : chargeData.foreignBankAccount
        });
    }
}

export const collectForeignBankChanged = foreignBank => {
    return dispatch => {
        dispatch({
            type: STEP3_COLLECT_FOREIGN_BANK_CHANGED,
            foreignBank
        });

        if (foreignBank === "0") {
            dispatch({
                type: STEP3_GET_FOREIGN_COLLECT_BANK_BRANCH_LIST,
                foreignBankBranchList: {}
            });
            dispatch({
                type: STEP3_COLLECT_FOREIGN_BANK_BRANCH_CHANGED,
                foreignBankBranch: ''
            });
        }
        else {
            axios.get(twBankBranchList_URL)
                .then( response => {
                    dispatch({
                        type: STEP3_GET_FOREIGN_COLLECT_BANK_BRANCH_LIST,
                        foreignBankBranchList: { ...response.data, "0": "請選擇" }
                    })
                })
                .catch( error => {
                    console.log(`Get TW Bank Branch List Fail ${error}`);
                })
        }
    }
}

export const collectForeignBankBranchChanged = foreignBankBranch => {
    return {
        type: STEP3_COLLECT_FOREIGN_BANK_BRANCH_CHANGED,
        foreignBankBranch
    }
}

export const collectForeignBankAccountChanged = foreignBankAccount => {
    return {
        type: STEP3_COLLECT_FOREIGN_BANK_ACCOUNT_CHANGED,
        foreignBankAccount
    }
}

export const passportNameChanged = passportName => {
    return {
        type: STEP3_PASSPORT_NAME_CHANGED,
        passportName
    }
}

/******************* 下一步 *******************/
export const step3NextStep = ({ history }) => {
    return (dispatch, getState) => {
        dispatch(checkStep3Data());

        if (getState().Step3Data.failInfo !== "")
            alert(getState().Step3Data.failInfo)
        else
            history.push('/Step4');
    }
}

const checkStep3Data = () => {
    return {
        type: STEP3_CHECK_DATA
    }
}