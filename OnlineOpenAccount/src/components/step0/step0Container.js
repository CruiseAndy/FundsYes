/* 
 * Created by kevin in 2018/01/02
 */

/* tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import Step0 from './step0';

/* actions */
import {
    nameChaned, emailChaned, phoneChaned, agreeChaned, sendData
} from '../../actions';

const mapStateToProps = ({ Step0Data }) => {
    return Step0Data;
}

export default connect(mapStateToProps, {
    nameChaned, emailChaned, phoneChaned, agreeChaned, sendData
})(Step0);