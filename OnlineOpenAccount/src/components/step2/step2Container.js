/* 
 * Created by kevin in 2018/01/10
 */

/* tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import Step2 from './step2';

/* actions */
import {
    q1AnsChanged,
    q2AnsChanged,
    q3AnsChanged,
    q4AnsChanged,
    q5AnsChanged,
    q6AnsChanged,
    q7AnsChanged,
    q8AnsChanged,
    q9AnsChanged,
    q10AnsChanged,
    getTestResult,
} from '../../actions';

const mapStateToProps = state => {

    state.Step2Data = { ...state.Step2Data, year: state.Step1Data.year };
    return state.Step2Data;
}

export default connect(mapStateToProps, {
    q1AnsChanged,
    q2AnsChanged,
    q3AnsChanged,
    q4AnsChanged,
    q5AnsChanged,
    q6AnsChanged,
    q7AnsChanged,
    q8AnsChanged,
    q9AnsChanged,
    q10AnsChanged,
    getTestResult,
})(Step2);