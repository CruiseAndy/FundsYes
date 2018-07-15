/* 
 * Created by kevin in 2017/12/30
 */

/* tools */
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
} from '../actions/types';

const INITIAL_STATE = {
    year: 0,
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q6: '',
    Q7: '',
    Q8: [],
    Q9: [],
    Q10: [],
    testResult: 0,
}

let gradeStroe = {
    topic1: 0,
    topic2: 0,
    topic3: 0,
    topic4: 0,
    topic5: 0,
    topic6: 0,
    topic7: 0,
    topic8: 0,
    topic9: 0,
    topic10: 0
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case STEP2_Q1_ANS_CHANGED:
            gradeStroe.topic1 = action.ageGrade;
            return { ...state, Q1: action.age };
        case STEP2_Q2_ANS_CHANGED:
            // +1: action.ans is index
            gradeStroe.topic2 = Number(action.q2Ans) + 1;
            return { ...state, Q2: action.q2Ans };
        case STEP2_Q3_ANS_CHANGED:
            gradeStroe.topic3 = Number(action.q3Ans) + 1;
            return { ...state, Q3: action.q3Ans };
        case STEP2_Q4_ANS_CHANGED:
            gradeStroe.topic4 = Number(action.q4Ans) + 1;
            return { ...state, Q4: action.q4Ans };
        case STEP2_Q5_ANS_CHANGED:
            gradeStroe.topic5 = Number(action.q5Ans) + 1;
            return { ...state, Q5: action.q5Ans };
        case STEP2_Q6_ANS_CHANGED:
            gradeStroe.topic6 = Number(action.q6Ans) + 1;
            return { ...state, Q6: action.q6Ans };
        case STEP2_Q7_ANS_CHANGED:
            gradeStroe.topic7 = Number(action.q7Ans) + 1;
            return { ...state, Q7: action.q7Ans };
        case STEP2_Q8_ANS_CHANGED:
            let q8Ans = [];
            if (state.Q8.includes(action.q8Ans)) {
                state.Q8.map(item => {
                    if (item !== action.q8Ans)
                        q8Ans = [ ...q8Ans, item ];
                })
            }
            else {
                q8Ans = [ ...state.Q8, action.q8Ans ];
            }
            q8Ans = q8Ans.sort();
            gradeStroe.topic8 = Number(q8Ans[q8Ans.length - 1]) + 1;
            return { ...state, Q8: q8Ans };
        case STEP2_Q9_ANS_CHANGED:
            let q9Ans = [];
            if (state.Q9.includes(action.q9Ans)) {
                state.Q9.map(item => {
                    if (item !== action.q9Ans)
                        q9Ans = [ ...q9Ans, item ];
                })
            }
            else {
                q9Ans = [ ...state.Q9, action.q9Ans ];
            }
            q9Ans = q9Ans.sort();
            gradeStroe.topic9 = Number(q9Ans[q9Ans.length - 1]) + 1;
            return { ...state, Q9: q9Ans };
        case STEP2_Q10_ANS_CHANGED:
            let q10Ans = [];
            if (state.Q10.includes(action.q10Ans)) {
                state.Q10.map(item => {
                    if (item !== action.q10Ans)
                        q10Ans = [ ...q10Ans, item ];
                })
            }
            else {
                q10Ans = [ ...state.Q10, action.q10Ans ];
            }
            q10Ans = q10Ans.sort();
            gradeStroe.topic10 = Number(q10Ans[q10Ans.length - 1]) + 1;
            return { ...state, Q10: q10Ans };
        case STEP2_GET_TEST_RESULT:
            let gradeSum = 0;
            for (let gradeItem of Object.values(gradeStroe)) {
                gradeSum += gradeItem;
            }
            return { ...state, testResult: gradeSum };
        default:
            return state;
    }
}