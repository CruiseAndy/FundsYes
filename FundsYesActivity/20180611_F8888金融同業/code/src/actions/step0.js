/* 
 * Created by kevin in 2018/01/02
 */

import {
    STEP0_NAME_CHANGED,
    STEP0_EMAIL_CHANGED,
    STEP0_PHONE_CHANGED,
    STEP0_AGREE_CHANGED,
} from './types';

import validator from 'validator';
import { validChineseName } from '../components/commonjs';

export const nameChaned = name => {
    return {
        type: STEP0_NAME_CHANGED,
        name
    }
}

export const emailChaned = email => {
    return {
        type: STEP0_EMAIL_CHANGED,
        email
    }
}

export const phoneChaned = phone => {
    return {
        type: STEP0_PHONE_CHANGED,
        phone
    }
}

export const agreeChaned = agree => {
    return {
        type: STEP0_AGREE_CHANGED,
        agree
    }
}

export const sendData = ({ name, email, phone, agree, history }) => {
    return dispatch => {
        !name
        ?   alert("請輸入您的姓名！")
        :   !validChineseName(name)
            ?   alert("請輸正確姓名格式！")
            :   !validator.isEmail(email)
                ?   alert("您的電子郵件信箱格式錯誤！")
                :   !validator.isMobilePhone(phone, 'zh-TW')
                    ?   alert("您的行動電話格式錯誤！")
                    :   !agree
                        ?   alert('請選取"我已閱讀並同意上述所有事項及條款"！')
                        :   history.push('/Step1');
    }
}