/* 
 * Created by kevin in 2018/01/02
 */

import axios from 'axios';
import {
    STEP2_Q1_ANS_CHANGED,
    STEP2_Q2_ANS_CHANGED,
    STEP2_Q3_ANS_CHANGED,
    STEP2_Q4_ANS_CHANGED,
    STEP2_Q5_ANS_CHANGED,
    STEP2_Q6_ANS_CHANGED,
    STEP2_Q7_ANS_CHANGED,
    STEP2_Q8_ANS_CHANGED,
    STEP2_Q9_ANS_CHANGED,
    STEP2_Q10_ANS_CHANGED,
    STEP2_GET_TEST_RESULT,
} from './types';

export const q1AnsChanged = () => {
    return (dispatch, getState) => {
        const { year } = getState().Step2Data;
        let age = new Date().getFullYear() - year;


        let ageGrade = age > 70 || age < 20
                ?   1
                :   age > 60 && age <= 70
                    ?   2
                    :   age > 50 && age <= 60
                        ?   3
                        :   age > 40 && age <= 50
                            ?   4
                            :   5

        dispatch({
            type: STEP2_Q1_ANS_CHANGED,
            age,
            ageGrade
        })
    }
}

export const q2AnsChanged = q2Ans => {
    return {
        type: STEP2_Q2_ANS_CHANGED,
        q2Ans
    }
}

export const q3AnsChanged = q3Ans => {
    return {
        type: STEP2_Q3_ANS_CHANGED,
        q3Ans
    }
}

export const q4AnsChanged = q4Ans => {
    return {
        type: STEP2_Q4_ANS_CHANGED,
        q4Ans
    }
}

export const q5AnsChanged = q5Ans => {
    return {
        type: STEP2_Q5_ANS_CHANGED,
        q5Ans
    }
}

export const q6AnsChanged = q6Ans => {
    return {
        type: STEP2_Q6_ANS_CHANGED,
        q6Ans
    }
}

export const q7AnsChanged = q7Ans => {
    return {
        type: STEP2_Q7_ANS_CHANGED,
        q7Ans
    }
}

export const q8AnsChanged = q8Ans => {
    return {
        type: STEP2_Q8_ANS_CHANGED,
        q8Ans
    }
}

export const q9AnsChanged = q9Ans => {
    return {
        type: STEP2_Q9_ANS_CHANGED,
        q9Ans
    }
}

export const q10AnsChanged = q10Ans => {
    return {
        type: STEP2_Q10_ANS_CHANGED,
        q10Ans
    }
}

export const getTestResult = ({ history }) => {
    return (dispatch, getState) => {
        dispatch({ type: STEP2_GET_TEST_RESULT });
        const { education, hurtProve } = getState().Step1Data;
        const { testResult, Q1 } = getState().Step2Data;

        const location = {
            pathname: `Result${testResult}`,
            state: {
                bAge: Number(Q1) >= 70 ? true : false,
                bEducation: education === "01" ? true : false,
                bHurtProve: hurtProve === "Y" ? true : false
            }
        }

        history.push(location);
    }
}