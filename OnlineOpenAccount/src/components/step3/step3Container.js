/* 
 * Created by kevin in 2018/01/11
 */

/* tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import Step3 from './step3';

/* actions */
import {
    getTWBankList,
    getForeignBankList,
    /* 扣款帳號 */
    chargeTWBankChanged,
    chargeTWBankBranchChanged,
    chargeTWBankAccountChanged,
    chargeForeignBankChanged,
    chargeForeignBankBranchChanged,
    chargeForeignBankAccountChanged,
    /* 買回/配息帳號 */
    sameTWChargeData,
    collectTWBankChanged,
    collectTWBankBranchChanged,
    collectTWBankAccountChanged,
    sameForeignChargeData,
    collectForeignBankChanged,
    collectForeignBankBranchChanged,
    collectForeignBankAccountChanged,
    passportNameChanged,
    /* 下一步 */
    step3NextStep,
} from '../../actions';

const mapStateToProps = state => {
    const { Step3Data, Step2Data } = state;
    return { Step3Data, Step2Data };
}

export default connect(mapStateToProps, {
    getTWBankList,
    getForeignBankList,
    /* 扣款帳號 */
    chargeTWBankChanged,
    chargeTWBankBranchChanged,
    chargeTWBankAccountChanged,
    chargeForeignBankChanged,
    chargeForeignBankBranchChanged,
    chargeForeignBankAccountChanged,
    /* 買回/配息帳號 */
    sameTWChargeData,
    collectTWBankChanged,
    collectTWBankBranchChanged,
    collectTWBankAccountChanged,
    sameForeignChargeData,
    collectForeignBankChanged,
    collectForeignBankBranchChanged,
    collectForeignBankAccountChanged,
    passportNameChanged,
    /* 下一步 */
    step3NextStep,
})(Step3);